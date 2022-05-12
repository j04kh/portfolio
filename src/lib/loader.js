import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

export function loadGLTFModel(scene, glbPath) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    const decoderPath = "https://www.gstatic.com/draco/v1/decoders/";

    dracoLoader.setDecoderPath(decoderPath);
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "macbook";
        obj.position.y = 0;
        obj.position.x = 0;
        scene.add(obj);
        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}
