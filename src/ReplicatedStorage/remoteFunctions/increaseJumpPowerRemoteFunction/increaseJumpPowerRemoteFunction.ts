import getInstance from '../../utils/getInstance/getInstance.js'

export type IncreaseJumpPowerRemoteFunctionProps = {
  invokeType: 'InvokeServer' | 'InvokeClient'
}

export default function increaseJumpPowerRemoteFunction(
  props: IncreaseJumpPowerRemoteFunctionProps,
) {
  const increaseJumpPowerFunction = getInstance<RemoteFunction>({
    instancePath: 'ReplicatedStorage/Instances/IncreaseJumpPowerFunction',
  })

  let success: boolean
  let purchased: unknown

  if (props.invokeType === 'InvokeServer') {
    const result = pcall<[], unknown>(() => {
      return increaseJumpPowerFunction.InvokeServer()
    })
    success = result[0]
    purchased = result[1]
  } else if (props.invokeType === 'InvokeClient') {
    const result = pcall<[], unknown>(() => {
      return increaseJumpPowerFunction.InvokeClient()
    })
    success = result[0]
    purchased = result[1]
  }

  return {
    success,
    purchased,
  }
}
