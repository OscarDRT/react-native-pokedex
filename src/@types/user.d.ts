type Asset = {
  base64?: string
  uri?: string
  width?: number
  height?: number
  fileSize?: number
  type?: string
  fileName?: string
  duration?: number
  bitrate?: number
  timestamp?: string
  id?: string
}

type UserState = {
  name: string
  birthdate: string
  avatar: Asset
}
