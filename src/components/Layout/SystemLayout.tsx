import { ReactNode } from "react";
import HeaderComponent from "../HeaderComponent";
import FooterComponent from "../FooterComponent";

interface SystemLayoutProps {
  children: ReactNode;
}

const SystemLayout = ({ children }: SystemLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="top-0 z-50 ">
        <HeaderComponent />
      </header>
      
      <main className="flex-1">
        {children}
      </main>

      <footer className="mt-auto">
        <FooterComponent />
      </footer>
    </div>
  );
};

export default SystemLayout;