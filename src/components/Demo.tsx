import { useState } from "react";
import { Button } from "./ui/button";

export const Demo = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center my-auto min-h-svh">
      <span className="text-2xl">React-Vite-ShadCN UI template</span>
      <div className="mt-4">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
  );
};
