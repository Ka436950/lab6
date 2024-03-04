
//Map tracking function
export default function MapExcercise({exercise, setMenuScreen}){
    let {name} = exercise
    
    return <div>
      <p>{name}</p>
      <p>Maps will track your progress</p>
      <button onClick= {setMenuScreen}>Back to Menu</button>
    </div>
  }