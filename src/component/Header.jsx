import { useState } from "react";
import {
  Home,
  CreditCard,
  Plus,
  Palette,
  Globe,
  ChevronDown,
  User
} from "lucide-react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [userOpen, setUserOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (

 <header className="sticky top-0 left-64 right-0 bg-(--bg-main) border-b border-(--bg-border-color) px-6 py-4 flex items-center justify-between z-30">



      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 border border-(--bg-border-color) rounded-lg px-4 py-2 cursor-pointer relative"
          onClick={() => setUserOpen(!userOpen)}
        >
          <User size={18} />
          <span className="font-medium">Hi, Admin!</span>
          <ChevronDown size={16} />

          {userOpen && (
            <div className="absolute top-12 left-0 bg-(--bg-main) shadow-2xl  rounded-lg w-40 z-10">
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</p>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 ">
        
        <IconButton  icon={<Home  size={18}  />} />
        <IconButton icon={<CreditCard size={18} />} />

        {/* QUICK ADD */}
        <button className="flex items-center gap-2 border border-(--bg-border-color) rounded-lg px-4 py-2 hover:bg-(--bg-hover)">
          <Plus size={18} />
          <span>Quick Add</span>
        </button>

        {/* STYLIQUE */}
        <button className="flex items-center gap-2 border border-(--bg-border-color) rounded-lg px-4 py-2 hover:bg-(--bg-hover)">
          <Palette  size={18} />
          <span>Stylique</span>
          <ChevronDown size={16} />
        </button>

        {/* LANGUAGE */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 border border-(--bg-border-color)  rounded-lg px-4 py-2 hover:bg-gray-100"
          >
            <Globe size={18} />
            <span>EN</span>
            <ChevronDown size={16} />
          </button>

          {langOpen && (
            <div className="absolute right-0 top-12 app-bg border bg-(--bs-white) border-(--bg-border-color) rounded-(--bs-border-radius-sm)  w-24">
              <p className="px-4 py-2 hover:bg-(--bg-hover)  cursor-pointer">EN</p>
              <p className="px-4 py-2 hover:bg-(--bg-hover) cursor-pointer">HI</p>
            </div>
          )}
        </div>

      </div>

    </header>
    
  );
};

const IconButton = ({ icon }) => (
  <button className="border border-(--bg-border-color) rounded-(--bs-border-radius-sm) p-2 hover:bg-(--bg-hover)">
    {icon}
  </button>
 
);

export default Header;
