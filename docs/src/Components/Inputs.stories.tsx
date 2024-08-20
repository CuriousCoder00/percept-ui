import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "percept-ui";

const Variants = ["classic", "standard", "ghost"];
const Radiuses = ["none", "sm", "md", "lg", "xl", "full"];

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: Variants,
      control: { type: "select" },
    },
    // size: {
    //   options: Sizes,
    //   control: { type: "select" },
    // },
    radius: {
      options: Radiuses,
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Classic: Story = {
  args: {
    placeholder: "Input",
    variant: "classic",
  },
};

export const Standard: Story = {
  args: {
    variant: "standard",
    placeholder: "Input",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    placeholder: "Input",
  },
};
