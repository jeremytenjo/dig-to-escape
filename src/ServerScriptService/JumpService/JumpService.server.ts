import { Players } from '@rbxts/services'

import leaderboard from '../../ServerStorage/leaderboard/leaderboard.js'
import { increaseJumpPowerRemoteFunction } from '../../ReplicatedStorage/remoteFunctions/increaseJumpPowerRemoteFunction/increaseJumpPowerRemoteFunction.js'
import playerData from '../_datastores/playerData/playerData.server.js'

const JUMP_POWER_INCREMENT = 30
const JUMP_COIN_COST = 5

function updateJumpPower(player: Player, newJumpPower: number): void {
  // Update the players jump power
  const character = (player.Character ?? player.CharacterAdded.Wait()) as Model
  const humanoid = character.FindFirstChildWhichIsA('Humanoid')
  if (humanoid) {
    ;(humanoid as Humanoid).JumpPower = newJumpPower

    // Update the jump power data
    playerData.setValue({
      player,
      key: 'Jump',
      value: newJumpPower,
    })

    // Update the jump leaderboard
    leaderboard.setStat({
      player,
      statName: 'Jump',
      value: newJumpPower,
    })
  }
}

function onPurchaseJumpIncrease(player: Player): boolean {
  const coinAmount =
    playerData.getValue({
      player,
      key: 'Coins',
    }) ?? 0

  if (coinAmount < JUMP_COIN_COST) {
    return false
  }

  // Increase player's jump power
  const oldJumpPower =
    playerData.getValue({
      player,
      key: 'Jump',
    }) ?? 0

  updateJumpPower(player, oldJumpPower + JUMP_POWER_INCREMENT)

  // Update the coin table
  const newCoinAmount = coinAmount - JUMP_COIN_COST

  playerData.setValue({
    player,
    key: 'Coins',
    value: newCoinAmount,
  })

  // Update the coin leaderboard
  leaderboard.setStat({
    player,
    statName: 'Coins',
    value: newCoinAmount,
  })

  return true
}

function onCharacterAdded(player: Player): void {
  // Set default jump power when the character is added
  updateJumpPower(player, 50)
}

// Initialize any players added before connecting to PlayerAdded event
for (const player of Players.GetPlayers()) {
  onCharacterAdded(player)
}

// Normal initialization of players from PlayerAdded event
function onPlayerAdded(player: Player): void {
  player.CharacterAdded.Connect(() => {
    onCharacterAdded(player)
  })
}

function onPlayerRemoved(player: Player): void {
  updateJumpPower(player, 0)
}

increaseJumpPowerRemoteFunction.increaseJumpPowerFromServer.onRequest(
  onPurchaseJumpIncrease,
)
Players.PlayerAdded.Connect(onPlayerAdded)
Players.PlayerRemoving.Connect(onPlayerRemoved)
