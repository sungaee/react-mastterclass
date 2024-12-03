import { useOutletContext, useParams } from 'react-router-dom'

interface IFollowersContext {
  nameOfMyUser: string
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>()
  console.log(nameOfMyUser)
  return <h1>Here are {nameOfMyUser}의 followers</h1>
}
export default Followers
