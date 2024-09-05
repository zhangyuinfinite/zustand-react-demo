import { useMealsStore } from '../stores/mealsStore';
import { useShallow } from 'zustand/react/shallow'
export const BearNames = () => {
  // const names = useMealsStore((state) => Object.keys(state))
  // useShallow可以减少不必要的渲染，当点击Bear Box的order按钮时会修改papaBear的值
  // 如果不使用useShallow，BearNames组件此时会重新渲染
  // 如果使用了useShallow，BeasNames不会此时不会重新渲染
  const names = useMealsStore(useShallow((state) => Object.keys(state)))
  const { mamaBear, littleBear } = useMealsStore(useShallow((state) => ({mamaBear: state.mamaBear, littleBear:state.littleBear})))
  console.log('Bears names：', names);
  return (
    <div className="box">
      <p>{names.join(', ')}</p>
      <p>mamaBear: {mamaBear}， littleBear: {littleBear}</p>
      
    </div>
  )
}