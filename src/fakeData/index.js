import breakfastItem from './breakfast'
import dinnerItem from './dinner'
import lunchItem from './lunch'


export const breakfast = breakfastItem
export const lunch = lunchItem
export const dinner = dinnerItem

const fakeData = [...breakfast, ...lunch, ...dinner]

export default fakeData;
