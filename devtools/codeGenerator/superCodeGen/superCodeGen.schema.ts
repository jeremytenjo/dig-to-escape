import type { SuperCodeGeneratorConfigSchema } from '@jeremytenjo/super-code-generator'

import fileMeta from './templates/fileMeta.js'
import moduleScript from './templates/moduleScript.js'
import script from './templates/script.js'
import newScgTemplate from './templates/newScgTemplate.js'
import localScript from './templates/localScript.js'

const superCodeGeneratorConfig: SuperCodeGeneratorConfigSchema<any, any> = [
  script,
  localScript,
  moduleScript,
  fileMeta,
  newScgTemplate,
]

export default superCodeGeneratorConfig
