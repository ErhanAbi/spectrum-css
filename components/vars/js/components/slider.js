const darkest = require('../darkest.js');
const staticAliases = require('../staticAliases.js');
const dimensionGlobals = require('../dimensionGlobals.js');
const large = require('../large.js');
const animationGlobals = require('../animationGlobals.js');
exports["handle-outset-border-color"] = darkest["border-color-translucent-dark"];
exports["handle-inset-border-color"] = darkest["border-color-translucent-dark"];
exports["handle-border-color"] = darkest["gray-700"];
exports["handle-color"] = darkest["border-color-transparent"];
exports["track-background-color-gradient-start"] = darkest["blue-400"];
exports["track-background-color-gradient-end"] = darkest["blue-700"];
exports["track-border-color"] = darkest["border-color-translucent-dark"];
exports["handle-outset-border-color-key-focus"] = darkest["border-color-translucent-dark"];
exports["track-color-disabled"] = darkest["gray-200"];
exports["handle-border-color-disabled"] = darkest["gray-400"];
exports["handle-color-disabled"] = darkest["border-color-transparent"];
exports["handle-outset-border-size"] = staticAliases["border-size-thin"];
exports["handle-inset-border-size"] = staticAliases["border-size-thin"];
exports["track-height"] = dimensionGlobals["size-200"];
exports["track-border-size"] = staticAliases["border-size-thin"];
exports["handle-background-color"] = darkest["background-color-transparent"];
exports["track-color"] = darkest["gray-700"];
exports["handle-border-color-hover"] = darkest["gray-800"];
exports["handle-background-color-hover"] = darkest["background-color-transparent"];
exports["track-color-hover"] = darkest["gray-300"];
exports["handle-border-size-down"] = large["size-75"];
exports["handle-border-color-down"] = darkest["gray-800"];
exports["handle-background-color-down"] = darkest["background-color-transparent"];
exports["track-color-down"] = darkest["gray-300"];
exports["radial-reaction-color-down"] = darkest["radial-reaction-color-default"];
exports["handle-border-size-key-focus"] = large["size-100"];
exports["handle-border-color-key-focus"] = darkest["border-color-focus"];
exports["handle-background-color-key-focus"] = darkest["border-color-focus"];
exports["track-color-key-focus"] = darkest["gray-300"];
exports["handle-background-color-disabled"] = darkest["background-color-transparent"];
exports["track-border-radius"] = dimensionGlobals["size-10"];
exports["handle-border-size"] = staticAliases["border-size-thick"];
exports["handle-gap"] = staticAliases["border-size-thicker"];
exports["label-text-alignment"] = "left";
exports["label-min-width"] = large["size-600"];
exports["animation-duration"] = animationGlobals["duration-100"];
exports["animation-ease"] = animationGlobals["ease-in-out"];
exports["handle-width"] = large["size-200"];
exports["handle-height"] = large["size-200"];
exports["handle-border-radius"] = large["border-radius-medium"];
exports["height"] = large["single-line-height"];
exports["min-width"] = large["size-1250"];
exports["label-gap-y"] = "0px";
exports["label-gap-x"] = large["size-200"];
exports["text-baseline"] = large["font-size-75"];
exports["track-cursor-hit-x"] = large["size-100"];
exports["track-cursor-hit-y"] = large["size-200"];
exports["hot-text-cursor-hit-y"] = large["size-100"];
exports["track-touch-hit-x"] = large["size-100"];
exports["track-touch-hit-y"] = dimensionGlobals["size-50"];
exports["handle-touch-hit-x"] = dimensionGlobals["size-175"];
exports["handle-touch-hit-y"] = dimensionGlobals["size-175"];
exports["radial-reaction-size"] = staticAliases["radial-reaction-size-default"];
exports["textfield-min-width"] = large["size-600"];
exports["track-buffer-color"] = darkest["gray-500"];
exports["track-buffer-color-disabled"] = darkest["track-color-default"];
exports["mark-color"] = darkest["track-color-default"];
exports["mark-margin-x"] = "1px";
exports["mark-height"] = "10px";
exports["mark-width"] = staticAliases["border-size-thick"];
exports["mark-border-radius"] = large["border-radius-xsmall"];