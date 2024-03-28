import { ReactNode } from "react";

// Define the props interface
interface CenterProps {
  children: ReactNode;
}

function Center(props: CenterProps) {
  return (
    <div className=" flex justify-center items-center min-h-[150px] gap-x-4">
      {props.children}
    </div>
  );
}

export default Center;
