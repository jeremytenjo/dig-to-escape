import { createCollection } from '@rbxts/lapis'

import type { PowersSchema } from './powers.schema.js'
import { powersCollectionName } from './powers.config.js'

const playerDataCollection = createCollection<PowersSchema>(powersCollectionName, {
  defaultData: () => {
    return {
      Coins: 0,
      Jump: 0,
    }
  },
})

const Players = game.GetService('Players')
const documents: { [index: string]: unknown } = {}

Players.PlayerAdded.Connect(async (player: Player) => {
  const userId = tostring(player.UserId)
  try {
    const document = await playerDataCollection.load(userId, [player.UserId])
    documents[userId] = document
  } catch (error) {
    warn(`Failed to load data for player ${userId}:`, error)
  }
})

Players.PlayerRemoving.Connect(async (player: Player) => {
  const userId = tostring(player.UserId)
  const document = documents[userId]

  if (document) {
    try {
      documents[userId] = undefined
    } catch (error) {
      warn(`Failed to close document for player ${userId}:`, error)
    }
  }
})
