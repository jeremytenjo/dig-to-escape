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

const serverScriptService: SuperCodeGeneratorTemplateSchema = {
  type: 'Server Script Service',
  files,
  usageInstructions: 'Server side only script',
}

export default serverScriptService
