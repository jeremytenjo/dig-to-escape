import React from '@rbxts/react'

export type WelcomeScreenProps = {
  onPlayClick?: () => void
}

export default function WelcomeScreen(props: WelcomeScreenProps) {
  return (
    <frame
      Size={new UDim2(1, 0, 1, 0)}
      BackgroundColor3={Color3.fromRGB(100, 120, 140)}
      BorderSizePixel={0}
    >
      {/* Title Section */}
      <frame
        Size={new UDim2(1, 0, 0.15, 0)}
        BackgroundColor3={Color3.fromRGB(60, 60, 60)}
        BorderSizePixel={0}
      >
        <textlabel
          Text='DIG TO ESCAPE'
          Size={new UDim2(1, 0, 1, 0)}
          BackgroundTransparency={1}
          TextColor3={Color3.fromRGB(255, 255, 255)}
          TextScaled={true}
          Font={Enum.Font.GothamBold}
        />
      </frame>
      {/* Story Cards Container */}
      <frame
        Position={new UDim2(0.05, 0, 0.2, 0)}
        Size={new UDim2(0.9, 0, 0.55, 0)}
        BackgroundTransparency={1}
        BorderSizePixel={0}
      >
        <uilistlayout
          FillDirection={Enum.FillDirection.Horizontal}
          Padding={new UDim(0.02, 0)}
          HorizontalAlignment={Enum.HorizontalAlignment.Center}
          VerticalAlignment={Enum.VerticalAlignment.Center}
        />

        <StoryCard
          title='ARRESTED'
          description="You got ARRESTED. Now you're stuck in prison forever 😢"
          backgroundColor={Color3.fromRGB(40, 40, 40)}
        />

        <StoryCard
          title='TUNNEL'
          description="There's a TUNNEL under the prison. Dig to ESCAPE 🔨"
          backgroundColor={Color3.fromRGB(50, 80, 30)}
        />

        <StoryCard
          title='EVIL GUARD'
          description='But be careful, the EVIL GUARD patrols at night 😢'
          backgroundColor={Color3.fromRGB(30, 30, 60)}
        />
      </frame>
      {/* Play Button */}
      <textbutton
        Position={new UDim2(0.35, 0, 0.8, 0)}
        Size={new UDim2(0.3, 0, 0.12, 0)}
        BackgroundColor3={Color3.fromRGB(0, 255, 0)}
        BorderSizePixel={2}
        BorderColor3={Color3.fromRGB(0, 200, 0)}
        Text='PLAY'
        TextScaled={true}
        Font={Enum.Font.GothamBold}
        TextColor3={Color3.fromRGB(255, 255, 255)}
        Event={{
          Activated: () => {
            return props.onPlayClick?.()
          },
        }}
      />
    </frame>
  )
}

type StoryCardProps = {
  title: string
  description: string
  textColor?: Color3
  backgroundColor?: Color3
}

function StoryCard(props: StoryCardProps) {
  const textColor = props.textColor ?? Color3.fromRGB(255, 255, 255)
  const bgColor = props.backgroundColor ?? Color3.fromRGB(50, 50, 50)

  return (
    <frame
      Size={new UDim2(0.28, 0, 1, 0)}
      BackgroundColor3={bgColor}
      BorderSizePixel={2}
      BorderColor3={Color3.fromRGB(0, 0, 0)}
    >
      <textlabel
        Text={props.title}
        Size={new UDim2(1, 0, 0.4, 0)}
        BackgroundTransparency={1}
        TextColor3={Color3.fromRGB(255, 50, 50)}
        TextScaled={true}
        Font={Enum.Font.GothamBold}
        TextWrapped={true}
      />
      <textlabel
        Text={props.description}
        Position={new UDim2(0, 0, 0.4, 0)}
        Size={new UDim2(1, 0, 0.6, 0)}
        BackgroundTransparency={1}
        TextColor3={textColor}
        TextScaled={true}
        Font={Enum.Font.Gotham}
        TextWrapped={true}
      />
    </frame>
  )
}
