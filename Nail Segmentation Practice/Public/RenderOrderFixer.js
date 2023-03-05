// @input Component.Camera[] cameras

for (var i = 0; i < script.cameras.length; i++) {
    script.cameras[i].renderOrder = -1 - i
}