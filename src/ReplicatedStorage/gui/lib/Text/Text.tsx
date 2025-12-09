import React from '@rbxts/react'

export type TextProps = {
  name: string
}

export default function Text(props: TextProps) {
  return <textbutton Text={props.name} />
}
