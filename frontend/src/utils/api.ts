// API 工具函数 - 与后端通信

// 导入 Wails 自动生成的 API
import {
  CreateProject,
  GetProjects,
  GetProject,
  UpdateProject,
  DeleteProject,
  SetProjectLLMApiKey,
  GetProjectLLMApiKey,
  SetProjectTTSApiKey,
  GetProjectTTSApiKey,
  GetProjectKnownCharacters,
  UpdateProjectKnownCharacters,
  DeleteProjectKnownCharacter,
  SetKnownCharacterVoice,
  UpdateKnownCharacter,
  CreateChapter,
  GetChapters,
  GetChapter,
  UpdateChapter,
  DeleteChapter,
  ReorderChapters,
  CreateCharacter,
  GetCharacters,
  GetCharacter,
  UpdateCharacter,
  DeleteCharacter,
  UpdateNarratorVoice,
  GetVoices,
  GetVoice,
  CreateParagraph,
  GetParagraphs,
  GetParagraph,
  UpdateParagraph,
  DeleteParagraph,
  SplitParagraph,
  SplitParagraphPreview,
  GenerateParagraphAudio,
  GenerateBatchAudio,
  GenerateChapterAudio,
  Log,
} from "wailsjs/go/main/App";

// 工程相关 API
export const api = {
  // 工程操作
  createProject: async (name: string, description: string): Promise<number> => {
    try {
      const result = await CreateProject(name, description);
      return result;
    } catch (error) {
      console.error("Failed to create project:", error);
      throw error;
    }
  },

  getProjects: async (): Promise<any[]> => {
    try {
      const result = await GetProjects();
      return result || [];
    } catch (error) {
      console.error("Failed to get projects:", error);
      throw error;
    }
  },

  getProject: async (id: number): Promise<any> => {
    try {
      const result = await GetProject(id);
      return result;
    } catch (error) {
      console.error("Failed to get project:", error);
      throw error;
    }
  },

  updateProject: async (
    id: number,
    name: string,
    description: string
  ): Promise<void> => {
    try {
      await UpdateProject(id, name, description);
    } catch (error) {
      console.error("Failed to update project:", error);
      throw error;
    }
  },

  deleteProject: async (id: number): Promise<void> => {
    try {
      await DeleteProject(id);
    } catch (error) {
      console.error("Failed to delete project:", error);
      throw error;
    }
  },

  setProjectLLMApiKey: async (id: number, apiKey: string): Promise<void> => {
    try {
      await SetProjectLLMApiKey(id, apiKey);
    } catch (error) {
      console.error("Failed to set project LLM API key:", error);
      throw error;
    }
  },

  getProjectLLMApiKey: async (id: number): Promise<string> => {
    try {
      const result = await GetProjectLLMApiKey(id);
      return result || "";
    } catch (error) {
      console.error("Failed to get project LLM API key:", error);
      throw error;
    }
  },

  setProjectTTSApiKey: async (id: number, apiKey: string): Promise<void> => {
    try {
      await SetProjectTTSApiKey(id, apiKey);
    } catch (error) {
      console.error("Failed to set project TTS API key:", error);
      throw error;
    }
  },

  getProjectTTSApiKey: async (id: number): Promise<string> => {
    try {
      const result = await GetProjectTTSApiKey(id);
      return result || "";
    } catch (error) {
      console.error("Failed to get project TTS API key:", error);
      throw error;
    }
  },

  getProjectKnownCharacters: async (projectId: number): Promise<any[]> => {
    try {
      const result = await GetProjectKnownCharacters(projectId);
      return result || [];
    } catch (error) {
      console.error("Failed to get project known characters:", error);
      throw error;
    }
  },

  updateProjectKnownCharacters: async (projectId: number, characters: any[]): Promise<void> => {
    try {
      await UpdateProjectKnownCharacters(projectId, characters);
    } catch (error) {
      console.error("Failed to update project known characters:", error);
      throw error;
    }
  },

  deleteProjectKnownCharacter: async (projectId: number, characterName: string): Promise<void> => {
    try {
      await DeleteProjectKnownCharacter(projectId, characterName);
    } catch (error) {
      console.error("Failed to delete project known character:", error);
      throw error;
    }
  },

  setKnownCharacterVoice: async (projectId: number, characterName: string, voiceId: string): Promise<void> => {
    try {
      await SetKnownCharacterVoice(projectId, characterName, voiceId);
    } catch (error) {
      console.error("Failed to set known character voice:", error);
      throw error;
    }
  },

  updateKnownCharacter: async (
    projectId: number,
    characterName: string,
    description: string,
    gender: string,
    age: string,
    aliases: string[]
  ): Promise<void> => {
    try {
      await UpdateKnownCharacter(projectId, characterName, description, gender, age, aliases);
    } catch (error) {
      console.error("Failed to update known character:", error);
      throw error;
    }
  },

  // 章节操作
  createChapter: async (
    projectId: number,
    title: string,
    content: string
  ): Promise<number> => {
    try {
      const result = await CreateChapter(projectId, title, content);
      return result;
    } catch (error) {
      console.error("Failed to create chapter:", error);
      throw error;
    }
  },

  getChapters: async (projectId: number): Promise<any[]> => {
    try {
      const result = await GetChapters(projectId);
      return result || [];
    } catch (error) {
      console.error("Failed to get chapters:", error);
      throw error;
    }
  },

  getChapter: async (id: number): Promise<any> => {
    try {
      const result = await GetChapter(id);
      return result;
    } catch (error) {
      console.error("Failed to get chapter:", error);
      throw error;
    }
  },

  updateChapter: async (
    id: number,
    title: string,
    content: string
  ): Promise<void> => {
    try {
      await UpdateChapter(id, title, content);
    } catch (error) {
      console.error("Failed to update chapter:", error);
      throw error;
    }
  },

  deleteChapter: async (id: number): Promise<void> => {
    try {
      await DeleteChapter(id);
    } catch (error) {
      console.error("Failed to delete chapter:", error);
      throw error;
    }
  },

  reorderChapters: async (
    projectId: number,
    chapterIds: number[]
  ): Promise<void> => {
    try {
      await ReorderChapters(projectId, chapterIds);
    } catch (error) {
      console.error("Failed to reorder chapters:", error);
      throw error;
    }
  },

  // 段落操作
  createParagraph: async (
    chapterId: number,
    content: string,
    speaker: string,
    tone: string,
    voiceId: string,
    speed: number
  ): Promise<number> => {
    try {
      const result = await CreateParagraph(chapterId, content, speaker, tone, voiceId, speed);
      return result;
    } catch (error) {
      console.error("Failed to create paragraph:", error);
      throw error;
    }
  },

  getParagraphs: async (chapterId: number): Promise<any[]> => {
    try {
      const result = await GetParagraphs(chapterId);
      return result || [];
    } catch (error) {
      console.error("Failed to get paragraphs:", error);
      throw error;
    }
  },

  getParagraph: async (id: number): Promise<any> => {
    try {
      const result = await GetParagraph(id);
      return result;
    } catch (error) {
      console.error("Failed to get paragraph:", error);
      throw error;
    }
  },

  updateParagraph: async (
    id: number,
    content: string,
    speaker: string,
    tone: string,
    voiceId: string,
    speed: number,
    audioPath: string = "",
    duration: number = 0,
    orderIndex: number = 0
  ): Promise<void> => {
    try {
      await UpdateParagraph(id, content, speaker, tone, voiceId, speed, audioPath, duration, orderIndex);
    } catch (error) {
      console.error("Failed to update paragraph:", error);
      throw error;
    }
  },

  deleteParagraph: async (id: number): Promise<void> => {
    try {
      await DeleteParagraph(id);
    } catch (error) {
      console.error("Failed to delete paragraph:", error);
      throw error;
    }
  },

  splitParagraph: async (chapterId: number): Promise<any[]> => {
    try {
      const result = await SplitParagraph(chapterId);
      return result || [];
    } catch (error) {
      console.error("Failed to split paragraph:", error);
      throw error;
    }
  },

  splitParagraphPreview: async (content: string): Promise<any[]> => {
    try {
      const result = await SplitParagraphPreview(content);
      return result || [];
    } catch (error) {
      console.error("Failed to split paragraph preview:", error);
      throw error;
    }
  },

  // TTS 操作
  generateParagraphAudio: async (paragraphId: number): Promise<any> => {
    try {
      const result = await GenerateParagraphAudio(paragraphId);
      return result;
    } catch (error) {
      console.error("Failed to generate paragraph audio:", error);
      throw error;
    }
  },

  generateBatchAudio: async (paragraphIds: number[]): Promise<any[]> => {
    try {
      const result = await GenerateBatchAudio(paragraphIds);
      return result || [];
    } catch (error) {
      console.error("Failed to generate batch audio:", error);
      throw error;
    }
  },

  generateChapterAudio: async (chapterId: number): Promise<any[]> => {
    try {
      const result = await GenerateChapterAudio(chapterId);
      return result || [];
    } catch (error) {
      console.error("Failed to generate chapter audio:", error);
      throw error;
    }
  },

  // 角色操作
  createCharacter: async (
    projectId: number,
    name: string,
    description: string,
    voiceId: string
  ): Promise<number> => {
    try {
      const result = await CreateCharacter(projectId, name, description, voiceId);
      return result;
    } catch (error) {
      console.error("Failed to create character:", error);
      throw error;
    }
  },

  getCharacters: async (projectId: number): Promise<any[]> => {
    try {
      const result = await GetCharacters(projectId);
      return result || [];
    } catch (error) {
      console.error("Failed to get characters:", error);
      throw error;
    }
  },

  getCharacter: async (id: number): Promise<any> => {
    try {
      const result = await GetCharacter(id);
      return result;
    } catch (error) {
      console.error("Failed to get character:", error);
      throw error;
    }
  },

  updateCharacter: async (
    id: number,
    name: string,
    description: string,
    voiceId: string
  ): Promise<void> => {
    try {
      await UpdateCharacter(id, name, description, voiceId);
    } catch (error) {
      console.error("Failed to update character:", error);
      throw error;
    }
  },

  deleteCharacter: async (id: number): Promise<void> => {
    try {
      await DeleteCharacter(id);
    } catch (error) {
      console.error("Failed to delete character:", error);
      throw error;
    }
  },

  updateNarratorVoice: async (projectId: number, voiceId: string): Promise<void> => {
    try {
      await UpdateNarratorVoice(projectId, voiceId);
    } catch (error) {
      console.error("Failed to update narrator voice:", error);
      throw error;
    }
  },

  // 音色操作
  getVoices: async (): Promise<any[]> => {
    try {
      const result = await GetVoices();
      return result || [];
    } catch (error) {
      console.error("Failed to get voices:", error);
      throw error;
    }
  },

  getVoice: async (id: string): Promise<any> => {
    try {
      const result = await GetVoice(id);
      return result;
    } catch (error) {
      console.error("Failed to get voice:", error);
      throw error;
    }
  },

  // AI 操作（待实现）
  analyzeText: async (text: string): Promise<any> => {
    throw new Error("Not implemented");
  },

  generateAudio: async (
    text: string,
    voiceId: string,
    tone: string,
    speed: number
  ): Promise<string> => {
    throw new Error("Not implemented");
  },

  // 日志同步
  log: async (level: string, message: string, source: string): Promise<void> => {
    try {
      await Log(level, message, source);
    } catch (error) {
      console.error("Failed to send log to backend:", error);
    }
  },
};

// 导出 API
export default api;
