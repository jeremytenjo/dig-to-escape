import type { SuperCodeGeneratorConfigSchema } from '@jeremytenjo/super-code-generator'

import moduleScript from './templates/moduleScript.js'
import serverScriptService from './templates/serverScriptService.js'
import newScgTemplate from './templates/newScgTemplate.js'

const superCodeGeneratorConfig: SuperCodeGeneratorConfigSchema<any, any> = [
  serverScriptService,
  moduleScript,
  newScgTemplate,
]

export default superCodeGeneratorConfig
