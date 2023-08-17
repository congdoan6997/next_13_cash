import Link from "next/link";
async function fetchRepoContent(name) {
  const repon = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}/contents`,
    {
      // add time to reset
      next: {
        revalidate: 60,
      },
    }
  );
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return await repon.json();
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContent(name);
  const dirs = contents.filter((content) => content.type === "dir");

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
