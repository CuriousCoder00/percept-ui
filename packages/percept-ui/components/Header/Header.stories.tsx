import { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Header>;
export const Light: Story = {
  args: {
    BrandName: "Percept UI",
    variant: "light",
  },
};
export const Primary: Story = {
  args: {
    BrandName: "Percept UI",
    variant: "primary",
  },
};
export const Dark: Story = {
  args: {
    BrandName: "Percept UI",
    variant: "dark",
  },
};
