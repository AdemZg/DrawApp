import React from 'react'
import "./css/main.css";
import undoo from './icons/undoo.png';
import redoo from './icons/redoo.png';

import zoomin from './icons/zoomin.png';
import zoomout from './icons/zoomout.png';
import clear from './icons/delete.png';

const Tools2 = ({undo,redo,handleClear,color,setColor,setTool}) => {
  return (
    <div>
        <div id="peace">
            <section>
                <input type="color" id="cr" value={color} onChange={e => setColor(e.target.value)}></input> 
            </section>
            <section>
                <img src={undoo} alt="undo" onClick={undo}  /> 
            </section>
            <section>
                <img src={redoo} alt="redo" onClick={redo} /> 
            </section>
            <section>
                <img src={zoomin} alt="zoomin" onClick={()=> setTool("eraser")} /> 
            </section>
            <section>
                <img src={zoomout} alt="zoomout" /> 
            </section>
            <section>
                <img src={clear}  alt="clear" onClick={handleClear}   /> 
            </section>
        </div>
    </div>
  )
}
export default Tools2