import { Players } from '@rbxts/services'

import getInstance from '../utils/getInstance/getInstance.js'

const player = Players.LocalPlayer
const playerGui = player.FindFirstChild('PlayerGui') as PlayerGui

const increaseJumpPowerFunction = getInstance<RemoteFunction>({
  instancePath: 'ReplicatedStorage/Instances/IncreaseJumpPowerFunction',
})
const jumpPurchaseGui = getInstance<Frame>({
  instancePath: 'ReplicatedStorage/Instances/JumpPurchaseGui',
})
const jumpButton = jumpPurchaseGui.WaitForChild('JumpButton') as GuiButton

function onButtonClicked() {
  const [success, purchased] = pcall<[], unknown>(() => {
    return increaseJumpPowerFunction.InvokeServer()
  })

  if (!success) {
    // purchased will be the error message if success is false
    error(tostring(purchased))
  } else if (success && !purchased) {
    warn('Not enough coins!')
  }
}

jumpButton.Activated.Connect(onButtonClicked)

// Add the JumpPurchaseGui to the player's Gui
jumpPurchaseGui.Parent = playerGui
