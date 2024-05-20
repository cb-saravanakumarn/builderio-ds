import React from "react";

type CardShellProps = {
  children: React.ReactNode;
  seperator?: boolean;
};

const CardShell = ({ children, seperator = true }: CardShellProps) => {
  console.log(seperator, "separator");
  return <div>{children}</div>;
};

export { CardShell };
