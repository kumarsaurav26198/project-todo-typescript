import "./Profile.css"


interface ProfileProps{
    name: string,
    age?: number | null,
    status?: "coder" | "Single" | "Commited",
    salary?: string,
}

const Profile = ( props:ProfileProps) => {
  return (
      <div className='profile'>
          <h3>Name-{ props.name} </h3>
          <h3>Age-{ props.age } </h3>
          <h3>Status-{props.status }</h3>
          <h3>Salary-{ props.salary }</h3>
          
    </div>
  )
}
 
export default Profile