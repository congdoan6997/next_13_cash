"use client";

import React from "react";
import { useState } from "react";

const CourseSearch = ({ getSearchCourses }) => {
  const [search, setSearch] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/courses/search?query=${search}`);
    const filteredcourses = await res.json();
    getSearchCourses(filteredcourses);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          placeholder="Search Courses..."
          type="text"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default CourseSearch;
