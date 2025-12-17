import React from '@rbxts/react'

export type TextProps = {
  name: string
}

export default function Text(props: TextProps) {
  return <textlabel Text={props.name} />
}
