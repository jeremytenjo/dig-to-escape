import React from '@rbxts/react'

export type WelcomeScreenProps = {
  name: string
}

export default function WelcomeScreen(props: WelcomeScreenProps) {
  return <textbutton Text={props.name} Size={new UDim2(0, 200, 0, 50)} />
}
