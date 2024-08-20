import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "percept-ui";
const Variants = ["solid", "outline", "soft"];
const Sizes = ["xs", "sm", "md", "lg", "xl"];
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
const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
    size: "xs",
    color: "blue",
    radius: "none",
    children: "Badge",
  },
};
export const Soft: Story = {
  args: {
    variant: "soft",
    size: "xs",
    color: "blue",
    radius: "full",
    children: "Badge",
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
    size: "xs",
    color: "blue",
    radius: "none",
    children: "Badge",
  },
};
