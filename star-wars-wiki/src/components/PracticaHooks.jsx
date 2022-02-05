import React, {useState, useEffect} from "react";

export default function App(){
    const [mostrar, setMostrar]= useState(true);

    return(
        <div>
            <button onClick={()=> setMostrar(!mostrar)}>dejar de mostrar</button>
            {mostrar?<MouseColor/>: null}
        </div>
    );

}

function MouseColor(){
    const [color,setColor]= useState("orange");

    useEffect(()=> {
        function onMouseMove(evento){
            if(evento.clientX < window.innerWidth / 2){
                setColor('orange');
            }else{
                setColor('blue');
            }
        }

        window.addEventListener('mousemove', onMouseMove);

        return ()=>{
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    

    return <div style={{height: "100vh", background: color}}/>;
}
