import { Players } from '@rbxts/services'

import getInstance from '../../ReplicatedStorage/utils/getInstance/getInstance.js'
import playerData from '../_datastores/playerData/playerData.module.js'
import { powersRemotes } from '../_datastores/powers/powers.remotes.js'

const coinsFolder = getInstance<Folder>({
  instancePath: 'Workspace/World/Coins',
})
const coins = coinsFolder.GetChildren() as BasePart[]

function onCoinTouched(coin: BasePart, otherPart: Instance): void {
  if (coin.GetAttribute('Enabled') === true) {
    const character = otherPart.Parent
    const player = Players.GetPlayerFromCharacter(character)

    if (player) {
      // Player touched a coin - increment coins using unified player Data system
      coin.Transparency = 1
      coin.SetAttribute('Enabled', false)

      print('1')
      powersRemotes.setCoins.fire(100)
      print('2')

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
  // Reset player coins to 0 when joining
  playerData.resetValue({
    player,
    key: 'Coins',
  })

  player.CharacterAdded.Connect((character) => {
    // WaitForChild would stop the player loop, so below should be done in a separate thread
    task.spawn(() => {
      // When a player dies, reset coins
      const humanoid = character.WaitForChild('Humanoid') as Humanoid
      humanoid.Died.Connect(() => {
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
  // Cleanup when player leaves - data persists via lapis
  playerData.resetValue({
    player,
    key: 'Coins',
  })
}

Players.PlayerAdded.Connect(onPlayerAdded)
Players.PlayerRemoving.Connect(onPlayerRemoved)
