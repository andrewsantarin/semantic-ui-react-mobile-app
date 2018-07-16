import isEqual from 'lodash/isEqual';

import getPathnameSegments from './get-path-segments';
import lastLocationIsParent from './last-location-is-parent';

export default function lastLocationIsSibling(lastLocationPathname, currentLocationPathname) {
  const isLastLocationParent = lastLocationIsParent(
    lastLocationPathname,
    currentLocationPathname
  );

  const lastLocationSegments = getPathnameSegments(lastLocationPathname);
  const currentLocationSegments = getPathnameSegments(currentLocationPathname);

  const areSegmentsEqualInLength = lastLocationSegments.length === currentLocationSegments.length;
  const areSegmentsAtTopLevel = lastLocationSegments.length === 1 && currentLocationSegments.length === 1;
  const isLastLocationSibling = (isLastLocationParent && areSegmentsEqualInLength) || areSegmentsAtTopLevel;

  return isLastLocationSibling;
}
