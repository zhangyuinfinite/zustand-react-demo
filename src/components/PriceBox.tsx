import { usePriceStore } from "../stores/store";
export function PriceCounter() {
  const price = usePriceStore((state) => state.price)
  const increasePopulation = usePriceStore((state) => state.increasePopulation)
  const removeAllBears = usePriceStore((state) => state.removeAllBears)
  return (
    <div className="box">
      <h1>{price} around here...</h1>
      <div>
        <button onClick={increasePopulation}>add</button>
        <button onClick={removeAllBears}>remove</button>
      </div>
    </div>
  );
}
