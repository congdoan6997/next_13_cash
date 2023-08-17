"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import LoadingPage from "./loading";
import Courses from "./components/Courses";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <div>
      <h1>Hello to my project</h1>
      <Courses courses={courses}></Courses>
    </div>
  );
};

export default HomePage;
