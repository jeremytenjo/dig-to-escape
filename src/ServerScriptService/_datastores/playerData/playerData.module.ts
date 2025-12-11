import { createCollection, type CollectionOptions } from '@rbxts/lapis'

import leaderboard from '../../../ServerStorage/leaderboard/leaderboard.js'

import type { PlayerDataKey, PlayerDataSchema } from './playerData.schema.js'

const playerDataOptions: CollectionOptions<PlayerDataSchema> = {
  defaultData: () => {
    return {
      Coins: 0,
      Jump: 0,
    }
  },
}

const playerDataCollection = createCollection('PlayerData', playerDataOptions)
const loadedDocuments: { [index: string]: unknown } = {}

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
  const document = loadedDocuments[userId] as {
    close: () => Promise<void>
  }

  if (document) {
    try {
      await document.close()
    } catch (error) {
      warn(`Failed to close document for player ${userId}:`, error)
    }
    loadedDocuments[userId] = undefined
  }
})

// Unified playerData object that integrates lapis collection
const playerData = {
  getValue(props: GetValueProps) {
    const userId = tostring(props.player.UserId)
    const document = loadedDocuments[userId] as
      | { read: () => PlayerDataSchema }
      | undefined

    if (!document) {
      warn(`Document not loaded for player ${userId}`)
      return { returnValue: 0 }
    }

    const data = document.read() as PlayerDataSchema
    const returnValue = data[props.key] ?? 0
    return { returnValue }
  },

  updateValue(props: UpdateValueProps) {
    const userId = tostring(props.player.UserId)
    const document = loadedDocuments[userId] as
      | { read: () => PlayerDataSchema; write: (data: PlayerDataSchema) => void }
      | undefined

    if (!document) {
      warn(`Document not loaded for player ${userId}`)
      return { returnValue: 0 }
    }

    const data = document.read() as PlayerDataSchema
    const oldValue = data[props.key] ?? 0
    const newValue = oldValue + 1

    const updatedData = { ...data, [props.key]: newValue }
    document.write(updatedData)

    leaderboard.setStat({
      player: props.player,
      statName: props.key,
      value: newValue,
    })

    const returnValue = newValue
    return { returnValue }
  },

  resetValue(props: ResetValueProps) {
    const userId = tostring(props.player.UserId)
    const document = loadedDocuments[userId] as
      | { read: () => PlayerDataSchema; write: (data: PlayerDataSchema) => void }
      | undefined

    if (!document) {
      warn(`Document not loaded for player ${userId}`)
      return { returnValue: 0 }
    }

    const newValue = 0

    const data = document.read() as PlayerDataSchema
    const updatedData = { ...data, [props.key]: newValue }
    document.write(updatedData)

    leaderboard.setStat({
      player: props.player,
      statName: props.key,
      value: newValue,
    })

    const returnValue = newValue
    return { returnValue }
  },

  setValue(props: SetValueProps) {
    const userId = tostring(props.player.UserId)
    const document = loadedDocuments[userId] as
      | { read: () => PlayerDataSchema; write: (data: PlayerDataSchema) => void }
      | undefined

    if (!document) {
      warn(`Document not loaded for player ${userId}`)
      return { returnValue: 0 }
    }

    const data = document.read() as PlayerDataSchema
    const updatedData = { ...data, [props.key]: props.value }
    document.write(updatedData)

    leaderboard.setStat({
      player: props.player,
      statName: props.key,
      value: props.value,
    })

    const returnValue = props.value
    return { returnValue }
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
