import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <div className="pb-14">
      <div className="container text-center">
        <div className="neu-out inline-block rounded-3xl px-10 py-8">
          <h2 className="text-black-100 mb-3">{title}</h2>
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
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
