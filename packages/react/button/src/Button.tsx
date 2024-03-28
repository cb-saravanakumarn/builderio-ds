import { ComponentProps } from "react";

type Props = ComponentProps<"button">;

const Button = ({ ...props }: Props) => {
  return (
    <button className="btn btn-neutral" {...props}>
      Hello
    </button>
  );
};

export { Button };
