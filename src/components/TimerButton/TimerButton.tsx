import React, { useState } from 'react'
import './TimerButton.css'
// type Props = {
//   setTime: Function | any
// }

function TimerButton(props: any) : any {
  const { setTime } = props
  const [inter,setInter]=useState<number>(0)
  const start = () => {
    let inter: any = setInterval(() => {
      setTime((prev: number)=>prev +1)
    }, 1000)
    setInter(inter)
  }
  const stop = () => {
    clearInterval(inter)
  }
  const reset = () => {
    clearInterval(inter)
    setTime(0)
  }


  return (
    <div className="control">
    <button onClick={start}>start</button>
    <button onClick={stop}>stop </button>
    <button onClick={reset}>reset</button>
  </div>
  )
}

export default TimerButton
