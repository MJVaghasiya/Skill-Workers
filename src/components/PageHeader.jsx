import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <div className="pt-28 pb-14 bg-[#e0e5ec]">
      <div className="max-w-[1600px] mx-auto px-4 text-center">
        <div className="neu-out inline-block rounded-3xl px-10 py-8">
          <h2 className="text-[#2d3748] mb-3">{title}</h2>
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <Link to="/" className="text-[#0B81F7] hover:text-[#0660c4]">
              Home
            </Link>
            <span className="text-[#b8bec7]">/</span>
            <span className="text-[#718096]">{breadcrumb}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
