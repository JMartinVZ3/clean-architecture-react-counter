import { useDispatch, useSelector } from "react-redux";
import { CounterStorageService } from "../application/ports";

import {
  Increment,
  Decrement
} from "../counter"


export function useCounterStorage(): CounterStorageService {
  const dispatch = useDispatch()


  return {
    counter:  useSelector((state : any) => state.counter.data),
    
    increment: () => { 
      dispatch(Increment());
    },
    decrement: () => {
      dispatch(Decrement());
    },
  }
}