// 类型定义文件

// 工程类型
export interface Project {
  id: number;
  name: string;
  description: string;
  llmApiKey: string;
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
  speed: number;
  audioPath: string;
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
}

// 情感类型常量
export const ToneNeutral = "neutral";
export const ToneHappy = "happy";
export const ToneSad = "sad";
export const ToneAngry = "angry";
export const ToneExcited = "excited";
export const ToneFearful = "fearful";
export const ToneSurprised = "surprised";
export const ToneDisgusted = "disgusted";

// 支持的情感类型列表
export const SupportedTones = [
  { value: ToneNeutral, label: "中性" },
  { value: ToneHappy, label: "开心" },
  { value: ToneSad, label: "悲伤" },
  { value: ToneAngry, label: "愤怒" },
  { value: ToneExcited, label: "兴奋" },
  { value: ToneFearful, label: "恐惧" },
  { value: ToneSurprised, label: "惊讶" },
  { value: ToneDisgusted, label: "厌恶" },
];

// 语速范围
export const MinSpeed = 0.5;
export const MaxSpeed = 2.0;
export const DefSpeed = 1.0;

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
