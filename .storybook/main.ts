import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['./static'],
  managerHead: (head) => `${head}<link rel="shortcut icon" href="./logo.png" type="image/png">`,
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
}

export default config
