import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from ".";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AlertComponent: Story = {
  args: {
    color: "blue",
    variant: "solid",
    children: "Alert",
  },
};
