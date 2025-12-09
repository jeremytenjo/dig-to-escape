import type {
  SuperCodeGeneratorTemplateSchema,
  SuperCodeGeneratorFilesSchema,
} from '@jeremytenjo/super-code-generator'

const files: SuperCodeGeneratorFilesSchema = [
  {
    path: (p) => {
      const fileName = `${p.nameCamelCase}`

      return `${fileName}.meta.json`
    },
    template: () => {
      return `{}`
    },
  },
]

const fileMeta: SuperCodeGeneratorTemplateSchema = {
  type: 'File Meta',
  files,
  usageInstructions:
    'This can be used to set properties like Disabled on a script or set Rojo-specific settings like ignoreUnknownInstances',
  outputWithoutParentDir: true,
  options: {
    createNamedFolder: false,
  },
}

export default fileMeta
