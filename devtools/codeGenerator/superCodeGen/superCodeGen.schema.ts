import type { SuperCodeGeneratorConfigSchema } from '@jeremytenjo/super-code-generator'

import newScgTemplate from './templates/newScgTemplate'

const superCodeGeneratorConfig: SuperCodeGeneratorConfigSchema<any, any> = [
  newScgTemplate,
]

export default superCodeGeneratorConfig
