import classNames from "classnames";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={classNames("lg:max-w-[1400px] px-3 mx-auto", className)}>{children}</div>
  );
};

export default Container;
