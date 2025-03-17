import { useSidebarOpen } from "../../../states/useSidebarOpen";
import { SquareX } from 'lucide-react';


const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarOpen();

  return (
    <aside
      className={`bg-gray-800 text-white w-64 p-4 space-y-4 transition-transform transform lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed lg:static inset-y-0 left-0 lg:flex flex-col z-50`}
    >
      <div className="lg:hidden">
        <SquareX size={24} onClick={() => toggleSidebar()} />
      </div>
      <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
        Dashboard
      </a>
      <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
        Reports
      </a>
      <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
        Settings
      </a>
    </aside>
  );
};

export default Sidebar;
