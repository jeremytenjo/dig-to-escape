import React from '@rbxts/react'

export type BoxProps = {
  children: React.ReactNode
  size: UDim2
  position?: UDim2
  backgroundColor?: Color3
  borderSizePixel?: number
  borderColor?: Color3
  backgroundTransparency?: number
}

export default function Box(props: BoxProps) {
  return (
    <frame
      Size={props.size}
      BackgroundColor3={props.backgroundColor}
      BorderSizePixel={props.borderSizePixel}
      BorderColor3={props.borderColor}
      Position={props.position}
      BackgroundTransparency={props.backgroundTransparency}
    >
      {props.children}
    </frame>
  )
}
