import React from '@rbxts/react'

export interface ButtonProps {
  variant: string
  text?: string
  onClick?: () => void
}

export default function Button(props: ButtonProps) {
  return (
    <textbutton
      Text={props.text ?? props.variant}
      Size={new UDim2(0, 100, 0, 50)}
      BackgroundColor3={Color3.fromRGB(100, 100, 100)}
      TextColor3={Color3.fromRGB(255, 255, 255)}
      Event={{
        Activated: () => {
          return props.onClick?.()
        },
      }}
    />
  )
}
