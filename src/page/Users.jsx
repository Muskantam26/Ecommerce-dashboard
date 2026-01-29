import React from "react";
import { Plus } from "lucide-react";
import Cards from "../component/Cards";
import { CiCircleList } from "react-icons/ci";

const Users = () => {

  const StaffUser = [
    {
      id: 1,
      name: "Aadrika Sen",
      email: "aadrikasen@gmail.com",
      role: "Manager",
    },
    {
      id: 2,
      name: "Tanishq Rathore",
      email: "tanishqrathore@gmail.com",
      role: "Support Agent",
    },
    {
      id: 3,
      name: "Vihana Kapoor",
      email: "vihanakapoor@gmail.com",
      role: "Support Agent",
    },
    {
      id: 4,
      name: "Eshanvir D'Souza",
      email: "eshanvirdsouza@gmail.com",
      role: "Marketing Manager",
    },
    {
      id: 5,
      name: "Pranit Vardhan",
      email: "pranitvardhan@gmail.com",
      role: "Warehouse Manager",
    },
    {
      id: 6,
      name: "Charulata Devnani",
      email: "charulatadevnani@gmail.com",
      role: "Warehouse Manager",
    },
    {
      id: 7,
      name: "Zehnaseeb Irani",
      email: "zehnaseebirani@gmail.com",
      role: "Warehouse Manager",
    },
    {
      id: 8,
      name: "Aarnik Chauhan",
      email: "aarnikchauhan@gmail.com",
      role: "Support Agent",
    },
  ];

  return (
    <div className="min-h-screen app-bg p-6 ">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-6 ">
             
             {/* LEFT SIDE */}
             <div>
               <h1 className="text-2xl font-semibold app-text">Users</h1>
               <div className="flex items-center gap-1">
                
                   <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
                
                 <span className="text-(--text-muted) text-sm">Users</span>
               </div>
             </div>
       <div className="flex gap-2">
             {/* RIGHT SIDE */}
             <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert) cursor-pointer">
              <CiCircleList size={22} />
             </button>
             <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert) cursor-pointer">
               <Plus size={22} />
             </button>
             </div>
       
           </div>
       
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {StaffUser.map((user) => (
            <Cards
              key={user.id}
              name={user.name}
              email={user.email}
              role={user.role}
            
            />
          ))}

          {/* Create New User Card */}
          <div
            className="bg-(--card-bg) border-(--bg-border-color) flex flex-col items-center justify-center p-6 cursor-pointer hover:border-(--bg-border) transition"
           
          >
            <div className="bg-(--primary) p-3 rounded-lg text-(--text-invert) mb-4 cursor-pointer">
              <Plus size={22} />
            </div>
            <h3 className="text-lg font-bold ">Create New User</h3>
            <p className="app-text-muted text-sm mt-2 text-center">
              Click here to Create New User
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Users;
