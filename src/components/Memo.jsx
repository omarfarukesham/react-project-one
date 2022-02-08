import React from "react"
import memesData from "../memesData.js"

export default function Memo() {
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
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
                <img src={meme.randomImage} width="250px" alt="Dynamic image"  />
                {/* <button type="button" onClick={getName}></button>
                <h1>{memeImage}</h1> */}
                
            </div>
        </main>
    )
}