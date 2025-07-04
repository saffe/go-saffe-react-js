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
          primaryColor: '#ff0000', // primary color for the capture interface
          secondaryColor: '#00ff00', // secondary color for the capture interface
          lang: 'pt' // language for the capture interface
        },
        sendResultsTo: {
          media: 'email', // media type for sending results
          email: 'user@example.com' // email address to send results to
        }
      }}
    />
  )
}
```

## Extra Data Configuration

The `extraData` parameter is optional and allows configuring additional capture aspects:

### Settings
- `primaryColor`: Primary color for the capture interface (hexadecimal format)
- `secondaryColor`: Secondary color for the capture interface (hexadecimal format)
- `lang`: Language for the capture interface (e.g., 'pt', 'en', 'es')

### Send Results To
- `media`: Media type for sending results (e.g., 'email')
- `email`: Email address where results should be sent

### Example with color settings only:
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
      secondaryColor: '#6c757d'
    }
  }}
/>
```
