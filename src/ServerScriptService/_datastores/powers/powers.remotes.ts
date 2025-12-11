import type { Server } from '@rbxts/remo'
import { createRemotes, remote } from '@rbxts/remo'
import { t } from '@rbxts/t'

import type { PowersSchema } from './powers.schema.js'

export const powersRemotes = createRemotes({
  // it's an event becuase it does not return anything
  setCoins: remote<Server, [Coins: PowersSchema['Coins']]>(t.number),
})
