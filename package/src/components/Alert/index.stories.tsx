import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from ".";

const Variants = ["solid", "outline"];
const Colors = ["success", "error", "warning", "info"];

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: Variants,
      control: { type: "select" },
    },
    color: {
      options: Colors,
      control: { type: "select" },
    },
    withIcon: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    color: "info",
    title: "Success",
    message: "This is Success Message",
    withIcon: true,
    icon: <span>🔔</span>,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    color: "error",
    withIcon: false,
    message: "Error message without icon and title",
  },
};
