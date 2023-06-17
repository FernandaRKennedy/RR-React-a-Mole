import { useEffect, useState } from "react";
import moleImg from './mole.png'

const Mole = (props) =>{

    useEffect(() =>{
        const randSeconds = Math.ceil(Math.random() * 10000)
        const timer = setTimeout(() => {
            props.toggle(false)
        },randSeconds)
        return () => clearTimeout(timer)
    })
    return(
        <div>
            <img style={{'width': '30vw'}}  src={moleImg} onClick={props.handleClick} />
        </div>
    )
}

export default Mole