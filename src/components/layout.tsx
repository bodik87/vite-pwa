import { Outlet } from "react-router-dom";
import Header from "./header";
import BottomPanel from "./bottom-panel";

export default function Layout() {
  return (
    <main className="min-h-dvh pt-4 pb-16 flex flex-col">
      <Header />
      <Outlet />
      <BottomPanel />
    </main>
  );
}
