import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const progressObj = useProgress();

  return (
    <Html>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progressObj.progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
