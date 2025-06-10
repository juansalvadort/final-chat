// lib/ai/providers.ts

import { openai } from '@ai-sdk/openai';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';
import { customProvider } from 'ai';

// Mantenemos los mocks para el entorno de pruebas, 
// aunque necesitarías adaptarlos para que funcionen con la nueva estructura si los usas extensivamente.
export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'gpt-4o-mini': chatModel, // Mapeamos los nuevos IDs a los mocks existentes
        'gpt-4o': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : openai; // <-- El cambio clave: usamos el proveedor oficial de OpenAI para producción.

// Exportamos el proveedor de OpenAI directamente para usarlo en la ruta.
export const openAIProvider = openai;