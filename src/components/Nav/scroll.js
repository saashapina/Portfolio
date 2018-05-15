const isSmoothScrollSupported = ((document || {}).documentElement || {}).style
  ? 'scrollBehavior' in document.documentElement.style
  : false;


export const to = (ycoordinate) => {
  if (isSmoothScrollSupported) {
    window.scroll({
      top: ycoordinate,
      left: 0,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo(0, ycoordinate);
  }
};

export const toElement = (element) => {
  if (element) {
    if (isSmoothScrollSupported) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      element.scrollIntoView();
    }
  }
};

export default {
  to,
  toElement
};