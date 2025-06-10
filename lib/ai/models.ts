// lib/ai/models.ts

export const DEFAULT_CHAT_MODEL: string = 'gpt-4o-mini'; // Nuevo modelo por defecto

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'gpt-4o-mini', // ID del modelo de OpenAI
    name: 'GPT-4o Mini', // Nombre para mostrar en la UI
    description: 'Rápido y eficiente para tareas generales.',
  },
  {
    id: 'gpt-4o', // ID del modelo de OpenAI
    name: 'GPT-4o', // Nombre para mostrar en la UI
    description: 'El modelo más avanzado para razonamiento complejo.',
  },
];