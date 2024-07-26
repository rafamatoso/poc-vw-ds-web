import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Button from ".";
import { IButtonProps } from "./interfaces";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<IButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  type: "button",
};
