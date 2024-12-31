import { ScrollIndicator } from '@/components/scrollIndicator'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Component/Scroll Indicator',
  component: ScrollIndicator,
  parameters: { layout: 'centered' },
  args: {
    isVertical: false,
    indicatorCount: 3,
    indicatorSize: '1.5rem',
    indicatorColor: 'black',
    indicatorStroke: '2.5px',
    indicatorAnimationDuration: 2,
    indicatorAnimationDelay: 0.15,
  }
} satisfies Meta<typeof ScrollIndicator>
export default meta

export const Component: StoryObj<typeof meta> = {}
