import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js";

import { setupModel } from './setupModel.js';

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync('/assets/models/a1.glb'),
  ]);

  console.log('Squaaawk!', parrotData);

  const parrot = setupModel(parrotData);
  parrot.position.set(0, 0, 0);


  return {
    parrot
  };
}

export { loadBirds };
