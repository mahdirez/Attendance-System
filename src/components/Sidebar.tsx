import {
  HomeIcon,
  UserCircleIcon,
  WalletIcon,
} from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white text-right ">
      <div className="p-4">
        <h2 className="text-2xl font-bold">پنل مدیریت</h2>
      </div>
      <nav className="mt-10 px-4">
        <ul>
          <li className="mb-6">
            <Link
              to="/dashboard"
              className="text-lg hover:text-blue-300 flex items-center"
            >
              <HomeIcon className="h-5 w-5" />
              داشبورد
            </Link>
          </li>
          <li className="mb-6">
            <Link
              to="/attendance"
              className="text-lg hover:text-blue-300 flex items-center"
            >
              <UserCircleIcon className="h-5 w-5" />
              کارمندان
            </Link>
          </li>
          <li className="mb-6">
            <Link
              to="/invoices"
              className="text-lg hover:text-blue-300 flex items-center"
            >
              <WalletIcon className="h-5 w-5" />
              مدارک
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
