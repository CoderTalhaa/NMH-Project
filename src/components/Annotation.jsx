/* eslint-disable react/prop-types */
import { useGSAP } from "@gsap/react";
import { Html } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { easing, geometry } from "maath";
import { useEffect, useRef, useState } from "react";
import { Euler, MathUtils } from "three";
import { useControls } from 'leva';

export default function Annotation({ roof, children, ...props }) {
  extend(geometry);

  const { camera } = useThree();
  const top = roof.current;
  const htmlRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  // const [rotationX, setRotationX] = useState(camera.rotation.x);
  // const [rotationY, setRotationY] = useState(camera.rotation.y);
  // const [rotationZ, setRotationZ] = useState(camera.rotation.z);

  // useControls('Camera Rotation', {
  //   rotationX: { value: rotationX, onChange: setRotationX, min: -Math.PI*2, max: Math.PI*2 },
  //   rotationY: { value: rotationY, onChange: setRotationY, min: -Math.PI*2, max: Math.PI*2 },
  //   rotationZ: { value: rotationZ, onChange: setRotationZ, min: -Math.PI*2, max: Math.PI*2 },
  // });

  // useEffect(() => {
  //   camera.rotation.set(rotationX, rotationY, rotationZ);
  // }, [rotationX, rotationY, rotationZ]);

  


  useFrame((state,delta)=>{
    // console.log(camera.position)
    // console.log(camera.rotation)
    // camera.rotation.set(rotationX, rotationY, rotationZ);

  })
//   2.28, 0.3 ,0.82

  useGSAP(() => {
    if (isAnimating) {
      gsap.to(camera.position, {
        x: 2.16,
        y: 0.26,
        z: 0.30,
        duration: 2,
        ease: "linear",
      });
    //!
      gsap.to(camera.rotation, {
        x: -0.72,
        y: 1.3,
        z: 0.70,
        duration: 2,
        ease: "linear",
        
      })
    //!

      gsap.to(top.position, {
        y: 2,
        duration: 4,
      });
      // gsap.to(htmlRef.current, {
      //   display: "none",
      //   duration: 1,
      //   ease: "linear",
      // });
    }
    setIsAnimating(false);
  }, [isAnimating]);
  const startAnimation = () => {
    setIsAnimating(true);
  };

  return (
    <>
      <Html
        {...props}
        ref={htmlRef}
        transform
        // occlude="blending"
        geometry={<roundedPlaneGeometry args={[1.66, 0.47, 0.24]} />}
      >
        <div className="annotation" onClick={startAnimation}>
          {children}
        </div>
      </Html>
    </>
  );
}
