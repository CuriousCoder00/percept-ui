import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    size: "xs",
    color: "blue",
    radius:"none",
    children: "Badge",
  },
};
export const Soft: Story = {
  args: {
    variant: "soft",
    size: "xs",
    color: "blue",
    radius:"full",
    children: "Badge",
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
    size: "xs",
    color: "blue",
    radius:"none",
    children: "Badge",
  },
};
