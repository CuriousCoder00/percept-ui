import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from ".";

const AccordionRender = ({
  variant,
  color,
  heading,
  body,
}: {
  variant?: "solid" | "outline" | "soft" | null;
  color?:
    | "dark"
    | "blue"
    | "red"
    | "green"
    | "yellow"
    | "cyan"
    | "gray"
    | "emerald"
    | "rose"
    | "amber"
    | "orange"
    | "pink"
    | "purple"
    | "indigo"
    | "teal"
    | "lime"
    | "sky"
    | "black"
    | "light"
    | null
    | undefined;
  heading: string;
  body: string;
}) => {
  return (
    <div className="w-[70vw]">
      <Accordion
        variant={variant}
        color={color}
        heading={heading}
        body={body}
      />
      <Accordion
        variant={variant}
        color={color}
        heading={heading}
        body={body}
      />
      <Accordion
        variant={variant}
        color={color}
        heading={heading}
        body={body}
      />
      <Accordion
        variant={variant}
        color={color}
        heading={heading}
        body={body}
      />
    </div>
  );
};

const Variants = ["solid", "outline", "ghost"];
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

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: AccordionRender,
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
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    color: "light",
    heading: "Success",
    body: "This is Success Message",
  },
};
