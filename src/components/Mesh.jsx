import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Mesh = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas>
        <mesh>
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial color="#DB8B9B" distort={0.5} speed={2} />
          </Sphere>
          <ambientLight intensity={2} />
          <directionalLight position={(1, 2, 3)} />
          {/* <OrbitControls /> */}
        </mesh>
      </Canvas>
    </section>
  );
};

export default Mesh;
