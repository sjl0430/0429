import { useEffect, useState } from "react";
export default function useEffectCleanUp() {
  const [count, setCount] = useState(1000);
  
  useEffect(() => {
    setInterval(() => console.log(count), count);
  }, [count]);
  const countHandler = (e) => {
    setCount((c) => c + 1000);
  };
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={countHandler}>카운트 증가</button>
    </div>
  );
}
