import React from '@rbxts/react'

export type TextProps = {
  text: string
  size?: UDim2
  position?: UDim2
  backgroundTransparency?: number
  color?: Color3
  textScaled?: boolean
  textWrapped?: boolean
  font?: Enum.Font
}

export default function Text(props: TextProps) {
  return (
    <textlabel
      Text={props.text}
      Size={props.size}
      Position={props.position}
      BackgroundTransparency={props.backgroundTransparency}
      TextColor3={props.color}
      TextScaled={props.textScaled}
      TextWrapped={props.textWrapped}
      Font={props.font}
    />
  )
}
