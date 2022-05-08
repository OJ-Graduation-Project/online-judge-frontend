import React, { useEffect, useState } from "react";

interface ICountdown {
    millis: number;
}

const CountDownTimer = ({ millis=0 }: ICountdown) => {


    const [time, setTime] = useState<ICountdown>({millis});
    const [seconds, setSeconds] = useState(Math.floor((time.millis / 1000) % 60));
    const [minutes, setMinutes] = useState(Math.floor(((time.millis / (1000*60)) % 60)));
    const [hours, setHours] = useState(Math.floor(((time.millis / (1000*60*60)) % 24)));
    const [days, setDays] = useState(Math.floor((time.millis / (1000*60*60*24))));

    useEffect(() => {
        const timerId = setInterval(() => {
            time.millis -= 1000;
            if(time.millis<=0){
                window.location.reload();
            }
            setSeconds(Math.floor((time.millis / 1000) % 60));
            setMinutes(Math.floor(((time.millis / (1000*60)) % 60)));
            setHours(Math.floor(((time.millis / (1000*60*60)) % 24)));
            setDays(Math.floor((time.millis / (1000*60*60*24))))
        }, 1000);
        return () => clearInterval(timerId);
    });

    return (

        <div>
            <p>{`
                ${days.toString().padStart(2, '0')}:
                ${hours.toString().padStart(2, '0')}:
                ${minutes.toString().padStart(2, '0')}:
                ${seconds.toString().padStart(2, '0')}`
            }</p>
        </div>
    );
}

export default CountDownTimer;