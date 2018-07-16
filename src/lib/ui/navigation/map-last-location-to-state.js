export default function mapLastLocationToState(lastLocation, nextLocation) {
  if (typeof nextLocation === 'string') {
    return {
      pathname: nextLocation,
      state: {
        lastLocation,
      },
    };
  }

  return {
    ...nextLocation,
    state: {
      ...nextLocation.state,
      lastLocation,
    },
  };
}
