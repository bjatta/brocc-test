import {CounterProps} from "./interfaces/CounterProps";
import {REPOS} from "./const/repos";

const Counter = ({counter, setCounter}: CounterProps) => {
    const decCounter = () => counter > 0 ? setCounter(counter-1) : setCounter(0);
    const incCounter = () => counter < REPOS.length - 1 ? setCounter(counter+1) : setCounter(REPOS.length - 1);
    return (<div>
        <button onClick={decCounter}>&lt;</button>
        {counter}
        <button onClick={incCounter}>&gt;</button>
    </div>);
}
export default Counter;