import { createCollection, type CollectionOptions } from '@rbxts/lapis'

import type { PlayerDataSchema } from './playerData.schema.js'

const playerDataOptions: CollectionOptions<PlayerDataSchema> = {
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
