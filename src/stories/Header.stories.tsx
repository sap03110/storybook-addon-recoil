import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { RecoilMockState } from "../types";

const meta: Meta<typeof Header> = {
  title: "Example/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    onLogin: () => {},
    onLogout: () => {},
    onCreateAccount: () => {},
  },
};

export default meta;

type Story = StoryObj<
  Parameters<typeof Header>[0] & { recoil?: RecoilMockState }
>;

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
