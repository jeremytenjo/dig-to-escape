import { Players, Workspace } from '@rbxts/services'

import PlayerData from '../ServerStorage/PlayerData.js'

const coinsFolder = Workspace.WaitForChild('World').WaitForChild('Coins') as Folder
const coins = coinsFolder.GetChildren() as BasePart[]

// Setting up event listeners
for (const coin of coins) {
  const part = coin

  part.SetAttribute('Enabled', true)

  part.Touched.Connect((otherPart) => {
    if (coin.GetAttribute('Enabled') === true) {
      const character = otherPart.Parent
      const player = Players.GetPlayerFromCharacter(character)

      if (player) {
        // Player touched a coin
        coin.Transparency = 1
        coin.SetAttribute('Enabled', false)

        PlayerData.updateValue({
          player,
          key: PlayerData.COIN_KEY_NAME,
        })

        task.wait(10)
        coin.Transparency = 0
        coin.SetAttribute('Enabled', true)
      }
    }
  })
}
