import type { SuperCodeGeneratorConfigSchema } from '@jeremytenjo/super-code-generator'

import replicateStorageScript from './templates/replicateStorageScript.js'
import serverScriptService from './templates/serverScriptService.js'
import newScgTemplate from './templates/newScgTemplate.js'

const superCodeGeneratorConfig: SuperCodeGeneratorConfigSchema<any, any> = [
  serverScriptService,
  replicateStorageScript,
  newScgTemplate,
]

export default superCodeGeneratorConfig
