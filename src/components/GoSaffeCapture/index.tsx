import React, { useEffect } from 'react'

interface InitFunc {
  init(apiKey: string, user: string, endToEndId: string, type: string): any
}

interface Props {
  captureKey: string
  user: string
  endToEndId: string
  type: 'verification' | 'onboarding'
}
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
        const body = document.getElementsByTagName('body')[0]
        script.src = 'https://go.saffe.ai/cdn/latest'
        body.appendChild(script)
        script.addEventListener('load', () => {
          window.GoSaffe.init(
            props.captureKey,
            props.user,
            props.endToEndId,
            props.type
          )
        })
      }
    }
  }, [])

  return <div />
}
