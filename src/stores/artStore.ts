import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface ArticleState {
  total: number;
  type: string;
  addOneArticles: () => void;
  changeType: () => void;
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
    type: "article",
    addOneArticles: () => {
      set(state => ({total: state.total + 1}))
    },
    changeType: () => {
      set(state => ({type: "article" + Math.random()}))
    }
  }))
);
