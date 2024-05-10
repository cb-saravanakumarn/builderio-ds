import React from "react";

type SHeaderProps = {
  title: string;
  children?: React.ReactNode;
};

const SHeader = ({ title, children }: SHeaderProps) => {
  return (
    <div className="flex justify-between items-center -mt-2 -mr-2 mb-3 h-10">
      <h1 className="h5 tracking-tight">{title}</h1>
      <span>{children}</span>
    </div>
  );
};

export { SHeader };
