import {
  FaHome,
  FaRegCalendarAlt,
  FaChartBar,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">داشبورد کارمندان</h2>
      <ul>
        <li className="mb-4">
          <a
            href="#"
            className="flex items-center p-2 gap-3 bg-gray-700 rounded"
          >
            <FaHome className="mr-2" />
            <span>صفحه اصلی</span>
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#"
            className="flex items-center p-2 gap-3 hover:bg-gray-700 rounded"
          >
            <FaRegCalendarAlt className="mr-2" />
            <span>مرخصی‌ها</span>
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#"
            className="flex items-center p-2 gap-3 hover:bg-gray-700 rounded"
          >
            <FaChartBar className="mr-2" />
            <span>گزارشات</span>
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#"
            className="flex items-center p-2 gap-3 hover:bg-gray-700 rounded"
          >
            <FaUserCircle className="mr-2" />
            <span>پروفایل من</span>
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#"
            className="flex items-center p-2 gap-3 hover:bg-gray-700 rounded"
          >
            <FaCog className="mr-2" />
            <span>تنظیمات</span>
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#"
            className="flex items-center p-2 gap-3 hover:bg-gray-700 rounded"
          >
            <FaSignOutAlt className="mr-2" />
            <span>خروج</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
