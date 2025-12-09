import React from '@rbxts/react'
import ReactRoblox from '@rbxts/react-roblox'
import { CreateReactStory, Choose } from '@rbxts/ui-labs'

const story = CreateReactStory(
  {
    react: React,
    reactRoblox: ReactRoblox,
    controls: {
      variant: Choose(['hello', 'world', 'button']),
    },
  },
  (props) => {
    print('props', props)
    const component = <frame />
    return component
  },
)

export = story
