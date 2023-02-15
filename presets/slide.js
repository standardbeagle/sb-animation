import anime from "animejs";

export default {
  slideFromLeft: function (selector) {
    anime({
      targets: selector,
      left: ["-50px", "0px"],
      opacity: ["0", "1"],
      autoplay: false,
    });
  },
  slideFromRight: function (selector) {
    anime({
      targets: selector,
      right: ["-50px", "0px"],
      opacity: ["0", "1"],
      autoplay: false,
    });
  },
  slideFromTop: function (selector) {
    anime({
      targets: selector,
      top: ["-50px", "0px"],
      opacity: ["0", "1"],
      autoplay: false,
    });
  },
  slideFromBottom: function (selector) {
    anime({
      targets: selector,
      top: ["-50px", "0px"],
      opacity: ["0", "1"],
      autoplay: false,
    });
  },
};
