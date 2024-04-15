import { OrbitControls } from "@react-three/drei";
import Nvm  from "./Nvm";
import Annotation from "./Annotation";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRef } from "react";

export const Experience = () => {
  const ref1 = useRef(null);
  return (
    <>
      <OrbitControls />

      <Nvm scale={[0.01, 0.01, 0.01]} position={[0, 0, 2]} ref={ref1} />
      <Annotation
        roof={ref1}
        position={[1.3, 0.09, 0.33]}
        scale={[0.1, 0.1, 0.1]}
        rotation={[0, 1, 0]}
      >
        <FaMapMarkerAlt style={{ color: "blue", fontSize: 10 }} />
        FACTORY
      </Annotation>
    </>
  );
};
