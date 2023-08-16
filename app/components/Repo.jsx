import Link from "next/link";
import { FaEye, FaCodeBranch, FaStar } from "react-icons/fa";

async function fetchRepos(name) {
  const repon = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}`
  );
  return await repon.json();
}

const Repo = async ({ name }) => {
  const res = await fetchRepos(name);
  return (
    <>
      <h2>{res.name}</h2>
      <p>{res.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar></FaStar>
          <span>{res.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch></FaCodeBranch>
          <span>{res.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye></FaEye>
          <span>{res.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
