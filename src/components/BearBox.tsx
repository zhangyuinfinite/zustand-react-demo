import { useEffect, useMemo, useState } from "react";
import { useBearStore } from "../stores/bearStore";
import { useFoodStore, addOneFish } from "../stores/foodStore";
import { useMealsStore } from "../stores/mealsStore";

import { shallow } from "zustand/shallow";

export const BearBox = () => {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);
  const fish = useFoodStore(state => state.fish);
  const [bgColor, setBgColor] = useState<
    "lightgreen" | "lightpink" | undefined
  >(useFoodStore.getState().fish > 5 ? "lightgreen" : "lightpink");

  useEffect(() => {
    const unsub = useFoodStore.subscribe(
      (state) => state.fish,
      (fish, prevFish) => {
        if (prevFish <= 5 && fish > 5) {
          setBgColor("lightgreen");
        } else if (prevFish > 5 && fish <= 5) {
          setBgColor("lightpink");
        }
      },
      {
        equalityFn: shallow,
        fireImmediately: true,
      }
    );
    return unsub;
  }, []);

  return (
    <div className="box" style={{ backgroundColor: fish > 5 ? "lightgreen" : "lightpink"}}>
      <h1>Bear Box</h1>
      <p>bears: {bears}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increasePopulation}>add bear</button>
        <button onClick={removeAllBears}>remove all bears</button>
        <button onClick={useBearStore.persist.clearStorage}>
          clear storage
        </button>
        <button onClick={() => {
          useMealsStore.setState({papaBear: 'a large pizza' + new Date().getTime()})
        }}>
          order
        </button>
        <button onClick={addOneFish}>
          addOneFish
        </button>
      </div>
    </div>
  );
};
