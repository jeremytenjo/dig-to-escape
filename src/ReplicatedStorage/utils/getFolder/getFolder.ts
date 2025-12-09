import { Workspace } from '@rbxts/services'

export type GetFolderProps = {
  folderPath: string
}

export default function getFolder(props: GetFolderProps) {
  const pathSegments = props.folderPath.split('/')
  let currentParent: Instance = Workspace

  for (const segment of pathSegments) {
    currentParent = currentParent.WaitForChild(segment)
  }

  const folder = currentParent as Folder

  return folder
}
