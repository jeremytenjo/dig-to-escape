import { Workspace } from '@rbxts/services'

export type GetInstanceProps = {
  instancePath: string
}

export default function getInstance<InstanceClass>(props: GetInstanceProps) {
  const pathSegments = props.instancePath.split('/')
  let currentParent: Instance = Workspace

  for (const segment of pathSegments) {
    currentParent = currentParent.WaitForChild(segment)
  }

  const folder = currentParent as InstanceClass

  return folder
}
