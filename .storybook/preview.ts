import type { Preview } from "@storybook/react";
import { withRecoil } from "../src";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  initialGlobals: {
    background: { value: "light" },
  },
  decorators: [withRecoil],
};

export default preview;
