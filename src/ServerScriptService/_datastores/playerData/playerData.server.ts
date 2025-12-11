import { createCollection, type CollectionOptions } from '@rbxts/lapis'

import leaderboard from '../../../ServerStorage/leaderboard/leaderboard.js'

type PlayerData = {
  Coins: number
  Jump: number
}

type PlayerDataKey = keyof PlayerData

const playerDataOptions: CollectionOptions<PlayerData> = {
  defaultData: () => {
    return {
      Coins: 0,
      Jump: 0,
    }
  },
}

const playerDataCollection = createCollection('PlayerData', playerDataOptions)
const loadedDocuments: { [index: string]: any } = {}

const Players = game.GetService('Players')

// Load player data on join
Players.PlayerAdded.Connect(async (player: Player) => {
  const userId = tostring(player.UserId)

  try {
    const document = await playerDataCollection.load(userId, [player.UserId])
    loadedDocuments[userId] = document
  } catch (error) {
    warn(`Failed to load data for player ${userId}:`, error)
  }
})

// Save and cleanup on player leave
Players.PlayerRemoving.Connect(async (player: Player) => {
  const userId = tostring(player.UserId)
  const document = loadedDocuments[userId]

  if (document) {
    try {
      await document.close()
    } catch (error) {
      warn(`Failed to close document for player ${userId}:`, error)
    }
    loadedDocuments[userId] = undefined
  }
})

const playerData = {
  getValue(props: GetValueProps): number {
    const userId = tostring(props.player.UserId)
    const document = loadedDocuments[userId]

    return document?.read()[props.key] ?? 0
  },

  updateValue(props: UpdateValueProps): number {
    const userId = tostring(props.player.UserId)
    const document = loadedDocuments[userId]

    const oldValue = document?.read()[props.key] ?? 0
    const newValue = oldValue + 1

    if (document) {
      const data = document.read() as PlayerData
      data[props.key] = newValue
      document.write(data)
    }

    leaderboard.setStat({
      player: props.player,
      statName: props.key,
      value: newValue,
    })

    return newValue
  },

  resetValue(props: ResetValueProps): number {
    const userId = tostring(props.player.UserId)
    const document = loadedDocuments[userId]

    const newValue = 0

    if (document) {
      const data = document.read() as PlayerData
      data[props.key] = newValue
      document.write(data)
    }

    leaderboard.setStat({
      player: props.player,
      statName: props.key,
      value: newValue,
    })

    return newValue
  },

  setValue(props: SetValueProps): number {
    const userId = tostring(props.player.UserId)
    const document = loadedDocuments[userId]

    if (document) {
      const data = document.read() as PlayerData
      data[props.key] = props.value
      document.write(data)
    }

    leaderboard.setStat({
      player: props.player,
      statName: props.key,
      value: props.value,
    })

    return props.value
  },
}

export type GetValueProps = {
  player: Player
  key: PlayerDataKey
}

export type UpdateValueProps = {
  player: Player
  key: PlayerDataKey
}

export type ResetValueProps = {
  player: Player
  key: PlayerDataKey
}

export type SetValueProps = {
  player: Player
  key: PlayerDataKey
  value: number
}

export default playerData
