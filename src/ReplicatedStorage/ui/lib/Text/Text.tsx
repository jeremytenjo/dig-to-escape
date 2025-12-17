import React from '@rbxts/react'

export type TextProps = {
  text: string
  size?: UDim2
  backgroundTransparency?: number
  textColor3?: Color3
  textScaled?: boolean
  font?: Enum.Font
}

export default function Text(props: TextProps) {
  return (
    <textlabel
      Text={props.text}
      Size={props.size}
      BackgroundTransparency={props.backgroundTransparency}
      TextColor3={props.textColor3}
      TextScaled={props.textScaled}
      Font={props.font}
    />
  )
}
