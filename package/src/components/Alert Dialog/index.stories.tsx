import { Meta, StoryObj } from "@storybook/react";
import { AlertPopover } from ".";

const Position = ["topCenter", "center"];

const meta: Meta<typeof AlertPopover> = {
  title: "Components/AlertPopover",
  component: AlertPopover,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    position: {
      options: Position,
      control: { type: "select" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Dialog: Story = {
  args: {
    heading: "Closing dialog",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,dignissimos soluta! Quaerat dolorum, voluptas maxime mollitia cum est?Cumque quisquam quos neque alias veritatis dolores!",
    cancelText: "Cancel",
    confirmText: "Ok",
  },
};
export const DialogWithoutClosingTab: Story = {
  args: {
    heading: "Not Closing dialog",
    children: "This is for testing purpose",
    confirmText: "Okie",
  },
};
export const DialogWithoutTitle: Story = {
  args: {
    heading: "I am created Without Title and without closing tab .",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,dignissimos soluta! Quaerat dolorum, voluptas maxime mollitia cum est?Cumque quisquam quos neque alias veritatis dolores!",
    confirmText: "Got it",
  },
};
