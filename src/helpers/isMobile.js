import UAParser from 'ua-parser-js';

export const isMobile = () => {
  const userAgent = navigator.userAgent;

  const parser = new UAParser(userAgent);
  const deviceType = parser.getDevice().type;

  let mobile = false;

  if (deviceType === 'mobile') {
    mobile = true;
  } else {
    mobile = false;
  }
  return mobile;
};
