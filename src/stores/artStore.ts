import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface ArticleState {
  total: number;
  addOneArticles: () => void
};

// 不使用subscribeWithSelector 
// export const useArticleStore = create<ArticleState>()((set) => ({
//   total: 0,
//   addOneArticles: () => {
//     set(state => ({total: state.total + 1}))
//   }
// }));


// 使用subscribeWithSelector 
export const useArticleStore = create<ArticleState>()(
  subscribeWithSelector((set) => ({
    total: 0,
    addOneArticles: () => {
      set(state => ({total: state.total + 1}))
    }
  }))
);
