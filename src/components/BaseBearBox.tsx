import { useBaseBearStore } from "../stores/baseBearStore";

export const BaseBearBox = () => {
  const bears = useBaseBearStore((state) => state.bears);
  const increasePopulation = useBaseBearStore((state) => state.increasePopulation);
  const removeAllBears = useBaseBearStore((state) => state.removeAllBears);
  const changeSize = useBaseBearStore((state) => state.changeSize);

  // 不建议使用这种方式，因为每次调用都会重新渲染，性能较差
  // const {bears, increasePopulation, removeAllBears, changeSize} = useBaseBearStore();
  // 这种取值方式不会引起重新渲染
  // const size = useBaseBearStore.getState().size;
  
  return (
    <div className="box">
      <h1>最简单的例子：Bear Box</h1>
      <p>bears: {bears}</p>
      <p>{Math.random()}</p>
      {/* <p>size: {size}</p> */}
      <div>
        <button onClick={increasePopulation}>add bear</button>
        <button onClick={removeAllBears}>remove all bears</button>
        <button onClick={() => changeSize(String(new Date().getTime()))}>change size</button>
      </div>
    </div>
  );
};
