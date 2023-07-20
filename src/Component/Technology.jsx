import React, { useState } from 'react'
import style from './Technology.module.css'
import data from './TechnologyData.js'

const Technology = ({width}) => {
  const [currentTech, setTech] = useState(data[0])
  const [isClicked,setClicked] = useState([true,false,false])
  const img  = width<970?currentTech.landScapeImage:currentTech.portraitImage
  const techChngHandler=(index)=>{
    setTech(data[index])
    const newArr =isClicked.map((val,i)=>{
      if(i===index) return true
      else false
    })
    setClicked(newArr)
  }

  return (
   <section className={style.section}>
 <div className={style.div}>
     <h3 className={style.h3}><span>03</span> SPACE LAUNCH 101</h3>
     <article className={style.article}>
      <div key={Math.random()} className={style.container}>
      <h5   className={style.h5}>THE TERMINOLOGY...</h5>
      <h1  className={style.h1}>{currentTech.techName}</h1>
      <p   className={style.p}>{currentTech.description}</p>
      </div>
      <div className={style.btnContainer}>
        <button onClick={()=>techChngHandler(0)} className={isClicked[0]?style.clicked:style.unclicked}>1</button>
        <button onClick={()=>techChngHandler(1)} className={isClicked[1]?style.clicked:style.unclicked}>2</button>
        <button onClick={()=>techChngHandler(2)} className={isClicked[2]?style.clicked:style.unclicked}>3</button>
     
      </div>
     </article>
     <img  key={Math.random()} className={style.img} src={img} alt='Crew-members-images'/>
    
     </div>
   </section>
  )
}

export default Technology
