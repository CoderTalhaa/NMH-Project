import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Experience } from "./Experience";
import CameraLogger from "../helper/Cameralogger";
import { Leva } from "leva";

function Home() {
  return (
    <div className="w-full h-screen fixed ">
      <nav className="w-full p-6 mb-10 shadow flex items-center justify-between font-semibold ">
        <h1 className="text-2xl">NMH</h1>
        <ul className="flex items-start gap-6">
          <li>Home</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <div className=" mx-6 h-[40rem] rounded-2xl overflow-hidden">
        <Canvas shadows camera={{ position: [3.96, 0.64 ,2.08], fov: 30 }}>
          <color attach="background" args={["#87CEEB"]} />
          <CameraLogger event="mousedown" />
          <Environment preset="city" />
          <Suspense fallback={null}>
          <Experience />
          </Suspense>
          {/* <axesHelper /> */}
        </Canvas>
          {/* <Leva /> */}
      </div>
    </div>
  );
}

export default Home;
