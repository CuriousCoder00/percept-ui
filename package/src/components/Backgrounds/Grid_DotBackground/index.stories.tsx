import type { Meta, StoryObj } from "@storybook/react";
import { GridBackground } from ".";

const meta: Meta<typeof GridBackground> = {
  title: "Backgrounds/Background",
  component: GridBackground,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Grid_Background: Story = {
  args: {
    grid: true,
  },
};
export const Dot_Background: Story = {
  args: {
    grid: false,
  },
};
