import { Players } from '@rbxts/services'
import React from '@rbxts/react'
import ReactRoblox from '@rbxts/react-roblox'

import { increaseJumpPowerRemoteFunction } from '../remoteFunctions/increaseJumpPowerRemoteFunction/increaseJumpPowerRemoteFunction.js'
import Button from '../gui/Button/Button.js'

const player = Players.LocalPlayer
const playerGui = player.WaitForChild('PlayerGui') as PlayerGui

const screenGui = new Instance('ScreenGui')
screenGui.Parent = playerGui

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

const jumpPurchaseGui = React.createElement(Button, {
  variant: 'buy-jump-power',
  text: 'Buy Jump Power',
  onClick: onButtonClicked,
})

const root = ReactRoblox.createRoot(screenGui)
root.render(jumpPurchaseGui)
