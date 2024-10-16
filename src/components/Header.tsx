import { UserCircleIcon } from "@heroicons/react/16/solid";
import jalaali from "jalaali-js";

function Header() {
  const today = new Date();
  const persianDate = jalaali.toJalaali(today);
  console.log(persianDate);

  return (
    <header className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">مدیریت کارمند</h1>
      <div className="flex items-center">
        <span className="mr-4">
          {persianDate.jy}/{persianDate.jm}/{persianDate.jd}
        </span>
        <button className="p-2 text-blue-500">
          <UserCircleIcon className="w-7" />
        </button>
      </div>
    </header>
  );
}

export default Header;
