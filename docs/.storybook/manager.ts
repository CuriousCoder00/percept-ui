import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Percept UI",
    brandUrl: "https://percept-ui.vercel.app",
    brandImage: "../public/logo.png",
  }),
});
