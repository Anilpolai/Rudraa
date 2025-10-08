import React from "react";
import "./PageHeader.css";

export default function PageHeader({ title, breadcrumb }) {
  return (
    <section className="page-header">
      <div className="overlay"></div>
      <div className="content text-center">
        <h1 className="page-title">{title}</h1>
        <p className="breadcrumb">
          <a href="/">Home</a> &nbsp;›&nbsp; <span>{breadcrumb}</span>
        </p>
      </div>
    </section>
  );
}
