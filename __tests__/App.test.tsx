/**
 * @format
 */

import 'react-native'
import { it } from '@jest/globals'
import App from '@screens/App'
import React from 'react'
import renderer from 'react-test-renderer'

// Note: import explicitly to use the types shipped with jest.

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  renderer.create(<App />)
})
