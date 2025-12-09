import { Players } from '@rbxts/services'

import Leaderboard from '../../ServerStorage/Leaderboard/Leaderboard.js'
import PlayerData from '../../ServerStorage/PlayerData/PlayerData.js'
import getInstance from '../../ReplicatedStorage/utils/getInstance/getInstance.js'

const increaseJumpPowerFunction = getInstance<RemoteFunction>({
  instancePath: 'ReplicatedStorage/Instances/IncreaseJumpPowerFunction',
})

const JUMP_KEY_NAME = PlayerData.JUMP_KEY_NAME
const COIN_KEY_NAME = PlayerData.COIN_KEY_NAME
const JUMP_POWER_INCREMENT = 30
const JUMP_COIN_COST = 5

function updateJumpPower(
  player: Player,
  updateFunction: (oldJumpPower: number) => number,
): void {
  // Update the jump power table
  const newJumpPower = updateFunction(
    PlayerData.getValue({
      player,
      key: JUMP_KEY_NAME,
    }) ?? 0,
  )

  // Update the players jump power
  const character = (player.Character ?? player.CharacterAdded.Wait()) as Model
  const humanoid = character.FindFirstChildWhichIsA('Humanoid')
  if (humanoid) {
    ;(humanoid as Humanoid).JumpPower = newJumpPower

    // Update the jump leaderboard
    Leaderboard.setStat({
      player,
      statName: JUMP_KEY_NAME,
      value: newJumpPower,
    })
  }
}

function onPurchaseJumpIncrease(player: Player): boolean {
  const coinAmount =
    PlayerData.getValue({
      player,
      key: COIN_KEY_NAME,
    }) ?? 0

  if (coinAmount < JUMP_COIN_COST) {
    return false
  }

  // Increase player's jump power
  const oldJumpPower =
    PlayerData.getValue({
      player,
      key: JUMP_KEY_NAME,
    }) ?? 0
  updateJumpPower(player, () => {
    return oldJumpPower + JUMP_POWER_INCREMENT
  })

  // Update the coin table
  const newCoinAmount = coinAmount - JUMP_COIN_COST
  PlayerData.resetValue({
    player,
    key: COIN_KEY_NAME,
  })

  // Update the coin leaderboard
  Leaderboard.setStat({
    player,
    statName: COIN_KEY_NAME,
    value: newCoinAmount,
  })

  return true
}

function onCharacterAdded(player: Player): void {
  // Reset player's jump power when the character is added
  updateJumpPower(player, () => {
    return 0
  })
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
  updateJumpPower(player, () => {
    return 0
  })
}

;(increaseJumpPowerFunction as RemoteFunction).OnServerInvoke = onPurchaseJumpIncrease
Players.PlayerAdded.Connect(onPlayerAdded)
Players.PlayerRemoving.Connect(onPlayerRemoved)
