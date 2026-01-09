import type { ReactNode } from "react";
import HeaderNav from "./HeaderNav";
import StarCursor from "./StarCursor";
import SEO from "./SEO";
import Analytics from "./Analytics";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div id="top" className="relative min-h-screen bg-ink">
      <SEO />
      <Analytics />
      <StarCursor />
      {/* Full-width layout - sections handle their own max-width constraints */}
      <div className="relative flex min-h-screen w-full flex-col">
        <HeaderNav />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
