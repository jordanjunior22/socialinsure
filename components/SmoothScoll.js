// utils/scrollTo.js
const SmoothScroll = (id) => {
    const element = document.getElementById(id);
  
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop,
      });
    }
  };
  
  export default SmoothScroll;
  