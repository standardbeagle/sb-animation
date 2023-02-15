import anime from "animejs";

export default {
  backgroundSlideFromLeft: function (selector, params) {
    anime({
      targets: selector,
      background: [
        `linear-gradient(to left, ${params.color1} 100% 0px , ${params.color2} 100%  0px)`,
        `linear-gradient(to left, ${params.color1} 0% 0px , ${params.color2} 0% 0px )`,
      ],
      duration: params.duration,
      loop: true,
      easing: "linear",
    });
  },
  backgroundSlideFromRight: function (selector, params) {
    anime({
      targets: selector,
      right: ["-50px", "0px"],
      opacity: ["0", "1"],
      autoplay: false,
    });
  },
  backgroundSlideFromTop: function (selector, params) {
    anime({
      targets: selector,
      top: ["-50px", "0px"],
      opacity: ["0", "1"],
      autoplay: false,
    });
  },
  backgroundSlideFromBottom: function (selector, params) {
    anime({
      targets: selector,
      top: ["-50px", "0px"],
      opacity: ["0", "1"],
      autoplay: false,
    });
  },
};
