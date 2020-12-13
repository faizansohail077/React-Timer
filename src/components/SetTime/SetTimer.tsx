function SetTimer(timeInSecond: any): any {
  // let hour: number = Math.floor(timeInSecond / 3600);
  // let mins: number = Math.floor((timeInSecond - hour * 3600) / 60);
  // let sec: number = Math.floor(timeInSecond - hour * 3600 - mins * 60);

  let hour: number = Math.floor(timeInSecond / 3600);
  let mins: number = Math.floor((timeInSecond - (hour * 3600)) / 60);
  let sec: number = Math.floor((timeInSecond - (hour * 3600)) - (mins * 60))

  let hourFormat = hour < 10 ? `0${hour}` : hour;
  let minsFormat = mins < 10 ? `0${mins}` : mins;
  let secFormat = sec < 10 ? `0${sec}` : sec;

  // let newSec = secFormat > 60 ? `${minsFormat}` : minsFormat;
  // let newMin = minsFormat > 60 ? `${hourFormat}` : hourFormat;
  
  // return [hourFormat, newMin, newSec];
  return [hourFormat,minsFormat,secFormat]
}

export default SetTimer;
