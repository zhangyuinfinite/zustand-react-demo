import { priceCountStore } from '../stores/store'
export const formatPrice = () => {
    const { getState, setState } = priceCountStore;
    const price = getState().price;
    console.log('价格：', price)
    setTimeout(() => {
        console.log(`现在价格是${price}修改价格为100`)
        setState({ price: 100 })
    }, 3000);
}