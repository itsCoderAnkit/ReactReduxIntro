import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'
import { counterActions } from '../store/index';

const Counter = () => {

  const  dispatch = useDispatch()
  const counter = useSelector(state =>state.counter.counter)
  const show = useSelector((state)=>state.counter.showCounter)

  const incrementHandler=()=>{
    //dispatch({type:'increment'})
    dispatch(counterActions.increment())
  }

  const decrementHandler=()=>{
    //dispatch({type:'decrement'})
    dispatch(counterActions.decrement())
  }

  const increaseHandler=()=>{
   // dispatch({type:'increase', value:10})
   dispatch(counterActions.increase(10))
  }

  // const decrementBy5Handler=()=>{
  //   //dispatch({type:'decrementBy5'})
  //   dispatch(counterActions.de)
  // }


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>Increment</button> 
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseHandler}>Increment 5</button> 
      {/* <button onClick={decrementBy5Handler}>Decrement 5 </button> */}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
