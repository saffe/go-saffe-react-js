import React, { useEffect } from 'react'
import { 
  Settings, 
  ResultNotification,
  ExtraData,
  InitFunc,
  Props
} from './interfaces'

declare global {
  interface Window {
    GoSaffe: InitFunc
  }
}

export const CaptureComponent = (props: Props) => {
  useEffect(() => {
    if (window && document) {

      const existScript = document.getElementById('GoSaffeCaptureComponent')

      if (!existScript) {
        const script = document.createElement('script')
        script.id = 'GoSaffeCaptureComponent'
        script.src = 'https://go.saffe.ai/cdn/latest'

        const body = document.getElementsByTagName('body')[0]
        body.appendChild(script)

        script.addEventListener('load', () => {
          window.GoSaffe.init(
            props.captureKey,
            props.user,
            props.endToEndId,
            props.type,
            props.extraData || {},
          )
        })
      }
    }
  }, [])

  return <div />
}
