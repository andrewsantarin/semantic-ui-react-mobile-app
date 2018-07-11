import React from 'react';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';
import { spring, AnimatedSwitch } from 'react-router-transition';

import Booking, { PATH as BOOKING_PATH } from './pages/Booking';
import Chat, { PATH as CHAT_PATH } from './pages/Chat';
import Orders, { PATH as ORDERS_PATH } from './pages/Orders';
import Pricing, { PATH as PRICING_PATH } from './pages/Pricing';
import Profile, { PATH as PROFILE_PATH } from './pages/Profile';

import { withAppPage } from './AppPage';

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `translateX(${styles.offset}%)`,
    width: '100%',
    height: '100%',
    position: 'absolute',
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 24,
  });
}

/*
function slide(val) {
  return spring(val, {
    stiffness: 125,
    damping: 16,
  });
}
*/


// child matches will...
const bounceTransition = {
  atEnter: {
    opacity: 0,
    offset: 100,
  },
  atLeave: {
    opacity: bounce(0.25),
    offset: glide(-25),
  },
  atActive: {
    opacity: bounce(1),
    offset: glide(0),
  },
};

export const PATH_MAP = {
  [BOOKING_PATH]: {
    component: withAppPage({ baseUrl: '/' })(Booking),
  },
  [CHAT_PATH]: {
    component: withAppPage({ baseUrl: '/' })(Chat),
  },
  [ORDERS_PATH]: {
    component: withAppPage({ baseUrl: '/' })(Orders),
  },
  [PRICING_PATH]: {
    component: withAppPage({ baseUrl: '/' })(Pricing),
  },
  [PROFILE_PATH]: {
    component: withAppPage({ baseUrl: '/' })(Profile),
  },
};

export const DEFAULT_PROPS = {
  pathMap: PATH_MAP,
};

export default function AnimatedSwitchDemo(props) {
  const { 
    pathMap
  } = props;

  return (
    <AnimatedSwitch
      atEnter={bounceTransition.atEnter}
      atLeave={bounceTransition.atLeave}
      atActive={bounceTransition.atActive}
      mapStyles={mapStyles}
      className="route-wrapper"
    >
      {Object.keys(pathMap).map((key) => (
        <Route
          {...{key}}
          path={key}
          {...pathMap[key]}
        />
      ))}
    </AnimatedSwitch>
  );
}

AnimatedSwitchDemo.defaultProps = DEFAULT_PROPS;
