import type {
  SuperCodeGeneratorTemplateSchema,
  SuperCodeGeneratorFilesSchema,
} from '@jeremytenjo/super-code-generator'

const files: SuperCodeGeneratorFilesSchema = [
  {
    path: (p) => {
      const fileName = `${p.nameCamelCase}`

      return `${fileName}.client.ts`
    },
    template: () => {
      return `print('hello')`
    },
  },
]

const localScript: SuperCodeGeneratorTemplateSchema = {
  type: 'Local Script',
  files,
  usageInstructions: 'Local Script Instance',
}

export default localScript
