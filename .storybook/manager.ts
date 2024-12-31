import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

const BrandTitleString = `
  <div style="display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 1rem;">
    <img src="./logo.png" style="height: 50%; max-height: 2.5rem; aspect-ratio: 1/1; border-radius: 50%; background-color: rgba(0, 0, 0, 0.25);"/>
    <span style="font-size: 1.25rem; font-weight: bold;">MUsoftware</span>
  </div>
`

addons.setConfig({
  theme: create({
    base: 'light',
    brandUrl: 'https://storybook.mudev.cc',
    brandTitle: BrandTitleString,
  }),
})
