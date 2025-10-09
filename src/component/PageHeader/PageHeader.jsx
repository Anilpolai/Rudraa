import React from "react";
import "./PageHeader.css";
import { FaHome } from "react-icons/fa";

export default function PageHeader({ title, breadcrumb }) {
  return (
    <section className="page-header">
      <div className="overlay"></div>
      <div className="content text-center">
        <h1 className="page-title">{title}</h1>
        <p className="breadcrumb ">
          <a href="/"><FaHome />Home</a> &nbsp;›&nbsp; <span>{breadcrumb}</span>
        </p>
      </div>
    </section>
  );
}
