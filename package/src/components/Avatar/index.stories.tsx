import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const Variants = ["solid", "outline", "soft"];
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
const Radiuses = ["none", "sm", "md", "lg", "xl", "full"];

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
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
    radius: {
      options: Radiuses,
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    size: 3,
    color: "blue",
    radius: "full",
  },
};
export const Soft: Story = {
  args: {
    variant: "soft",
    size: 3,
    color: "blue",
    radius: "full",
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
    size: 3,
    color: "blue",
    radius: "full",
  },
};
