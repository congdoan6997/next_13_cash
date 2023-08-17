import React from "react";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import { Suspense } from "react";
import Link from "next/link";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back to repositories
      </Link>
      <Suspense fallback={<div>Loading a repository...</div>}>
        <Repo name={name}></Repo>
      </Suspense>
      <Suspense fallback={<div>Loading directions...</div>}>
        <RepoDirs name={name}></RepoDirs>
      </Suspense>
    </div>
  );
};

export default RepoPage;
