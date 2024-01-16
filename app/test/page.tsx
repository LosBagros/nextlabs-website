import { getContainers } from "@/actions/containers";

const DockerTest = async () => {
  const containers = await getContainers();
  console.log(containers);
  return <div>DockerTest</div>;
};

export default DockerTest;
