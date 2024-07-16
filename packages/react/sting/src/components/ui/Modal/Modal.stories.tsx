import type { Meta, StoryObj } from "@storybook/react";

import { Modal, ModalClose, ModalContent, ModalTrigger } from ".";
import { Button } from "../Button";

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      // <Center>
      <Story />
      // </Center>
    ),
  ],
  title: "Elements/Modal",
  argTypes: {
    size: ["xsmall", "small", "regular", "large"],
    variant: ["default", "fullscreen"],
  },
  args: {
    title: "Did you you call me?",
    size: "small",
    variant: "default",
    hasCloseIcon: true,
    // ModalTrigger: <Button size="regular" styleType="default" variant="primary" > Open Modal </Button>
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Variant: Story = {
  args: {
    title: "Did you you call me?",
    size: "small",
    variant: "default",
    hasCloseIcon: true,
    onOpenChange: (e) => console.log(e),
    // ModalTrigger: <Button size="regular" styleType="default" variant="primary" > Open Modal </Button>
  },
  render: (args) => {
    // let selectedName = args.variant;

    return (
      <>
        <Modal
          open={args.open}
          ModalTrigger={args.ModalTrigger}
          onOpenChange={args.onOpenChange}
        >
          <ModalTrigger>
            <Button
              onClick={() => {}}
              size="regular"
              styleType="default"
              variant="primary"
            >
              Open
            </Button>
          </ModalTrigger>

          <ModalContent {...args}>
            <ModalClose>
              <div className="s-flex s-justify-end">
                <div>
                  <Button
                    onClick={() => {}}
                    size="regular"
                    styleType="default"
                    variant="primary"
                  >
                    Yes, I did
                  </Button>
                </div>
              </div>
            </ModalClose>
          </ModalContent>
        </Modal>
      </>
    );
  },
};
