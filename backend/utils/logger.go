package utils

import (
	"fmt"
	"io"
	"log"
	"os"
	"sync"
	"time"
)

// LogLevel 日志级别
type LogLevel int

const (
	LogLevelDebug LogLevel = iota
	LogLevelInfo
	LogLevelWarn
	LogLevelError
)

var (
	logger    *log.Logger
	logFile   *os.File
	logLevel  LogLevel = LogLevelInfo
	logMutex  sync.Mutex
	logPrefix = "[听墨语]"
)

// InitLogger 初始化日志
func InitLogger() error {
	logMutex.Lock()

	// 创建日志目录
	logDir := "logs"
	if err := os.MkdirAll(logDir, 0755); err != nil {
		logMutex.Unlock()
		return fmt.Errorf("创建日志目录失败: %w", err)
	}

	// 按日期创建日志文件
	dateStr := time.Now().Format("2006-01-02")
	logPath := fmt.Sprintf("%s/tmy_%s.log", logDir, dateStr)

	var err error
	logFile, err = os.OpenFile(logPath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)
	if err != nil {
		logMutex.Unlock()
		return fmt.Errorf("打开日志文件失败: %w", err)
	}

	// 同时输出到控制台和文件
	multiWriter := io.MultiWriter(os.Stdout, logFile)
	logger = log.New(multiWriter, logPrefix+" ", log.LstdFlags|log.Lmicroseconds)

	logMutex.Unlock()

	Info("日志系统初始化完成")
	return nil
}

// CloseLogger 关闭日志
func CloseLogger() error {
	// 先记录日志（内部会加锁）
	logMutex.Lock()
	if logFile != nil {
		logMutex.Unlock()
		Info("日志系统关闭")
		logMutex.Lock()
	}

	if logFile != nil {
		f := logFile
		logFile = nil
		logger = nil
		logMutex.Unlock()
		return f.Close()
	}
	logMutex.Unlock()
	return nil
}

// SetLogLevel 设置日志级别
func SetLogLevel(level LogLevel) {
	logMutex.Lock()
	defer logMutex.Unlock()
	logLevel = level
}

// logMessage 记录日志
func logMessage(level LogLevel, levelStr string, format string, args ...interface{}) {
	logMutex.Lock()
	defer logMutex.Unlock()

	if level < logLevel {
		return
	}

	msg := fmt.Sprintf(format, args...)
	fullMsg := fmt.Sprintf("[%s] %s", levelStr, msg)

	if logger != nil {
		logger.Println(fullMsg)
	} else {
		// 如果 logger 还没初始化，直接输出到控制台
		log.Printf("%s %s", logPrefix, fullMsg)
	}
}

// Debug 调试日志
func Debug(format string, args ...interface{}) {
	logMessage(LogLevelDebug, "DEBUG", format, args...)
}

// Info 信息日志
func Info(format string, args ...interface{}) {
	logMessage(LogLevelInfo, "INFO", format, args...)
}

// Warn 警告日志
func Warn(format string, args ...interface{}) {
	logMessage(LogLevelWarn, "WARN", format, args...)
}

// Error 错误日志
func Error(format string, args ...interface{}) {
	logMessage(LogLevelError, "ERROR", format, args...)
}

// LogFromFrontend 前端日志同步
func LogFromFrontend(level string, message string, source string) {
	logLevelMap := map[string]LogLevel{
		"debug": LogLevelDebug,
		"info":  LogLevelInfo,
		"warn":  LogLevelWarn,
		"error": LogLevelError,
	}

	lvl, ok := logLevelMap[level]
	if !ok {
		lvl = LogLevelInfo
	}

	logMessage(lvl, "FRONTEND", "[%s] %s", source, message)
}
