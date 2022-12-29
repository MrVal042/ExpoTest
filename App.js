import React from 'react'
import { LoadApp } from './app/Screen'
import * as MediaLibrary from 'expo-media-library'

export default function App() {
  const [status, requestPermission] = MediaLibrary.usePermissions()

  if (status === null) {
    requestPermission()
  }

  return <LoadApp />
}
