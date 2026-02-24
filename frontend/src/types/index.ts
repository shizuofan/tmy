// 类型定义文件

// 角色信息（已知角色）
export interface CharacterInfo {
  name: string;
  description: string;
  voiceId: string;
  gender: string;
  age: string;
  aliases: string[];
  chapterNames: string[];
  lastSeenAt: number;
}

// 工程类型
export interface Project {
  id: number;
  name: string;
  description: string;
  llmApiKey: string;
  ttsApiKey: string;
  ttsAppId: string;
  ttsToken: string;
  knownCharacters: CharacterInfo[];
  narratorVoiceId: string;
  createdAt: string;
  updatedAt: string;
}

// 章节类型
export interface Chapter {
  id: number;
  projectId: number;
  title: string;
  content: string;
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
}

// 段落类型
export interface Paragraph {
  id: number;
  chapterId: number;
  content: string;
  speaker: string;
  tone: string;
  voiceId: string;
  speed: number;       // 语速 [-50, 100], 100=2.0x, -50=0.5x, 0=1.0x
  volume: number;      // 音量 [-50, 100], 100=2.0x, -50=0.5x, 0=1.0x
  audioPath: string;
  audioData: string;
  duration: number;
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
}

// 角色类型
export interface Character {
  id: number;
  projectId: number;
  name: string;
  description: string;
  voiceId: string;
  gender: string;
  age: string;
  aliases: string[];
  chapterNames: string[];
  lastSeenAt: number;
  createdAt: string;
  updatedAt: string;
}

// 音色类型
export interface Voice {
  id: string;
  name: string;
  description: string;
  supportedTones: string[];
  language: string;
  gender: string;
  category: string;
}

// 情感类型常量 - 中文音色
export const ToneNeutral = "neutral";
export const ToneHappy = "happy";
export const ToneSad = "sad";
export const ToneAngry = "angry";
export const ToneSurprised = "surprised";
export const ToneFear = "fear";
export const ToneHate = "hate";
export const ToneExcited = "excited";
export const ToneColdness = "coldness";
export const ToneDepressed = "depressed";
export const ToneLoveyDovey = "lovey-dovey";
export const ToneShy = "shy";
export const ToneComfort = "comfort";
export const ToneTension = "tension";
export const ToneTender = "tender";
export const ToneStorytelling = "storytelling";
export const ToneRadio = "radio";
export const ToneMagnetic = "magnetic";
export const ToneAdvertising = "advertising";
export const ToneVocalFry = "vocal-fry";
export const ToneASMR = "ASMR";
export const ToneNews = "news";
export const ToneEntertainment = "entertainment";
export const ToneDialect = "dialect";

// 情感类型常量 - 英文音色
export const ToneENNeutral = "neutral";
export const ToneENHappy = "happy";
export const ToneENAngry = "angry";
export const ToneENSad = "sad";
export const ToneENExcited = "excited";
export const ToneENChat = "chat";
export const ToneENASMR = "ASMR";
export const ToneENWarm = "warm";
export const ToneENAffectionate = "affectionate";
export const ToneENAuthoritative = "authoritative";

// 支持的中文情感类型列表
export const SupportedChineseTones = [
  { value: ToneNeutral, label: "中性" },
  { value: ToneHappy, label: "开心" },
  { value: ToneSad, label: "悲伤" },
  { value: ToneAngry, label: "生气" },
  { value: ToneSurprised, label: "惊讶" },
  { value: ToneFear, label: "恐惧" },
  { value: ToneHate, label: "厌恶" },
  { value: ToneExcited, label: "激动" },
  { value: ToneColdness, label: "冷漠" },
  { value: ToneDepressed, label: "沮丧" },
  { value: ToneLoveyDovey, label: "撒娇" },
  { value: ToneShy, label: "害羞" },
  { value: ToneComfort, label: "安慰鼓励" },
  { value: ToneTension, label: "咆哮/焦急" },
  { value: ToneTender, label: "温柔" },
  { value: ToneStorytelling, label: "讲故事/自然讲述" },
  { value: ToneRadio, label: "情感电台" },
  { value: ToneMagnetic, label: "磁性" },
  { value: ToneAdvertising, label: "广告营销" },
  { value: ToneVocalFry, label: "气泡音" },
  { value: ToneASMR, label: "低语(ASMR)" },
  { value: ToneNews, label: "新闻播报" },
  { value: ToneEntertainment, label: "娱乐八卦" },
  { value: ToneDialect, label: "方言" },
];

// 支持的英文情感类型列表
export const SupportedEnglishTones = [
  { value: ToneENNeutral, label: "中性" },
  { value: ToneENHappy, label: "愉悦" },
  { value: ToneENAngry, label: "愤怒" },
  { value: ToneENSad, label: "悲伤" },
  { value: ToneENExcited, label: "兴奋" },
  { value: ToneENChat, label: "对话/闲聊" },
  { value: ToneENASMR, label: "低语(ASMR)" },
  { value: ToneENWarm, label: "温暖" },
  { value: ToneENAffectionate, label: "深情" },
  { value: ToneENAuthoritative, label: "权威" },
];

// 获取所有情感类型列表（合并中英文）
export const SupportedTones = [
  ...SupportedChineseTones,
  { value: ToneENChat, label: "对话/闲聊" },
  { value: ToneENWarm, label: "温暖" },
  { value: ToneENAffectionate, label: "深情" },
  { value: ToneENAuthoritative, label: "权威" },
];

// 情感参数名称映射
export const ToneNameMap: Record<string, string> = {
  // 中文情感
  "neutral": "中性",
  "happy": "开心",
  "sad": "悲伤",
  "angry": "生气",
  "surprised": "惊讶",
  "fear": "恐惧",
  "hate": "厌恶",
  "excited": "激动",
  "coldness": "冷漠",
  "depressed": "沮丧",
  "lovey-dovey": "撒娇",
  "shy": "害羞",
  "comfort": "安慰鼓励",
  "tension": "咆哮/焦急",
  "tender": "温柔",
  "storytelling": "讲故事/自然讲述",
  "radio": "情感电台",
  "magnetic": "磁性",
  "advertising": "广告营销",
  "vocal-fry": "气泡音",
  "ASMR": "低语(ASMR)",
  "news": "新闻播报",
  "entertainment": "娱乐八卦",
  "dialect": "方言",
  // 英文情感
  "chat": "对话/闲聊",
  "warm": "温暖",
  "affectionate": "深情",
  "authoritative": "权威",
};

// 性别常量
export const GenderMale = "male";
export const GenderFemale = "female";
export const GenderUnknown = "unknown";

// 性别显示名称映射
export const GenderNameMap: Record<string, string> = {
  "male": "男",
  "female": "女",
  "unknown": "未知",
};

// 年龄常量
export const AgeChild = "child";
export const AgeTeen = "teen";
export const AgeAdult = "adult";
export const AgeSenior = "senior";
export const AgeUnknown = "unknown";

// 年龄显示名称映射
export const AgeNameMap: Record<string, string> = {
  "child": "儿童",
  "teen": "少年",
  "adult": "成人",
  "senior": "老年",
  "unknown": "未知",
};

// 语速范围 [-50, 100], 100=2.0x, -50=0.5x, 0=1.0x
export const MinSpeed = -50;
export const MaxSpeed = 100;
export const DefSpeed = 0;

// 音量范围 [-50, 100], 100=2.0x, -50=0.5x, 0=1.0x
export const MinVolume = -50;
export const MaxVolume = 100;
export const DefVolume = 0;

// 将语速值[-50,100]转换为倍率显示
export function convertSpeedToRatio(speed: number): number {
  if (speed <= 0) {
    // -50 -> 0.5, 0 -> 1.0
    return 0.5 + (speed + 50) / 100 * 0.5;
  }
  // 0 -> 1.0, 100 -> 2.0
  return 1.0 + speed / 100 * 1.0;
}

// 将音量值[-50,100]转换为倍率显示
export function convertVolumeToRatio(volume: number): number {
  if (volume <= 0) {
    // -50 -> 0.5, 0 -> 1.0
    return 0.5 + (volume + 50) / 100 * 0.5;
  }
  // 0 -> 1.0, 100 -> 2.0
  return 1.0 + volume / 100 * 1.0;
}

// 应用状态类型
export interface AppState {
  currentProject: Project | null;
  currentChapter: Chapter | null;
  projects: Project[];
  chapters: Chapter[];
  paragraphs: Paragraph[];
  characters: Character[];
  voices: Voice[];
  isLoading: boolean;
  error: string | null;
}

// TTS 配置类型
export interface TTSConfig {
  apiKey: string;
  endpoint: string;
  appId: string;
}

// 操作类型
export type AppAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "SET_PROJECTS"; payload: Project[] }
  | { type: "SET_CURRENT_PROJECT"; payload: Project | null }
  | { type: "SET_CHAPTERS"; payload: Chapter[] }
  | { type: "SET_CURRENT_CHAPTER"; payload: Chapter | null }
  | { type: "SET_PARAGRAPHS"; payload: Paragraph[] }
  | { type: "SET_CHARACTERS"; payload: Character[] }
  | { type: "SET_VOICES"; payload: Voice[] };
