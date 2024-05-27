import React, { useEffect } from 'react'
import { CaptureComponent } from './components/GoSaffeCapture'

interface Props {
  captureKey: string
  user: string
  endToEndId: string
  type: 'verification' | 'onboarding'
  onClose: () => void
  onFinish: () => void
}

interface CaptureEventMessage {
  data: {
    source: string
    payload: {
      event: string
    }
  }
}

export const GoSaffeCapture = (props: Props) => {
  useEffect(() => {
    window.addEventListener('message', (e: CaptureEventMessage) => {
      if (e.data.source === 'go-saffe-capture') {
        if (e.data.payload.event === 'close') {
          return props.onClose()
        }
        if (e.data.payload.event === 'finish') {
          return props.onFinish()
        }
      }
    })
  }, [])

  return (
    <React.StrictMode>
      <CaptureComponent
        captureKey={props.captureKey}
        endToEndId={props.endToEndId}
        type={props.type}
        user={props.user}
      />
    </React.StrictMode>
  )
}
