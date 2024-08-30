import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const Variants = ["solid", "outline", "ghost"];
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
  "light"
];
const Radiuses = ["none", "sm", "md", "lg", "xl", "full"];

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
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
    children: "Button",
    color: "blue",
    size: "sm",
    radius: "sm",
    
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
    color: "blue",
    size: "sm",
    radius: "sm",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
    color: "blue",
    size: "sm",
    radius: "sm",
  },
};
