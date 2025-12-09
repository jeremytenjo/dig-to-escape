import type { Storybook } from '@rbxts/ui-labs'

import getInstance from '../../utils/getInstance/getInstance.js'

const LibInstance = getInstance<Folder>({
  instancePath: 'ReplicatedStorage/gui/lib',
})

const storybook: Storybook = {
  name: 'Lib',
  storyRoots: LibInstance.GetChildren(),
}

export = storybook
