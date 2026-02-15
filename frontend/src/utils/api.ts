// API 工具函数 - 与后端通信

// 导入 Wails 自动生成的 API
import {
  CreateProject,
  GetProjects,
  GetProject,
  UpdateProject,
  DeleteProject,
  CreateChapter,
  GetChapters,
  GetChapter,
  UpdateChapter,
  DeleteChapter,
  ReorderChapters,
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

  // 段落操作（待实现）
  createParagraph: async (
    chapterId: number,
    content: string,
    speaker: string,
    tone: string,
    voiceId: string,
    speed: number
  ): Promise<number> => {
    throw new Error("Not implemented");
  },

  getParagraphs: async (chapterId: number): Promise<any[]> => {
    throw new Error("Not implemented");
  },

  getParagraph: async (id: number): Promise<any> => {
    throw new Error("Not implemented");
  },

  updateParagraph: async (
    id: number,
    content: string,
    speaker: string,
    tone: string,
    voiceId: string,
    speed: number
  ): Promise<void> => {
    throw new Error("Not implemented");
  },

  deleteParagraph: async (id: number): Promise<void> => {
    throw new Error("Not implemented");
  },

  // 角色操作（待实现）
  createCharacter: async (
    projectId: number,
    name: string,
    description: string,
    voiceId: string
  ): Promise<number> => {
    throw new Error("Not implemented");
  },

  getCharacters: async (projectId: number): Promise<any[]> => {
    throw new Error("Not implemented");
  },

  getCharacter: async (id: number): Promise<any> => {
    throw new Error("Not implemented");
  },

  updateCharacter: async (
    id: number,
    name: string,
    description: string,
    voiceId: string
  ): Promise<void> => {
    throw new Error("Not implemented");
  },

  deleteCharacter: async (id: number): Promise<void> => {
    throw new Error("Not implemented");
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

  generateBatchAudio: async (paragraphs: any[]): Promise<any[]> => {
    throw new Error("Not implemented");
  },
};

// 导出 API
export default api;
