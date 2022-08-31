import {useEffect, useState} from "react";

const timeTypes = ['day','hour', 'min', 'sec'];

function Timer({time}) {

  const [data, setData] = useState({});

  const timer = (time) => {
    if(!time.hour && !time.min && !time.sec)  return;
    let timeBySecond = ((time.hour * 60 || 0) + time.min) * 60 + time.sec;
    const minute = Math.floor(--timeBySecond / 60);
    let DAY = time.day
    let HOUR = Math.floor(minute / 60);
    let MINUTE = minute % 60;
    let SECOND = timeBySecond % 60;

    if(!SECOND && MINUTE){
      --MINUTE;
      SECOND = 59;
      if(!MINUTE && HOUR) {
        --HOUR;
        MINUTE = 59;
        if(!HOUR && DAY) {
          --DAY;
          HOUR = 23;
        }
      }
    }


    setData({
      day: DAY,
      hour: HOUR,
      min: MINUTE,
      sec: SECOND,
    });
    console.log(`${DAY}:${HOUR}:${MINUTE}:${SECOND}`);
  }

  const handleStart = () => {
    setTimeout(() => {
      timer(data, setData)
    }, 1000)
  }

  useEffect(() => {
    const timeData = time.split(':').reduce((acc, item, index) => {
      acc[timeTypes[index]] = +item;
      return acc;
    }, {});
    setData(timeData);
    clearTimeout(timeoutId);

    return () => {
      clearTimeout(timeoutId);
    }
  }, []);

  let timeoutId;
  if(data.sec) {
    timeoutId = setTimeout(() => {
      timer(data, setData)
    }, 1000)
  }


  return (
    <div className='clock'>
      <div className='clockItem'>{data.day}</div>:
      <div className='clockItem'>{`${data.hour < 10 ? 0 : ''}${data.hour}`}</div>:
      <div className='clockItem'>{`${data.min < 10 ? 0 : ''}${data.min}`}</div>:
      <div className='clockItem'>{`${data.sec < 10 ? 0 : ''}${data.sec}`}</div>
    </div>
  )
}

export { Timer };

