/* eslint-disable react/prop-types */
import { useGSAP } from "@gsap/react";
import { Html } from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { easing, geometry } from "maath";
import { useRef, useState } from "react";
import { Euler, MathUtils } from "three";

export default function Annotation({ roof, children, ...props }) {
  extend(geometry);

  const { camera } = useThree();
  const top = roof.current;
  const htmlRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);


//   2.28, 0.3 ,0.82


//   const positionInDegrees = {
//     x: 50,
//     y: -36,
//     z: 29
//   };
  useGSAP(() => {
    if (isAnimating) {
      gsap.to(camera.position, {
        x: 2.28,
        y: 0.3,
        z: 0.82,
        duration: 2,
        ease: "linear",
      });
    //!
    //   const rotationInRadians = new Euler(
    //     MathUtils.degToRad(positionInDegrees.x),
    //     MathUtils.degToRad(positionInDegrees.y),
    //     MathUtils.degToRad(positionInDegrees.z),
    //     "XYZ" // Adjust rotation order as needed
    //   );
    //   gsap.to(camera.rotation, {
    //     x: rotationInRadians.x,
    //     y: rotationInRadians.y,
    //     z: rotationInRadians.z,
    //     duration: 4,
    //     ease: "linear",
    //     onUpdate: () => {
    //         camera.rotation.set(camera.rotation.x, camera.rotation.y, camera.rotation.z);
    //       },
    //     onComplete: () => console.log("Rotation animation completed"),
    //   });
    //!

      gsap.to(top.position, {
        y: 2,
        duration: 4,
      });
      gsap.to(htmlRef.current, {
        display: "none",
        duration: 1,
        ease: "linear",
      });
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
