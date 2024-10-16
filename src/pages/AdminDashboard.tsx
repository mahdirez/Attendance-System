import { ClockIcon } from "@heroicons/react/16/solid";
import Layout from "../components/Layout";

function AdminDashboard() {
  return (
    <Layout>
      <div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">حضور آنلاین</h2>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1">
              <ClockIcon className="h-5 w-5" /> زمان ثبت‌شده: 75 ساعت و 30 دقیقه
            </span>
            <button className="bg-blue-500 text-white p-2 rounded">
              مشاهده گزارش جزئیات
            </button>
          </div>
          {/* جای نمودار */}
          <div className="mt-6 bg-gray-100 p-4 rounded">
            <p>محل نمودار</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6">
          {/* بخش مرخصی */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">مرخصی</h2>
            <div className="flex justify-between mb-4">
              <div>
                <p>مرخصی سالانه</p>
                <p>4 روز استفاده شده</p>
              </div>
              <div>
                <p>مرخصی استعلاجی</p>
                <p>5 روز استفاده شده</p>
              </div>
            </div>
            <button className="bg-green-500 text-white p-2 rounded">
              درخواست مرخصی
            </button>
          </div>

          {/* بخش اعضای تیم من */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">اعضای تیم من</h2>
            <ul>
              <li className="flex justify-between mb-4">
                <span>کارمند 1</span>
                <span className="text-green-500">حاضر</span>
              </li>
              <li className="flex justify-between mb-4">
                <span>کارمند 2</span>
                <span className="text-green-500">حاضر</span>
              </li>
              <li className="flex justify-between mb-4">
                <span>کارمند 3</span>
                <span className="text-red-500">مرخصی استعلاجی</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdminDashboard;
