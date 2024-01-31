# go-saffe-react-js

> Go saffe capture component for react js

[![NPM](https://img.shields.io/npm/v/@go.saffe/go-saffe-react-js.svg)](https://www.npmjs.com/package/@go.saffe/go-saffe-react-js) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @go-saffe/go-saffe-react-js
```

```bash
yarn add @go-saffe/go-saffe-react-js
```

## Usage

```tsx
import { GoSaffeCapture } from '@go-saffe/go-saffe-react-js'

export function Example() {
  return (
    <GoSaffeCapture
      apiKey='your-apikey'
      endToEndId='' // unique id to ensure the capture is your
      onClose={() => console.log('')} // Run function on close component
      onFinish={() => console.log('')} // Run function on finish capture
      type='onboarding' // 'onboarding' or 'verification'
      user='' // user identifier
    />
  )
}
```
