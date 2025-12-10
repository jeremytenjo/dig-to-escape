import type {
  SuperCodeGeneratorTemplateSchema,
  SuperCodeGeneratorFilesSchema,
} from '@jeremytenjo/super-code-generator'

const files: SuperCodeGeneratorFilesSchema = [
  {
    path: (p) => {
      const fileName = `${p.nameCamelCase}`

      return `${fileName}.server.ts`
    },
    template: () => {
      return `print('hello')`
    },
  },
]

const script: SuperCodeGeneratorTemplateSchema = {
  type: 'Script',
  files,
  usageInstructions: 'Script Instance',
}

export default script
