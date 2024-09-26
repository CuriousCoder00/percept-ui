import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from ".";
import { IoMdDoneAll } from "react-icons/io"

const Variants = ["solid", "outline"];
const Types = ["success", "error", "warning", "info"];
const Timer =[1000,2000,3000,4000,5000]

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: Variants,
      control: { type: "select" },
    },
    type: {
      options: Types,
      control: { type: "select" },
    },
    duration:{
      options:Timer,
      control:{type:"select"}
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid_Success: Story = {
  args: {
    variant: "solid",
    type: "success",
    message: "This is Success Message",
  },
};
export const Outline_Success: Story = {
  args: {
    variant: "outline",
    type: "success",
    message: "This is Success Message",
  },
};
export const Solid_Error: Story = {
  args: {
    variant: "solid",
    type: "error",
    message: "This is Success Message",
  },
};
export const Outline_Error: Story = {
  args: {
    variant: "outline",
    type: "error",
    message: "This is Success Message",
  },
};
export const Solid_Warning: Story = {
  args: {
    variant: "solid",
    type: "warning",
    message: "This is Success Message",
  },
};
export const Outline_Warning: Story = {
  args: {
    variant: "outline",
    type: "warning",
    message: "This is Success Message",
  },
};
export const Solid_Info: Story = {
  args: {
    variant: "solid",
    type: "info",
    message: "This is Success Message",
  },
};
export const Outline_Info: Story = {
  args: {
    variant: "solid",
    type: "info",
    message: "This is Success Message without icon",
  },
};

export const AlertWithDuration: Story = {
  args: {
    variant: "solid",
    type: "success",
    message: `This will disappear in 5 secs`,
    duration:5000,
  },
};

