function SetTimer(timeInSecond:any): any  {
  let hour:number = Math.floor(timeInSecond / 3600);
  let mins: number = Math.floor((timeInSecond - hour * 3600) / 60);
  let sec: number = Math.floor(timeInSecond - hour * 3600 - mins * 60);

  let hourFormat = hour < 10 ? `0${hour}` : hour
  let minsFormat = mins < 10 ? `0${hour}` : mins
  let secFormat = sec < 10 ? `0${hour}` : sec
  
  return (
    
    [hourFormat,minsFormat,secFormat]
    
)
}

export default SetTimer;
