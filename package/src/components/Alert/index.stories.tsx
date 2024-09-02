import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "."; 
import { IoMdDoneAll } from "react-icons/io"

const Variants = ["solid", "outline"];
const Colors = ["success", "error", "warning", "info"]; 
const Timer =[1000,2000,3000,4000,5000]
const Position = [
  "topLeft",
  "topCenter",
  "topRight",
  "centerLeft",
  "center",
  "centerRight",
  "bottomLeft",
  "bottomCenter",
  "bottomRight",
];

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
    color: {
      options: Colors,
      control: { type: "select" },
    },
    withIcon: {
      control: { type: "boolean" },
    },
    position: {
      options: Position,
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

export const Solid: Story = {
  args: {
    variant: "solid",
    color: "success",
    title: "Success",
    message: "This is Success Message",
    icon: <IoMdDoneAll/>,
  },
};
export const SolidWithoutIcon: Story = {
  args: {
    variant: "solid",
    color: "info",
    title: "Info",
    position: "bottomCenter",
    message: "This is Success Message without icon",
  },
};
export const SolidError: Story = {
  args: {
    variant: "solid",
    color: "error",
    position: "topCenter",
    message: "This is Error Message without icon",
    icon: <span>❌</span>,
  },
};   
export const AlertWithDuration: Story = {
  args: {
    variant: "solid",
    color: "success",
    title: "Success",
    message: `This will disappear`,
    icon: <IoMdDoneAll/>,
    duration:4000, 
    onClose: ()=>{
      console.log("I am closed")
    }
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    color: "error",
    withIcon: false,
    message: "Error message without icon and title",
  },
};
