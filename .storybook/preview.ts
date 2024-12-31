import type { Preview } from '@storybook/react'
import { previewDecorator } from './preview-decorators'

import { defaultTheme } from '../src/consts/default'

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: Object.entries(defaultTheme.backgrounds).map(([name, value]) => ({ name, value })),
      default: 'light',
    },
  },
  globalTypes: {
    mode: {
      description: 'Mode for preview area',
      defaultValue: 'light',
      toolbar: {
        title: 'Mode',
        icon: 'circlehollow',  // eslint-disable-line @cspell/spellchecker
        items: [
          { value: 'light', icon: 'starhollow', title: 'light' },  // eslint-disable-line @cspell/spellchecker
          { value: 'dark', icon: 'star', title: 'dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [previewDecorator],
}

export default preview
