import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const Variants = ["solid", "outline", "ghost"];
const Sizes = ["xs", "sm", "md", "lg", "xl"];
const ColorSchemes = [
  "primary",
  "danger",
  "dark",
  "success",
  "warning",
  "info",
  "gray",
];
const Radiuses = ["none", "sm", "md", "lg", "xl", "full"];

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: Variants,
      control: { type: "select" },
    },
    colorscheme: {
      options: ColorSchemes,
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
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    children: "Button",
    colorscheme: "primary",
    size: "sm",
    radius: "sm",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
    colorscheme: "primary",
    size: "sm",
    radius: "sm",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
    colorscheme: "primary",
    size: "sm",
    radius: "sm",
  },
};
