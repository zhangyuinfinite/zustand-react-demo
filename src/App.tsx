import { BearBox } from "./components/BearBox";
import { BaseBearBox } from "./components/BaseBearBox";
import { CatBox } from "./components/CatBox";
import { CatBox2 } from "./components/CatBox2";
import { CatController } from './components/CatController'
import {FoodBox } from "./components/FoodBox";
import {BearNames } from "./components/BearNames";
import { PriceCounter } from "./components/PriceBox";
import { ArticleBox } from "./components/ArticleBox";
import { UserBox } from "./components/UserBox";
function App() {
  return (
    <div className="container">
      <h1>Zustand 例子</h1>
      <div>
        {/* 基本使用 */}
        <BaseBearBox />
      </div>
      <br />
      {/* ================================================================================================== */}
      <div>
        {/* 中间件使用 */}
        <CatBox />
      </div>
      <br />
      {/* ================================================================================================== */}

      <div>
        <BearBox />
        <FoodBox />
        <br />
      </div>
      {/* ================================================================================================== */}
      <br />
      <div>
        <BearNames />
        <br />
      </div>

      <div>
        <CatBox2 />
        <CatController />
      </div>
      <div>
        <PriceCounter />
      </div>
      <br />
      {/* ================================================================================================== */}
      {/* subscribe 示例 */}
      <div>
        <ArticleBox />
      </div>
      <br />

      {/* ================================================================================================== */}
      {/* 结合 context 使用 示例 */}
      <div>
        <UserBox />
      </div>

    </div>
  );
}

export default App;
