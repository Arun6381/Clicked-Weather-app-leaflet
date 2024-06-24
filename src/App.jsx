import { useState } from "react";
import Maps from "./mapss"; // Adjust the import path as needed
import ApiWeather from "./apiWeather"; // Adjust the import path as needed

export default function App() {
  const initialPosition = [10.788876063167736, 77.26860133465381];
  const [position, setPosition] = useState(initialPosition);

  return (
    <div className="flex flex-col">
      <div className="w-full h-[80vh]">
        <Maps
          initialPosition={initialPosition}
          position={position}
          setPosition={setPosition}
        />
      </div>
      <div className="w-full h-[20vh] ">
        <ApiWeather position={position} />
      </div>
    </div>
  );
}
