import type { Meta, StoryObj } from "@storybook/react";
import { Select } from ".";

const Variants = ["solid", "outline", "ghost"];
const Sizes = ["xs", "sm", "md", "lg", "xl"];
const ColorSchemes = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: Variants,
      control: { type: "select" },
    },
    colorScheme: {
      options: ColorSchemes,
      control: { type: "select" },
    },
    size: {
      options: Sizes,
      control: { type: "select" },
    },
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    variant: "solid",
    size: "md",
    colorScheme: "primary",
  },
};

export const OutlineExample: Story = {
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    variant: "outline",
    size: "md",
    colorScheme: "danger",
  },
};
