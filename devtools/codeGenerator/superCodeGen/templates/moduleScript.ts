import type {
  SuperCodeGeneratorTemplateSchema,
  SuperCodeGeneratorFilesSchema,
} from '@jeremytenjo/super-code-generator'

const files: SuperCodeGeneratorFilesSchema = [
  {
    path: (p) => {
      const fileName = `${p.nameCamelCase}`

      return `${fileName}.ts`
    },
    template: (p) => {
      const functionName = p.nameCamelCase
      const propsName = `${p.namePascalCase}Props`

      return `export type ${propsName} = {
  hello: string
}

export default function ${functionName}(props: ${propsName}) {
  print('${p.nameCamelCase}')
}

`
    },
  },
]

const moduleScript: SuperCodeGeneratorTemplateSchema = {
  type: 'Module Script',
  files,
}

export default moduleScript
