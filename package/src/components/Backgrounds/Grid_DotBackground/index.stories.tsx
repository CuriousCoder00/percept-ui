import type { Meta, StoryObj } from "@storybook/react";
import { Background } from ".";

const Variants = ["grid", "dot"];

const meta: Meta<typeof Background> = {
  title: "Backgrounds/Background",
  component: Background,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: { control: "select", options: Variants },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Grid_Background: Story = {
  args: {
    variant: "grid",
  },
};
export const Dot_Background: Story = {
  args: {
    variant: "dot",
  },
};
