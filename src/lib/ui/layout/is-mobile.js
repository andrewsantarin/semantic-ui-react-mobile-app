export const mobileUserAgentRegexp =
  /Android.+Mobile|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

export default function isMobile() {
  return typeof navigator !== 'undefined' &&
    mobileUserAgentRegexp.test(navigator.userAgent);
}
