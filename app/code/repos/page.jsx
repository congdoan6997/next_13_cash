import React from "react";

async function fetchRepos() {
  const repon = await fetch("https://api.github.com/users/bradtraversy/repos");
  return await repon.json();
}

const ReposPage = async () => {
  const repon = await fetchRepos();
  console.log(repon);
  return <div>{repon[0].name}</div>;
};

export default ReposPage;
