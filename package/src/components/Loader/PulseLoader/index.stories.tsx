import type { Meta, StoryObj } from "@storybook/react";
import { PulseLoader } from ".";

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

const meta: Meta<typeof PulseLoader> = {
  title: "Loaders/PulseLoader",
  component: PulseLoader,
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

export const PulsePingLoader: Story = {
  args: {
    size: 3,
    color: "blue",
  },
};