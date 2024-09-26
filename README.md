# Storybook Addon Recoil

`Addon to use Recoil in Storybook`
You can easily use Recoil and update values ​​in your storybook.

## Installation

```sh
yarn add -D storybook-addon-recoil
# or
pnpm add -D storybook-addon-recoil
```

Then, register it as an addon in `.storybook/preview.ts`.

```js
// .storybook/preview.ts

import { withRecoil } from 'storybook-addon-recoil';

export const decorators = [..., withRecoil];
```

## Usage

The primary way to use this addon is to define the `recoil` parameter. You can do this the
component level, as below, to affect all stories in the file, or you can do it for a single story.

```js
// Button.stories.ts

import type { Meta } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    recoil: {
      user: {
        name: "Jane Doe",
        age: 27,
      },
    },
  }
};

export default meta;
```
