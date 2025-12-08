import type { SuperCodeGeneratorConfigSchema } from '@jeremytenjo/super-code-generator'

import serverScript from './templates/serverScript.js'
import newScgTemplate from './templates/newScgTemplate'

const superCodeGeneratorConfig: SuperCodeGeneratorConfigSchema<any, any> = [
  serverScript,
  newScgTemplate,
]

export default superCodeGeneratorConfig
