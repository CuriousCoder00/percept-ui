import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from ".";

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
const Variant = ["solid", "dashed"];

const meta: Meta<typeof Spinner> = {
  title: "Loaders/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: Variant,
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

export const SolidSpinner: Story = {
  args: {
    size: 3,
    variant: "solid",
    color: "blue",
  },
};

export const DashedSpinner: Story = {
  args: {
    size: 3,
    variant: "dashed",
    color: "blue",
  },
};
