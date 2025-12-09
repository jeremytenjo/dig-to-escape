import { Players } from '@rbxts/services'

import getInstance from '../utils/getInstance/getInstance.js'
import { increaseJumpPowerRemoteFunction } from '../remoteFunctions/increaseJumpPowerRemoteFunction/increaseJumpPowerRemoteFunction.js'

const player = Players.LocalPlayer
const playerGui = player.FindFirstChild('PlayerGui') as PlayerGui

const jumpPurchaseGui = getInstance<Frame>({
  instancePath: 'ReplicatedStorage/Instances/JumpPurchaseGui',
})
const jumpButton = jumpPurchaseGui.WaitForChild('JumpButton') as GuiButton

async function onButtonClicked() {
  try {
    const purchased =
      await increaseJumpPowerRemoteFunction.increaseJumpPowerFromServer.request()

    if (!purchased) {
      warn('Not enough coins!')
    }
  } catch (err) {
    error(tostring(err))
  }
}

jumpButton.Activated.Connect(onButtonClicked)

// Add the JumpPurchaseGui to the player's Gui
jumpPurchaseGui.Parent = playerGui
