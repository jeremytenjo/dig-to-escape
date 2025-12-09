import React from '@rbxts/react'
import Color from '@rbxts/colour-utils'

export type ButtonProps = {
  variant: string
  text: string
  onClick?: () => void
  position?: UDim2
}

export default function Button(props: ButtonProps) {
  return (
    <textbutton
      Text={props.text ?? props.variant}
      Size={new UDim2(0, 100, 0, 50)}
      BackgroundColor3={Color.Hex.fromHex('#007FFF')}
      TextColor3={Color.Hex.fromHex('#FFFFFF')}
      Position={props.position}
      Event={{
        Activated: () => {
          return props.onClick?.()
        },
      }}
    />
  )
}
