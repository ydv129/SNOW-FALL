import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './style.css';
import Scene from './Scene';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

const App = () => {

  return (
    <>
    <Canvas camera={{fov:45}}>
      <OrbitControls/>
      <ambientLight />
      <Scene/>
       <EffectComposer>
                <Bloom
                  mipmapBlur
                  intensity={200.5}
                  luminanceThreshold={0.36}
                  luminanceSmoothing={0.2}
                />
                <ToneMapping adaptive />
         </EffectComposer>
    </Canvas>
    </>
  );
};

export default App;