import { Players } from '@rbxts/services'

import playerData from '../../ServerStorage/playerData/playerData.js'
import getInstance from '../../ReplicatedStorage/utils/getInstance/getInstance.js'

const coinsFolder = getInstance<Folder>({
  instancePath: 'Workspace/World/Coins',
})
const coins = coinsFolder.GetChildren() as BasePart[]

function onCoinTouched(coin: BasePart, otherPart: Instance): void {
  if (coin.GetAttribute('Enabled') === true) {
    const character = otherPart.Parent
    const player = Players.GetPlayerFromCharacter(character)

    if (player) {
      // Player touched a coin
      coin.Transparency = 1
      coin.SetAttribute('Enabled', false)

      playerData.updateValue({
        player,
        key: 'Coins',
      })

      task.wait(10)
      coin.Transparency = 0
      coin.SetAttribute('Enabled', true)
    }
  }
}

// Setting up event listeners
for (const coin of coins) {
  coin.SetAttribute('Enabled', true)
  coin.Touched.Connect((otherPart) => {
    return onCoinTouched(coin, otherPart)
  })
}

function onPlayerAdded(player: Player): void {
  // Reset player coins to 0
  playerData.resetValue({
    player,
    key: 'Coins',
  })

  player.CharacterAdded.Connect((character) => {
    // WaitForChild would stop the player loop, so below should be done in a separate thread
    task.spawn(() => {
      // When a player dies
      const humanoid = character.WaitForChild('Humanoid') as Humanoid
      humanoid.Died.Connect(() => {
        // Reset player coins to 0
        playerData.resetValue({
          player,
          key: 'Coins',
        })
      })
    })
  })
}

// Initialize any players added before connecting to PlayerAdded event
for (const player of Players.GetPlayers()) {
  onPlayerAdded(player)
}

function onPlayerRemoved(player: Player): void {
  playerData.resetValue({
    player,
    key: 'Coins',
  })
}

Players.PlayerAdded.Connect(onPlayerAdded)
Players.PlayerRemoving.Connect(onPlayerRemoved)
