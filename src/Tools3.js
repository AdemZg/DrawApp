import React from 'react'
import "./css/main.css";
import exports from "./icons/export.png";
import saveimg from "./icons/saveimg.png";
import pp from "./icons/pp.png";
import { saveAs } from 'file-saver';
function saveCanvas() {
    const canvas1 = document.getElementById('canvas');
    canvas1.toBlob(function(blob){
        saveAs(blob,'image.png')
    })
  }
const Tools3 = () => {
  return (
    <div>
        <div id="bold">
        <section>
                <img src={saveimg} alt="save" onClick={saveCanvas}/>
            </section> 
            <section>
                <img src={exports} alt="exports" /> 
            </section>    
            <section id="pps">
                <img src={pp} alt="people" /> 
            </section>  
            <div id='pass'>
            <label for="getFile" id='btnn'>Upload Image</label>
            <input type="file" id="getFile" />
            </div>
        </div> 
    </div>
  )
}
export default Tools3