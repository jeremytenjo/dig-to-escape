import type { SuperCodeGeneratorConfigSchema } from '@jeremytenjo/super-code-generator'

import fileMeta from './templates/fileMeta.js'
import replicateStorageScript from './templates/replicateStorageScript.js'
import serverScriptService from './templates/serverScriptService.js'
import newScgTemplate from './templates/newScgTemplate.js'

const superCodeGeneratorConfig: SuperCodeGeneratorConfigSchema<any, any> = [
  serverScriptService,
  replicateStorageScript,
  fileMeta,
  newScgTemplate,
]

export default superCodeGeneratorConfig
