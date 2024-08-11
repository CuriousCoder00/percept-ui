import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InputComponent: Story = {
  args: {
    placeholder: "Input",
    colorscheme: 'blue',
  },
};

