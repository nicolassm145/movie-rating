// components/layouts/SystemLayout.tsx
import { ReactNode } from "react";
import HeaderComponent from "../HeaderComponent";
import FooterComponent from "../FooterComponent";

interface SystemLayoutProps {
  children: ReactNode;
}

const SystemLayout = ({ children }: SystemLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <header className=" top-0 z-50 bg-base-100/95">
        <HeaderComponent />
      </header>
      <div className="flex-1 flex">
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
      <footer className=" bottom-0 z-50">
        <FooterComponent />
      </footer>
    </div>
  );
};

export default SystemLayout;
