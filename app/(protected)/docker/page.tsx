import { getContainers } from "@/actions/docker";

const DockerTest = () => {
  const containers = getContainers();
  return <div>{JSON.stringify(containers)};</div>;
};

export default DockerTest;
