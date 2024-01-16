import Docker from 'dockerode';

const docker = new Docker({socketPath: '/var/run/docker.sock'});

export const getContainers = async () => {
  const containers = await docker.listContainers();
  return containers;
};