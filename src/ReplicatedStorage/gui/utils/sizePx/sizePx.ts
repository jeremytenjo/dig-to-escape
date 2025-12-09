export type SizePxProps = {
  width: number
  height: number
}

export default function sizePx(props: SizePxProps) {
  return new UDim2(0, props.width, 0, props.height)
}
