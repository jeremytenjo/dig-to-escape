import type {
  SuperCodeGeneratorTemplateSchema,
  SuperCodeGeneratorFilesSchema,
} from '@jeremytenjo/super-code-generator'

const files: SuperCodeGeneratorFilesSchema = [
  {
    path: (p) => {
      const fileName = `${p.namePascalCase}`

      return `${fileName}.tsx`
    },
    template: (p) => {
      const componentName = p.namePascalCase
      const propsName = `${componentName}Props`

      return `import React from '@rbxts/react'

export type ${propsName} = {
  name: string
}

export default function ${componentName}(props: ${propsName}) {
  return <textbutton text='hello' />
}

`
    },
  },
  {
    path: (p) => {
      const fileName = `${p.namePascalCase}.story`

      return `${fileName}.tsx`
    },
    template: (p) => {
      const componentName = p.namePascalCase

      return `import React from '@rbxts/react'
import ReactRoblox from '@rbxts/react-roblox'
import { CreateReactStory, Choose } from '@rbxts/ui-labs'

import ${componentName} from './${componentName}.js'

const story = CreateReactStory(
  {
    react: React,
    reactRoblox: ReactRoblox,
    controls: {
      name: 'hello'
    },
  },
  (props) => {
    return <${componentName} {...props.controls} />
  },
)

export = story

`
    },
  },
]

const guiComponent: SuperCodeGeneratorTemplateSchema = {
  type: 'GUI Component',
  files,
  usageInstructions:
    'Creates both a component file and a story file for UI Labs preview.',
}

export default guiComponent
