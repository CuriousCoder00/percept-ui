import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from ".";

const Variants = ["horizontal", "vertical"];
const Sizes = ["1", "2", "3", "4", "5"];
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

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
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
    size: {
      options: Sizes,
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    variant: "horizontal",
    color: "blue",
    size: "4",
  },
};

export const Vertical: Story = {
  args: {
    variant: "vertical",
    color: "blue",
    size: "4",
  },
};
