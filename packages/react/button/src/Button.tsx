import { ComponentProps } from "react";

type Props = ComponentProps<"button">;

const Button = ({ ...props }: Props) => {
  return (
    <button className="s-btn btn-neutral" {...props}>
      Hello
    </button>
  );
};

export { Button };
