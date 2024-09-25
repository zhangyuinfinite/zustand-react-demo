import { useArticleStore } from "../stores/artStore";
import {useState, useEffect} from 'react';
export const ArticleNumber = () => {
  const total = useArticleStore((state) => state.total);
  const addOneArticles = useArticleStore((state) => state.addOneArticles);
  const changeType = useArticleStore((state) => state.changeType);
  return (
    <div className="box">
      <p>文章数量: {total}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={addOneArticles}>add Article</button>
        <button onClick={changeType}>change Type</button>

      </div>
    </div>
  );
};

export const ArticleBox = () => {
  // --- 不使用 subscribe 每次total更新都会重新渲染ArticleBox---
  // const total = useArticleStore((state) => state.total);

  // return (
  //   <div className="box" style={{backgroundColor: total > 7 ? "lightgreen" : "lightpink"}}>
  //     <h1>Article Box</h1>
  //     <p>{Math.random()}</p>
  //     {total > 7 ? '文章太多了': '文章太少了'}
  //     <ArticleNumber />
  //   </div>
  // );
  // --- 不使用 subscribe ---

  // --- 使用 subscribe  只有当 total 从7变到8或者从8变到7，才会重新渲染ArticleBox---

  // const [bgColor, setBgColor] = useState<
  //   "lightgreen" | "lightpink" | undefined
  // >(useArticleStore.getState().total > 7 ? "lightgreen" : "lightpink");
  // useEffect(() => {
  //   const unsub = useArticleStore.subscribe(
  //     (state, oldState) => {
  //       console.log('状态变化：', state);
  //       if (state.total > 7 && oldState.total <= 7) {
  //         setBgColor("lightgreen");
  //       } else if (oldState.total > 7 && state.total <= 7) {
  //         setBgColor("lightpink");
  //       }
  //     },
  //   );
  //   return unsub;
  // }, []);
  // return (
  //   <div className="box" style={{backgroundColor: bgColor}}>
  //     <h1>Article Box</h1>
  //     <p>{Math.random()}</p>
  //     {bgColor === 'lightgreen' ? '文章太多了': '文章太少了'}
  //     <ArticleNumber />
  //   </div>
  // );
  // --- 使用 subscribe  ---

  // 使用subscribe监听的是所有状态，如果想监听指定状态，需要在store中使用 subscribeWithSelector 中间件
  // -- subscribeWithSelector中间件后 -- 
  const [bgColor, setBgColor] = useState<
    "lightgreen" | "lightpink" | undefined
  >(useArticleStore.getState().total > 7 ? "lightgreen" : "lightpink");
  useEffect(() => {
    const unsub = useArticleStore.subscribe(
      state => state.total,
      (total, oldTotal) => {
        console.log('状态变化:', total, oldTotal, '---')
        if (total > 7 && oldTotal <= 7) {
          setBgColor("lightgreen");
        } else if (oldTotal > 7 && total <= 7) {
          setBgColor("lightpink");
        }
      },
      // 可以指定对比函数和是否立即执行
      // {
      //   equalityFn: shallow,
      //   fireImmediately: true,
      // }
    );
    return unsub;
  }, []);
  return (
    <div className="box" style={{backgroundColor: bgColor}}>
      <h1>Article Box</h1>
      <p>{Math.random()}</p>
      {bgColor === 'lightgreen' ? '文章太多了': '文章太少了'}
      <ArticleNumber />
    </div>
  );
  // -- subscribeWithSelector中间件后 -- 
};
