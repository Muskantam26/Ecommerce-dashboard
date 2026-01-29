import React, { useState } from 'react';
import DataTable from '../component/Datatable';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { Plus, TrashIcon } from 'lucide-react';


const Roles = () => {
  const [expandedRole, setExpandedRole] = useState([]); 

  const rolesData = [
    {
      name: 'Warehouse Manager',
      permissions: [
        'Manage Orders',
        'Show Orders',
        'Delete Orders',
        'Manage Products',
        'Edit Products',
        'Delete Products',
        'Manage Shipping',
        'Manage Shipping Class',
        'Create Shipping Class',
        'Create Product Sub Category',
        'Edit Product Sub Category',
        'Delete Product Sub Category',
        'Create Product Sub Category',
        'Edit Product Sub Category',
        'Delete Product Sub Category',
        'Edit Shipping Class',
        'Delete Shipping Class',
      ],
    },
    {
      name: 'Marketing Manager',
      permissions: [
        'Manage Dashboard',
        'Manage Plan',
        'Manage Plan Request',
        'Manage Product Category',
        'Create Product Category',
        'Edit Product Category',
        'Delete Product Category',
        'Manage Product Sub Category',
        'Create Product Sub Category',
        'Edit Product Sub Category',
        'Delete Product Sub Category',
      ],
    },
     {
      name: 'Marketing Manager',
      permissions: [
        'Manage Dashboard',
        'Manage Plan',
        'Manage Plan Request',
        'Manage Product Category',
        'Create Product Category',
        'Edit Product Category',
        'Delete Product Category',
        'Manage Product Sub Category',
        'Create Product Sub Category',
        'Edit Product Sub Category',
        'Delete Product Sub Category',
      ],
    },
     {
      name: 'Marketing Manager',
      permissions: [
        'Manage Dashboard',
        'Manage Plan',
        'Manage Plan Request',
        'Manage Product Category',
        'Create Product Category',
        'Edit Product Category',
        'Delete Product Category',
        'Manage Product Sub Category',
        'Create Product Sub Category',
        'Edit Product Sub Category',
        'Delete Product Sub Category',
        'Create Product Sub Category',
        'Edit Product Sub Category',
        'Delete Product Sub Category',
        'Create Product Sub Category',
        'Edit Product Sub Category',
        'Delete Product Sub Category',
      ],
    },
  ];

  const columns = [
    {
      label: 'Role',
      key: 'name',
    },
    {
      label: 'Permissions',
      key: 'permissions',
      render: (row) => {
     
        const isExpanded = expandedRole.includes(row.name);

        const visiblePermissions = isExpanded
          ? row.permissions
          : row.permissions.slice(0, 10);

        return (
          <div className="flex flex-wrap gap-2 w-4xl">
            
            {visiblePermissions.map((perm, i) => (
              <span
                key={i}
                className="bg-(--primary) text-(--text-invert) text-sm font-semibold px-3 py-5 rounded-md"
              >
                {perm}
              </span>
            ))}

            {row.permissions.length > 10 && (
              <button
                onClick={() => {
                  setExpandedRole((prev) =>
                    isExpanded
                      ? prev.filter((r) => r !== row.name) 
                      : [...prev, row.name]               
                  );
                }}
                className="text-(--primary) text-xs font-semibold"
              >
                {isExpanded ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>
        );
      },
    },
    {
  label: 'ACTION',
  key: 'action',
  render: (row) => (
    <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
      <button
        onClick={() => console.log('Edit', row)}
        className="p-2 bg-[#d1f3f9] text-(--bs-info) rounded-lg cursor-pointer"
      >
        <PencilSquareIcon className="h-4 w-4" />
      </button>

      <button
        onClick={() => console.log('Delete', row)}
        className="p-2 bg-[#ffd5e0] text-(--bs-red) rounded-lg cursor-pointer"
      >
        <TrashIcon className="h-4 w-4" />
      </button>
    </div>
  ),
},
  ];

  return (
    <div className="p-8 min-h-max">
  <div className="max-w-7xl mx-auto">

   
    <div className="flex items-center justify-between mb-6">
      
      {/* LEFT SIDE */}
      <div>
        <h1 className="text-2xl font-semibold ">Roles</h1>
        <div className="flex items-center gap-1">
         
            <button className="text-sm text-(--primary)">Home &gt;</button>
         
          <span className="text-(--bs-gray-500) text-sm">Roles</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <button className="bg-(--primary) p-3 rounded-lg text-(--text-invert)">
        <Plus size={22} />
      </button>

    </div>

    {/* TABLE */}
    <DataTable
      columns={columns}
      data={rolesData}
      onEdit={(row) => console.log('Edit', row)}
      onDelete={(row) => console.log('Delete', row)}
      onSearch={(value) => console.log('Search:', value)}
    />

  </div>
</div>

  );
};

export default Roles;
