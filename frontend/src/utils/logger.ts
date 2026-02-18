// 前端日志工具 - 同步到服务端
import api from "./api";

// 日志级别
type LogLevel = "debug" | "info" | "warn" | "error";

// 日志源
const LOG_SOURCE = "Frontend";

// 原始 console 方法
const originalConsole = {
  debug: console.debug.bind(console),
  info: console.info.bind(console),
  warn: console.warn.bind(console),
  error: console.error.bind(console),
  log: console.log.bind(console),
};

// 是否初始化
let initialized = false;

// 检查是否在 Wails 环境中（通过检查 window.go 是否存在）
const isWailsEnvironment = () => {
  return typeof (window as any).go !== "undefined";
};

// 发送日志到服务端
const sendToBackend = (level: LogLevel, ...args: any[]) => {
  if (!isWailsEnvironment()) {
    // 非 Wails 环境，不发送到后端
    return;
  }

  try {
    // 格式化消息
    const message = args
      .map((arg) => {
        if (typeof arg === "object") {
          try {
            return JSON.stringify(arg);
          } catch {
            return String(arg);
          }
        }
        return String(arg);
      })
      .join(" ");

    // 调用服务端方法
    api.log(level, message, LOG_SOURCE);
  } catch (error) {
    // 如果发送失败，不影响原有的 console 输出
    originalConsole.debug("Failed to send log to backend:", error);
  }
};

// 初始化日志系统
export const initLogger = () => {
  if (initialized) return;
  initialized = true;

  // 重写 console 方法
  console.debug = (...args: any[]) => {
    originalConsole.debug(...args);
    sendToBackend("debug", ...args);
  };

  console.info = (...args: any[]) => {
    originalConsole.info(...args);
    sendToBackend("info", ...args);
  };

  console.warn = (...args: any[]) => {
    originalConsole.warn(...args);
    sendToBackend("warn", ...args);
  };

  console.error = (...args: any[]) => {
    originalConsole.error(...args);
    sendToBackend("error", ...args);
  };

  console.log = (...args: any[]) => {
    originalConsole.log(...args);
    sendToBackend("info", ...args);
  };

  // 捕获未处理的 Promise 异常
  window.addEventListener("unhandledrejection", (event) => {
    console.error("Unhandled Promise rejection:", event.reason);
  });

  // 捕获未处理的异常
  window.addEventListener("error", (event) => {
    console.error(
      "Uncaught error:",
      event.message,
      "at",
      event.filename,
      ":",
      event.lineno,
      ":",
      event.colno
    );
  });

  console.info("日志系统初始化完成");
};

// 手动记录日志的方法
export const logger = {
  debug: (...args: any[]) => {
    originalConsole.debug(...args);
    sendToBackend("debug", ...args);
  },
  info: (...args: any[]) => {
    originalConsole.info(...args);
    sendToBackend("info", ...args);
  },
  warn: (...args: any[]) => {
    originalConsole.warn(...args);
    sendToBackend("warn", ...args);
  },
  error: (...args: any[]) => {
    originalConsole.error(...args);
    sendToBackend("error", ...args);
  },
};

export default logger;
