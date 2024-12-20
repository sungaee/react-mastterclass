import { useParams } from 'react-router-dom'

type RouteParams = Record<string, string | undefined>;

function Coin() {
  const { coinId } = useParams<RouteParams>();
  return <h1>Coin: {coinId}</h1>
}
export default Coin
