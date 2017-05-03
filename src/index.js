import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
debugger;   //sourcemap, prompt debug box in devtools network tab
console.log(`I would pay ${courseValue} for this awesome course!`);
