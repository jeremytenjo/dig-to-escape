import type { Server } from '@rbxts/remo'
import { createRemotes, remote } from '@rbxts/remo'
import { t } from '@rbxts/t'

const booleanValidator = t.boolean

export const increaseJumpPowerRemoteFunction = createRemotes({
  // increase jump power on the server
  increaseJumpPowerFromServer: remote<Server>().returns<boolean>(booleanValidator),
})
