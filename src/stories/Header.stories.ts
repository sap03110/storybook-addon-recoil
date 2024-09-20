import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Example/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
  parameters: {
    recoil: {
      user: {
        name: "Jane Doe",
      },
    },
  },
};

export const LoggedOut: Story = {
  parameters: {
    recoil: {
      user: null,
    },
  },
};
