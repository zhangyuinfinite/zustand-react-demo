import { useMealsStore } from '../stores/mealsStore';
import { useShallow } from 'zustand/react/shallow'
export const BearNames = () => {
  // useShallow可以减少不必要的渲染，当点击Bear Box的order按钮时会修改papaBear的值
  // 如果使用了useShallow，BeasNames不会此时不会重新渲染
  const names = useMealsStore(useShallow((state) => Object.keys(state)))
  const { mamaBear, littleBear } = useMealsStore(useShallow((state) => ({mamaBear: state.mamaBear, littleBear:state.littleBear})))

  // 如果不使用useShallow，BearNames组件此时会重新渲染
  // const names = useMealsStore((state) => Object.keys(state))
  // const { mamaBear, littleBear } = useMealsStore((state) => ({mamaBear: state.mamaBear, littleBear:state.littleBear}))


  console.log('Bears names：', names);
  return (
    <div className="box">
      <h1>useShallow例子：小熊一家</h1>
      <p>家庭成员：{names.join(', ')}</p>
      <p>mamaBear is {mamaBear}</p>
      <p>littleBear is {littleBear}</p>
      <p>{Math.random()}</p>
    </div>
  )
}