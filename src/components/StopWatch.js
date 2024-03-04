import {useState, useRef, useEffect, useCallback} from 'react';

  export default function Timer(){
    let [timer, setTimer] = useState (0)
    let [curTime, setCurTime]= useState(0)
    let [time, setTime] = useState (0)
    let [running, setRunning]= useState(false)

    useEffect (()=>{
      if (running){
      let newTimer = setInterval(()=>{
        setCurTime (prev=>prev+1)}
        ,1000/30)
      setTimer (newTimer)
      return ()=> clearInterval (newTimer)
      }
    },[running]
  )

  let click = useCallback (
    ()=>{
      console.log ("Click "+ running)
      if(running){
        console.log ("clearing time"+ timer)
        setTime(Date.now () - curTime)
        clearInterval (timer)
        setRunning (false)
      }else{
        console.log("starting time")
        setRunning (true)
        setCurTime(Date.now())
        let timer = setInterval(()=>setCurTime(prev=>prev+1),1000/30)
        setTimer (timer)
      }
    }, [running,timer]
  )
 
return <p>{(running) ? (Date.now()-curTime)/1000 : time} <button onClick={click}>
  {running? "Stop" : "Start"}</button></p>
  }

