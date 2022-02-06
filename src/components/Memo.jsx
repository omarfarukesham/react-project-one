import React from "react"
import memesData from "../memesData.js"

export default function Memo() {
    
 const [memeImage , setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        
        setMemeImage(memesArray[randomNumber].url)
    }
    // function getName(){
    //     const getMemeName = memesData.data.memes
    //     setMemeImage(getMemeName.name)
    // }
//    function add(){
//        setValue(preCount => preCount +1)
//    }
//     function sub(){
//         setValue(preCount => preCount - 1)
//     }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
          
               
             
                <button 
                    className="form--button" onClick={getMemeImage}
                   
                >
                    Get a new meme image 🖼
                </button>
               
            </div>
            <div className="img--set">
                 {/* <h2>Count No</h2>
                <button type="button"  onClick={add}>(+)</button>
                <button type="button"  onClick={sub}>(-)</button>
                <h1>{count}</h1>               */}
                <img src={memeImage} width="250px" alt="Dynamic image"  />
                {/* <button type="button" onClick={getName}></button>
                <h1>{memeImage}</h1> */}
                
            </div>
        </main>
    )
}