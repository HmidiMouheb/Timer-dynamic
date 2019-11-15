import React from 'react'
import './Timer.css'

export default function Timer(props) {
    let x= Math.floor(props.MilliSeconds / (36*Math.pow(10,5)));
    let y= props.MilliSeconds - (x*(36*Math.pow(10,5)));
    let a= Math.floor(y / (6*Math.pow(10,4))) 
    let z= y-(a*6*(Math.pow(10,4)))
    return (
        <div>
            <p>
            {x}:
            {a}:
            {Math.floor(z / (Math.pow(10,3)))}
            </p>
            <div className="units">
                <p className="unit">Hours</p>
                <p className="unit">Minutes</p>
                <p className="unit">Seconds</p>
            </div>
        </div>
    )
}
