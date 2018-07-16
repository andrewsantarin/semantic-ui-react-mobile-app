export default function getPathnameSegments(pathname) {
  const pathSegments = pathname
    .split('/')
    .filter(str => str)
    .map(str => `/${str}`);

  return pathSegments;
}
