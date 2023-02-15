import anime from "animejs";
import presets from "./presets";

export function sbAnimation(selector, presetName, params) {
  if (preset) {
    let animation = presets[presetName](selector, params ? params : "");
    isVisible(selector, animation);
  } else if (params) {
    let animation = motion(selector, params);
    isVisible(selector, animation);
  }
}

export function sbAnimationOnHover(selector, preset, params) {
  if (preset) {
    let animation = backgroundSlide[preset](selector, params ? params : "");
    isVisible(selector, animation);
  } else if (params) {
    let animation = motion(selector, params);
    isVisible(selector, animation);
  }
}

export function sbCustomAnimation(selector, params) {
  anime({
    targets: selector,
    ...params,
  });
}

export function sbCustomAnimationOnHover(selector, params) {
  anime({
    targets: selector,
    ...params,
  });
}

export const animationOptions = ["fadeIn", "slideFromLeft", "slideFromRight"];
