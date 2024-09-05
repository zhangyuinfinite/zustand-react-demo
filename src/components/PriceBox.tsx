import { usePriceCount } from "../stores/store";
export function PriceCounter() {
  const price = usePriceCount((state) => state.price)
  const increasePopulation = usePriceCount((state) => state.increasePopulation)
  const removeAllBears = usePriceCount((state) => state.removeAllBears)
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
