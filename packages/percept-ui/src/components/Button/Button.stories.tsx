import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "primary",
  },
};
export const Danger: Story = {
  args: {
    label: "Danger Zone",
    variant: "danger",
  },
};
export const Success: Story = {
  args: {
    label: "Success",
    variant: "success",
  },
};
export const Dark: Story = {
  args: {
    label: "My Button",
    variant: "dark",
  },
};
export const Info: Story = {
  args: {
    label: "Info",
    variant: "info",
  },
};
export const Warning: Story = {
  args: {
    label: "Warning",
    variant: "warning",
  },
};
export const Default: Story = {
  args: {
    label: "Click Me !!",
    variant: "default",
  },
};
