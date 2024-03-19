import React, { ComponentProps } from "react";

type Props = ComponentProps<"button">;

const Button = ({ ...props }: Props) => {
  return (
    <button className=" bg-purple-500" {...props}>
      Hello
    </button>
  );
};

export { Button };
