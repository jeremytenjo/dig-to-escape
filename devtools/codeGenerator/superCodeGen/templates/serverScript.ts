import type {
  SuperCodeGeneratorTemplateSchema,
  SuperCodeGeneratorFilesSchema,
} from '@jeremytenjo/super-code-generator'

const files: SuperCodeGeneratorFilesSchema = [
  {
    path: (p) => {
      const fileName = `${p.namePascalCase}`

      return `${fileName}.server.ts`
    },
    template: () => {
      return `print('hello')`
    },
  },
]

const serverScript: SuperCodeGeneratorTemplateSchema = {
  type: 'Server Script',
  files,
}

export default serverScript
