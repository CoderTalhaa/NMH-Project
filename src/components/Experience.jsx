import { OrbitControls } from "@react-three/drei";
import Nvm from "./Nvm";
import Annotation from "./Annotation";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRef } from "react";
import { Perf } from "r3f-perf";

export const Experience = () => {
  const ref1 = useRef(null);

  return (
    <>
      {/* <Perf position="top-left" /> */}
      {/* <OrbitControls /> */}

      <Nvm scale={[0.01, 0.01, 0.01]} position={[-1.35, 0, 1.4]} ref={ref1} />
      <Annotation
        roof={ref1}
        position={[-0.29, 0.13, -0.11]}
        scale={[0.1, 0.1, 0.1]}
        rotation={[0, 1.1, 0]}
      >
        <FaMapMarkerAlt style={{ color: "blue", fontSize: 10 }} />
        FACTORY
      </Annotation>
    </>
  );
};
