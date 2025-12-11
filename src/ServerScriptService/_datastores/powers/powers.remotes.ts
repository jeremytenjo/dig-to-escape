import type { Server } from '@rbxts/remo'
import { createRemotes, namespace, remote } from '@rbxts/remo'
import { t } from '@rbxts/t'

import type { PowersSchema } from './powers.schema.js'

export const powersRemotes = createRemotes({
  powers: namespace({
    setCoins: remote<Server, [Coins: PowersSchema['Coins']]>(t.number),
  }),
})
