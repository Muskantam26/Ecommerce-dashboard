import React from 'react';
import { MoreVertical } from 'lucide-react';

const Cards = ({
  name,
  email,
  avatar,
  role,
  onMenuClick,
  children,
}) => {
  return (
    <div className="border border-(--bg-border-color)  bg-(--card-bg) p-7 flex flex-col items-center rounded-xl  ">

      {/* Header Row */}
      <div className="w-full flex items-center justify-between mb-4 ">
        
        {/* Role Badge */}
        {role ? (
          <span className="bg-(--primary) text-(--text-invert) text-xs font-semibold px-3 py-1 rounded-md">
            {role}
          </span>
        ) : <span />}

        {/* Options Menu */}
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="text-(--text-invert) hover:text-(--hover-text)"
          >
            <MoreVertical size={20} />
          </button>
        )}
      </div>

      {/* Avatar */}
      <div className="w-24 h-24 rounded-full border-4 border-(--bg-border-color) overflow-hidden flex items-center justify-center bg-(--bg-main) mb-4">
        <img
          src={avatar || "https://ecom-demo.workdo.io/storage/uploads/profile/avatar.png"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* User Info */}
      <h3 className="text-(--text-color) text-lg font-bold text-center">
        {name}
      </h3>
      <p className="text(-text-muted) text-sm text-center">
        {email}
      </p>

      {children && <div className="mt-4 w-full">{children}</div>}
    </div>
  );
};

export default Cards;
