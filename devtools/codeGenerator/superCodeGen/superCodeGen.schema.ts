import type { SuperCodeGeneratorConfigSchema } from '@jeremytenjo/super-code-generator'

import moduleScript from './templates/moduleScript.js'
import serverScript from './templates/serverScript.js'
import newScgTemplate from './templates/newScgTemplate.js'

const superCodeGeneratorConfig: SuperCodeGeneratorConfigSchema<any, any> = [
  serverScript,
  moduleScript,
  newScgTemplate,
]

export default superCodeGeneratorConfig
