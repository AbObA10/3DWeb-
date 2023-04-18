import { PerspectiveCamera } from "https://cdn.skypack.dev/three@0.132.2";

function createCamera() {
  const camera = new PerspectiveCamera(20, 10, 1, 100);

  camera.position.set(20, 12, 30);

  return camera;
}

export { createCamera };














