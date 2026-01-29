import React from "react";
import { Plus, PlusCircle } from "lucide-react";
import Cards from "../component/Cards";
import { CiCircleList } from "react-icons/ci";

const Deliveryboy = () => {

  const StaffUser = [
    {
      id: 1,
      name: "Raghav Thombre",
      email: "raghav.thombre@gmail.com",
      role: "Deliveryboy",
    },
    {
      id: 2,
      name: "Tanishq Rathore",
      email: "tanishqrathore@gmail.com",
      role: "Deliveryboy",
    },
    {
      id: 3,
      name: "Neeladri Borkar ",
      email: "neeladri.borkar@gmail.com",
      role: "Deliveryboy",
    },
    {
      id: 4,
      name: "Eshanvir D'Souza",
      email:"eshanvir@gmail.com",
       role: "Deliveryboy",
    },
    {
      id: 5,
      name: "Pranit Vardhan",
      email: "pranitvardhan@gmail.com",
      role: "Deliveryboy",
    },
    {
      id: 6,
      name: "Charulata Devnani",
      email: "charulatadevnani@gmail.com",
      role: "Deliveryboy",
    },
    {
      id: 7,
      name: "Zehnaseeb Irani",
      email: "zehnaseebirani@gmail.com",
      role: "Deliveryboy",
    },
    {
      id: 8,
      name: "Aarnik Chauhan",
      email: "aarnikchauhan@gmail.com",
      role: "Deliveryboy",
    },
  ];

  return (
    <div className="min-h-screen app-bg ">
      <div className="max-w-7xl mx-auto">




        <div className="flex items-center justify-between mb-6 ">
                    
                    {/* LEFT SIDE */}
                    <div>
                      <h1 className="text-2xl font-semibold app-text">Delivery Boy</h1>
                      <div className="flex items-center gap-1">
                        
                          <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
                       
                        <span className="text-(--bs-gray-500) text-sm">DeliveryBoy</span>
                      </div>
                    </div>
              <div className="flex gap-2">
                    {/* RIGHT SIDE */}
                    <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert)">
                     <CiCircleList size={22} />
                    </button>
                    <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert)">
                      <Plus size={22} />
                    </button>
                    </div>
              
                  </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {StaffUser.map((user) => (
            <Cards
              key={user.id}
              name={user.name}
              email={user.email}
              role={user.role}
            
            />
          ))}

      
          <div
            className="app-card app-border flex flex-col items-center justify-center p-6 cursor-pointer hover:border-(--bg-border) transition"
           
          >
            <div className="bg-(--primary) p-3 rounded-lg text-(--text-invert) mb-4">
              <Plus size={22} />
            </div>
            <h3 className="text-lg font-bold app-text">Create New DeliveryBoy</h3>
            <p className="app-text-muted text-sm mt-2 text-center">
              Click here to Create New DeliveryBoy
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Deliveryboy;
