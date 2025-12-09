import type { SuperCodeGeneratorConfigSchema } from '@jeremytenjo/super-code-generator'

import fileMeta from './templates/fileMeta.js'
import moduleScript from './templates/moduleScript.js'
import script from './templates/script.js'
import newScgTemplate from './templates/newScgTemplate.js'
import localScript from './templates/localScript.js'
import guiComponent from './templates/guiComponent.js'

const superCodeGeneratorConfig: SuperCodeGeneratorConfigSchema<any, any> = [
  script,
  localScript,
  moduleScript,
  guiComponent,
  fileMeta,
  newScgTemplate,
]

export default superCodeGeneratorConfig
