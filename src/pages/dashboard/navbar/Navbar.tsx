import { useSidebarOpen } from "../../../states/useSidebarOpen";
import { AvtarDropdown } from "@/components/component/AvtarDropdown";
import { Menu } from "lucide-react";

const Navbar = () => {
  const { toggleSidebar } = useSidebarOpen();

  return (
    <nav className="bg-purple-500 text-white p-4 flex justify-between items-center">
      <div className="flex gap-1.5">
        <div className="lg:hidden flex justify-center items-center">
          <div onClick={() => toggleSidebar()}>
            <Menu color="black" size={24} />
          </div>
        </div>
        <div className="flex p-1 justify-center items-center">
          <img
            src="/pencle-bg.png"
            alt="EcoBin Logo"
            className="h-5 w-auto sm:h-6 md:h-6 lg:h-8"
          />
          <h1 className=" text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            Task Manager
          </h1>
        </div>
      </div>

      <div className="flex items-center">
        <AvtarDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
