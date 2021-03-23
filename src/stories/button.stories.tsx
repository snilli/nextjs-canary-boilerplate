import React from 'react'
import {Button} from '@storybook/react/demo'

export default {
  title: 'Button',
  argTypes: {onClick: {action: 'clicked'}},
}

const TemplateWithText = (args: unknown): JSX.Element => <Button {...args}>Hello Button</Button>

const TemplateWithEmoji = (args: unknown): JSX.Element => (
    <Button {...args}>
      <span role='img' aria-label='so cool'>
        😀 😎 👍 💯
      </span>
    </Button>
)

export const withText = TemplateWithText.bind({})

export const withSomeEmoji = TemplateWithEmoji.bind({})
