import type { Document } from '@rbxts/lapis'
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
const documents: { [index: string]: Document<PowersSchema> } = {}

Players.PlayerAdded.Connect(async (player: Player) => {
  const userId = tostring(player.UserId)

  try {
    const document = await playerDataCollection.load(userId, [player.UserId])

    if (!player.IsDescendantOf(Players)) {
      return document.close()
    }

    documents[userId] = document
  } catch (error) {
    warn(`Failed to load ${powersCollectionName} data for player ${userId}:`, error)
  }
})

Players.PlayerRemoving.Connect(async (player: Player) => {
  const userId = tostring(player.UserId)
  const document = documents[userId]

  if (document) {
    try {
      delete documents[userId]
      await document.close()
    } catch (error) {
      warn(
        `Failed to close ${powersCollectionName} document for player ${userId}:`,
        error,
      )
    }
  }
})
