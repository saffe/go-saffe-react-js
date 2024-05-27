# go-saffe-react-js

> Go saffe capture component for react js

[![NPM](https://img.shields.io/npm/v/@go.saffe/go-saffe-react-js.svg)](https://www.npmjs.com/package/@go.saffe/go-saffe-react-js) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @go.saffe/go-saffe-react-js
```

```bash
yarn add @go.saffe/go-saffe-react-js
```

## Usage

```tsx
import { GoSaffeCapture } from '@go.saffe/go-saffe-react-js'

export function Example() {
  return (
    <GoSaffeCapture
      captureKey='' // capture key (sandbox or production)
      user='' // end-user identifier (either email or CPF)
      type='' // 'onboarding' or 'verification'
      endToEndId='' // identifier to keep consistency between front and backend
      onClose={() => console.log('')} // callback function called when end-user closes (cancels) the capture
      onFinish={() => console.log('')} // callback function called when end-user finishes (completes) the capture
    />
  )
}
```
