import isEqual from 'lodash/isEqual';

import getPathnameSegments from './get-path-segments';

export default function lastLocationIsParent(lastLocationPathname, currentLocationPathname) {
  const lastLocationSegments = getPathnameSegments(lastLocationPathname);
  const currentLocationSegments = getPathnameSegments(currentLocationPathname);
  const currentLocationsParentSegments = currentLocationSegments.slice(0, -1);

  const isLastLocationParent = isEqual(
    lastLocationSegments,
    currentLocationsParentSegments
  );

  return isLastLocationParent;
}
