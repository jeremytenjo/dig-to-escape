import { Players } from '@rbxts/services'
import type { Attributes, FunctionComponent } from '@rbxts/react'
import React from '@rbxts/react'
import ReactRoblox from '@rbxts/react-roblox'

export type MountScreenGuiComponentProps<P extends {}> = {
  component: FunctionComponent<P>
  props: (Attributes & P) | undefined
}

export default function mountScreenGuiComponent<P extends {}>(
  props: MountScreenGuiComponentProps<P>,
) {
  const player = Players.LocalPlayer
  const playerGui = player.WaitForChild('PlayerGui') as PlayerGui

  const screenGui = new Instance('ScreenGui')
  screenGui.Parent = playerGui

  const guiComponent = React.createElement(props.component, props.props)

  const root = ReactRoblox.createRoot(screenGui)
  root.render(guiComponent)
}
