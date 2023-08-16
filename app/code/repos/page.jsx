import React from "react";
import { FaEye, FaStar, FaCodeBranch } from "react-icons/fa";
import Link from "next/link";

async function fetchRepos() {
  const repon = await fetch("https://api.github.com/users/bradtraversy/repos");
  return await repon.json();
}

const ReposPage = async () => {
  const reps = await fetchRepos();
  return (
    <>
      <h2>Repositories</h2>
      <ul className="repo-list">
        {reps.map((res) => (
          <li key={res.id}>
            <Link href={`/code/repos/${res.name}`}>
              <h3>{res.name}</h3>
              <p>{res.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar></FaStar>
                  {res.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch></FaCodeBranch>
                  {res.forks_count}
                </span>
                <span>
                  <FaEye></FaEye>
                  {res.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReposPage;
