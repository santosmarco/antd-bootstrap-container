import React, { useMemo } from "react";
import styles from "./Container.module.css";

export type ContainerProps = {
  as?: React.ElementType;
  fluid?: boolean;
};

const Container: React.FC<ContainerProps> = ({ as, fluid, children }) => {
  const Component = useMemo(() => as || "div", [as]);

  const className = useMemo(
    () => (fluid ? styles.containerFluid : styles.container),
    [fluid]
  );

  return <Component className={className}>{children}</Component>;
};

export default Container;
