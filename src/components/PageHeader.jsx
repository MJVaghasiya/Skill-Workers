import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <div className="pb-6 sm:pb-10 lg:pb-12">
      <div className="container text-center">
        <div className="neu-out inline-block rounded-2xl sm:rounded-3xl px-5 py-5 sm:px-10 sm:py-7 max-w-full">
          <h2 className="text-black-100 mb-2 sm:mb-3">{title}</h2>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium flex-wrap">
            <Link to="/" className="text-primary underline-anim p2">
              Home
            </Link>
            <span className="text-slate-100 p2">/</span>
            <span className="text-slate-100 p2">{breadcrumb}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
