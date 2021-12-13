import {useQuery} from 'react-query'
import {REPOS} from "./const/repos";
import {CounterType} from "./interfaces/CounterType";

const Example = ({index = 0}: CounterType) => {
    const { isLoading, error , data } = useQuery(`repoData_${index}`, () =>
        fetch(`https://api.github.com/repos/${REPOS[index]}`).then(res =>
            res.json()
        )
    )

    if (isLoading) return <div>'Loading...' </div>;

    if (error) return <div>{`An error has occurred: ${(error as {message: string}).message}`} </div>;
    if (data.message) return <div>{`An issue has occurred: ${data.message}`} </div>;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{' '}
            <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
        </div>
    )
}
export default Example;
