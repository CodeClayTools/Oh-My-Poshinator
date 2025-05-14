import { Theme } from './types';

export const themeSchema = {
  type: 'object',
  required: ['segments', 'style'],
  properties: {
    segments: {
      type: 'array',
      items: {
        type: 'object',
        required: ['type'],
        properties: {
          type: { type: 'string' },
          style: {
            type: 'object',
            properties: {
              foreground: { type: 'string' },
              background: { type: 'string' }
            }
          },
          properties: {
            type: 'object',
            additionalProperties: true
          }
        }
      }
    },
    style: {
      type: 'object',
      properties: {
        foreground: { type: 'string' },
        background: { type: 'string' }
      }
    }
  }
}; 