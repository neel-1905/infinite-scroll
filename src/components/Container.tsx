import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="mt-20 py-5">{children}</div>;
};

export default Container;
