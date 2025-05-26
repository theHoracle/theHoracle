import { lexicalEditor as payloadLexicalEditor } from '@payloadcms/richtext-lexical';

export const lexicalEditor = payloadLexicalEditor({
  features: ({ defaultFeatures }) => [
    ...defaultFeatures,
  ],
}); 