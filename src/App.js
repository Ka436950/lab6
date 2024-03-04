
import './App.css';
import {useCallback, useState} from 'react'
import Stopwatch from './components/StopWatch';
import MapExcercise from './components/mapExercise';

//Constants that store the name of the pages, it is easier to control them this way than to input the names manually as strings
const MENU_SCREEN = "menu"
const EXERCISE_SCREEN = "exercises"
//Constants to cont the array
const DURATION_EXERCISE = "duration"
const REPETITION_EXERCISE = "repetition"
const MAPS_EXERCISE = "mapexercise"

//stopwatch function
function DurationExercise({exercise, setMenuScreen }){
  let {name} = exercise
  return <div>
    <p>{name}</p>
    <Stopwatch/>
    <button onClick= {setMenuScreen}>Back to Menu</button>
  </div>
}

//repetition function
function RepetitionExcercise({exercise, setMenuScreen}){
  let {name} = exercise
  let [count, setCount] = useState (0)
  return <div>
    <p>{name}</p>
    <p>{count}</p>
    <button onClick={()=> setCount(count=>count+1)}>increment</button>
    <button onClick={()=> setCount(0)}>Reset</button><br/>
    <button onClick= {setMenuScreen}>Back to Menu</button>
  </div>
}



let exerciseList = [
  {type: DURATION_EXERCISE, name:"Running"},
  {type: DURATION_EXERCISE, name:"Rowing"},
  {type: DURATION_EXERCISE, name:"Swiming"},
  {type: REPETITION_EXERCISE, name:"Push Ups"},
  {type: MAPS_EXERCISE, name: "track my progress"}
]

function App() {
  
  let [currentScreen, setCurrentScreen] = useState(MENU_SCREEN) //sets the state of the screen
  let [currentExercise, setCurrentExercise] = useState({})
  let screenComponent = undefined
  let buttonClick = useCallback((exercise) => {
    setCurrentExercise (exercise)
    setCurrentScreen (EXERCISE_SCREEN)
  }
  )

  //if conidtional to control when the state changes and whatit deisplays
  if (currentScreen === MENU_SCREEN){
    screenComponent = <div>
    <p>Exercise Menu</p>
    <ul>
      {exerciseList.map ((exercise)=>{
        return <li key={exercise.name}>
          <button onClick={() => buttonClick(exercise)}>{exercise.name}</button>
          </li>
        })}
    </ul>
    </div>
  }else if (currentScreen === EXERCISE_SCREEN){
    switch(currentExercise.type){
        case DURATION_EXERCISE:
          screenComponent = <DurationExercise
          exercise={currentExercise}
          setMenuScreen={()=>setCurrentScreen (MENU_SCREEN)}
        />
      break;
        case REPETITION_EXERCISE:
          screenComponent = <RepetitionExcercise
          exercise = {currentExercise}
          setMenuScreen={()=>setCurrentScreen (MENU_SCREEN)}
          />
      break;
      case MAPS_EXERCISE:
          screenComponent = <MapExcercise
          exercise = {currentExercise}
          setMenuScreen={()=>setCurrentScreen (MENU_SCREEN)}
          />
      break;
      default:
        screenComponent = undefined
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        {screenComponent}
      </header>
    </div>
  );
}

export default App;
