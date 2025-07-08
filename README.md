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
      onTimeout={() => console.log('')} // callback function called when the capture ends for timeout
      extraData={{ // optional extra configuration
        settings: {
          primaryColor: '#00ABAB', // primary color for the capture interface
          secondaryColor: '#6A6A6A', // secondary color for the capture interface
          lang: 'en' // language for the capture interface
        },
        sendResultsTo: {
          media: 'email', // media type for sending results
          email: 'valid_email@domain.com' // email address to where results should be sent
        }
      }}
    />
  )
}
```

The `extraData` parameter is **optional** and allows for dynamic changes specific to the transaction, such as language and colors. It also allows to send sandbox transaction results in a dynamic way to a specific email address.

Primary and secondary colors should be informed in hexadecimal code. Possible values for the key "lang" at the moment are "en" so that the capture interface is presented in english, "pt" for the language to be portuguese, and "es" for spanish.

### Example of `extraData` with color settings only:
```tsx
<GoSaffeCapture
  captureKey='<CAPTURE_KEY>'
  user='<USER_IDENTIFIER>'
  type='<TRANSACTION_TYPE>'
  endToEndId='<END_TO_END_ID>'
  onClose={() => console.log('Capture closed')}
  onFinish={() => console.log('Capture finished')}
  onTimeout={() => console.log('Capture timeout')}
  extraData={{
    settings: {
      primaryColor: '#00ABAB',
      secondaryColor: '#6A6A6A'
    }
  }}
/>
```
