import type { Meta, StoryObj } from "@storybook/react-vite";

import CustomToast from "./CustomToast";

const meta = {
  title: "UI/CustomToast",
  component: CustomToast,
  tags: ["autodocs"],
  args: {
    status: "SUCCESS",
    text: "Text",
    hasIcon: true,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CustomToast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    status: "SUCCESS",
    text: "Successful!",
    hasIcon: true,
  },
};

export const Warning: Story = {
  args: {
    status: "WARNING",
    text: "Warning!",
    hasIcon: true,
  },
};

export const Error: Story = {
  args: {
    status: "ERROR",
    text: "Error!",
    hasIcon: true,
  },
};
