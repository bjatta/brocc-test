import Example from "./Example";
import { CounterType } from "./interfaces/CounterType";
import { REPOS } from "./const/repos";

const Body = ({ index = 0 }: CounterType) => (
  <>
    <h1>{REPOS[index]}</h1>
    <Example index={0} />
  </>
);
export default Body;
