export const get = async (url) => {
  const headers = new Headers();

  headers.set('Authorization', `Basic ${btoa('simplyrets:simplyrets')}`);

  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};
