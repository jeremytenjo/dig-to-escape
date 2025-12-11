import { createRemoteFunction } from '@rbxts/lapis'

import leaderboard from '../../../ServerStorage/leaderboard/leaderboard.js'

import {
  loadedDocuments,
  type GetValueProps,
  type UpdateValueProps,
  type ResetValueProps,
  type SetValueProps,
} from './playerData.server.js'
import type { PlayerDataKey } from './playerData.schema.js'

const playerData = {
  getValue(props: GetValueProps) {
    const userId = tostring(props.player.UserId)
    const document = loadedDocuments[userId]

    const returnValue = document?.read()[props.key] ?? 0
    return { returnValue }
  },

  updateValue(props: UpdateValueProps) {
    const userId = tostring(props.player.UserId)
    const document = loadedDocuments[userId]

    const oldValue = document?.read()[props.key] ?? 0
    const newValue = oldValue + 1

    if (document) {
      const currentData = document.read() as PlayerData
      const updatedData = { ...currentData, [props.key]: newValue }
      document.write(updatedData)
    }

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
    const document = loadedDocuments[userId]

    const newValue = 0

    if (document) {
      const currentData = document.read() as PlayerData
      const updatedData = { ...currentData, [props.key]: newValue }
      document.write(updatedData)
    }

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
    const document = loadedDocuments[userId]

    if (document) {
      const currentData = document.read() as PlayerData
      const updatedData = { ...currentData, [props.key]: props.value }
      document.write(updatedData)
    }

    leaderboard.setStat({
      player: props.player,
      statName: props.key,
      value: props.value,
    })

    const returnValue = props.value
    return { returnValue }
  },
}

const getValueRemote = createRemoteFunction<
  [props: GetValueProps],
  [returnValue: number]
>('GetValue', {
  handler: (player: Player, props: GetValueProps) => {
    const { returnValue } = playerData.getValue(props)
    return returnValue
  },
})

const updateValueRemote = createRemoteFunction<
  [props: UpdateValueProps],
  [returnValue: number]
>('UpdateValue', {
  handler: (player: Player, props: UpdateValueProps) => {
    const { returnValue } = playerData.updateValue(props)
    return returnValue
  },
})

const resetValueRemote = createRemoteFunction<
  [props: ResetValueProps],
  [returnValue: number]
>('ResetValue', {
  handler: (player: Player, props: ResetValueProps) => {
    const { returnValue } = playerData.resetValue(props)
    return returnValue
  },
})

const setValueRemote = createRemoteFunction<
  [props: SetValueProps],
  [returnValue: number]
>('SetValue', {
  handler: (player: Player, props: SetValueProps) => {
    const { returnValue } = playerData.setValue(props)
    return returnValue
  },
})

export const playerDataRemotes = {
  getValue: getValueRemote,
  updateValue: updateValueRemote,
  resetValue: resetValueRemote,
  setValue: setValueRemote,
}

export default playerDataRemotes

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
