import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

type ChildrenProps = {
  children: ReactNode;
};

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 bg-gray-100 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
