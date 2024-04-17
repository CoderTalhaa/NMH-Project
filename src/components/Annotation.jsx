/* eslint-disable react/prop-types */
import { useGSAP } from "@gsap/react";
import { Html } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { easing, geometry } from "maath";
import { useEffect, useRef, useState } from "react";
import { useControls } from "leva";

export default function Annotation({ roof, children, ...props }) {
  extend(geometry);

  const { camera } = useThree();
  const top = roof.current;
  const htmlRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  // const [positionX, setpositionX] = useState(camera.position.x);
  // const [positionY, setpositionY] = useState(camera.position.y);
  // const [positionZ, setpositionZ] = useState(camera.position.z);

  // const [rotationX, setRotationX] = useState(camera.rotation.x);
  // const [rotationY, setRotationY] = useState(camera.rotation.y);
  // const [rotationZ, setRotationZ] = useState(camera.rotation.z);

  // useControls("Camera Rotation", {
  //   rotationX: {
  //     value: rotationX,
  //     onChange: setRotationX,
  //     step: 0.1,

  //     min: -5,
  //     max: 5,
  //   },
  //   rotationY: {
  //     value: rotationY,
  //     onChange: setRotationY,
  //     step: 0.1,

  //     min: -5,
  //     max: 5,
  //   },
  //   rotationZ: {
  //     value: rotationZ,
  //     onChange: setRotationZ,
  //     step: 0.1,

  //     min: -5,
  //     max: 5,
  //   },
  //   positionX: {
  //     value: positionX,
  //     onChange: setpositionX,
  //     step: 0.01,
  //     min: -50,
  //     max: 50,
  //   },
  //   positionY: {
  //     value: positionY,
  //     onChange: setpositionY,
  //     step: 0.01,

  //     min: -50,
  //     max: 50,
  //     joystick: "invertY",
  //   },
  //   positionZ: {
  //     value: positionZ,
  //     onChange: setpositionZ,
  //     step: 0.01,

  //     min: -50,
  //     max: 50,
  //   },
  // });

  // useFrame((state, delta) => {
  //   // console.log(camera.position)
  //   // console.log(camera.rotation)
  //   // camera.rotation.set(rotationX, rotationY, rotationZ);
  //   // camera.position.set(positionX, positionY, positionZ);
  // });
  useGSAP(() => {
    if (isAnimating) {
      gsap.to(camera.position, {
        x: 0.4,
        y: 0.2,
        z: -0.39,
        duration: 2,
        ease: "linear",
      });
      //!
      gsap.to(camera.rotation, {
        x: -2.6,
        y: 1,
        z: 2.7,
        duration: 2,
        ease: "linear",
      });
      //!

      gsap.to(top.position, {
        y: 2,
        duration: 2,
      });

      // gsap.to(htmlRef.current, {
      //   display: "none",
      //   duration: 1,
      //   ease: "linear",
      // });
    }

    // setIsAnimating(false);
  }, [isAnimating]);

  const startAnimation = () => {
    setIsAnimating((prev) => !prev);
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
