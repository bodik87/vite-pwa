import { Home, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../main";

export default function BottomPanel() {
  const location = useLocation();
  const homePage = location.pathname === routes.home;
  const settingsPage = location.pathname === routes.settings;

  return (
    <footer className="fixed bottom-0 inset-x-0 h-14 border-t bg-gray-100">
      <div className="wrapper flex justify-around items-center z-10">
        <Link
          to={routes.home}
          className={`h-14 w-full flex items-center justify-center active:scale-95 transition-all`}
        >
          <Home
            className={`${homePage ? "stroke-black" : "stroke-gray-600"}`}
          />
        </Link>
        <Link
          to={routes.settings}
          className={`h-14 w-full flex items-center justify-center active:scale-95 transition-all`}
        >
          <Settings
            className={`${settingsPage ? "stroke-black" : "stroke-gray-600"}`}
          />
        </Link>
      </div>
    </footer>
  );
}
