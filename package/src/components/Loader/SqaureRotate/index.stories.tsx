import type { Meta, StoryObj } from "@storybook/react";
import { SquareRotate } from ".";

const Sizes = [1, 2, 3, 4, 5];
const Colors = [
  "dark",
  "blue",
  "red",
  "green",
  "yellow",
  "cyan",
  "gray",
  "emerald",
  "rose",
  "amber",
  "orange",
  "pink",
  "purple",
  "indigo",
  "teal",
  "lime",
  "sky",
  "black",
  "light",
];

const meta: Meta<typeof SquareRotate> = {
  title: "Components/Loaders/SquareRotate",
  component: SquareRotate,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      options: Colors,
      control: { type: "select" },
    },
    size: {
      options: Sizes,
      control: { type: "select" },
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SquareRotateLoader: Story = {
  args: {
    size: 3,
    color: "blue",
  },
};