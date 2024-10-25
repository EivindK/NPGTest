/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Plane, Sparkles  } from '@react-three/drei'
import InteractButton from '../components/InteractButton'
import Lamppost from '../models/Lamppost'
import { withScorm } from 'react-scorm-provider'

{ /* Putting the button in a scorm API wrapper */}
const ScoButton = withScorm()(InteractButton);

{ /* Main Screen */ }
const Home = () => {

  return (
    <section className='w-full h-screen relative'>
      <Canvas 
        className="w-full h-screen"
        camera={{ near: 0.1, far: 1000, position0:[0,3,0], position:[0,3,-5]}}
        onCreated={({ gl }) => {
          gl.setClearColor("#0b1026");
        }}
        shadows
      >
        <Suspense fallback={null}>

          {/* Environment */}
          <spotLight 
            position={[1,4,0]}
            intensity={30}
            castShadow
          />
          <ambientLight />

          <Stars
          speed={1}
          />

          <Sparkles 
            scale={[8,10,8]}
            size={3}
            opacity={.4}
            color={"yellow"}
          />

          {/* Scene Objects */}

          {/* Test cube */}
          <mesh position={[0,1,0]} rotation-y={Math.PI/8} castShadow={true}
            onClick={(e) => {
              e.stopPropagation();} /* Need to do this to stop clicking buttons through objects */}
          >
            <boxGeometry />
            <meshStandardMaterial color={"white"} />
            <ScoButton 
              position={[0, 0, 0.5]} 
              url={"https://www.google.com/"} /* Popup URL for this button */
            />
          </mesh>

          <Lamppost position={[2,0,0]}/>

          {/* Ground */}
          <Plane args={[100, 100, 1, 1]} rotation-x={Math.PI / -2} position-y="0" receiveShadow={true}>
            <meshStandardMaterial color={"#1c0a3e"} />
          </Plane>

          {/* Scene Operators */}
          <OrbitControls 
            enableZoom={true}
            enablePan={true}
            zoomSpeed={0.80}
            dampingFactor={0.05}  
            minAzimuthAngle={Math.PI / 4}
            makeDefault
            />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home