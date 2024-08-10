import { Meta, StoryObj } from "@storybook/react";

import { DropDown } from ".";

const meta: Meta<typeof DropDown> = {
  title: "DropDown",
  component: DropDown,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DropDown>;
export const Light: Story = {
  args: {
    variant: "light",
  },
};

