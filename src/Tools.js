import React from 'react'
import "./css/main.css"
import pencil from './icons/pencil.png';
import marker from './icons/marker.png';
import text from './icons/text.png';
import cursor from './icons/cursor.png';
import line from './icons/line.png';
import rectangle from './icons/rectangle.png';
import move from './icons/move.png';




const Tools = ({setTool,action,handleBlur,selectedElement,textAreaRef}) => {
  
  return (
    <div>
    <main>
    <section>
        <img src={cursor} alt="cursor" onClick={()=> setTool("selection")} /> 
    </section>
    <section>
        <img src={pencil} alt="pencil" onClick={()=> setTool("pencil")}/> 
    </section>
    <section>
        <img src={marker} alt="marker" onClick={()=> setTool("marker")}/> 
    </section>
    <section>
        <img src={line} alt="line" onClick={()=> setTool("line")}/> 
    </section>
    <section>
        <img src={rectangle} alt="rectangle" onClick={()=> setTool("rectangle")}/> 
    </section>
    <section >
      <img src={text}  alt="text" onClick={()=> setTool("text")}/>
      {action === "writing" ? (
        <textarea
            ref={textAreaRef}
            onBlur={handleBlur}
            style={{
            position: "fixed",
            top: selectedElement.y1 - 2,
            left: selectedElement.x1,
            font: "24px sans-serif",
            margin: 0,
            padding: 0,
            border: 0,
            outline: 0,
            resize: "auto",
            overflow: "hidden",
            whiteSpace: "pre",
            background: "transparent",
          }}
        />
      ) : null}
    </section>
    <section>
        <img src={move} alt="move" onClick={()=> setTool("selection")}/> 
    </section>
  </main>
    </div>
  )
}
export default Tools