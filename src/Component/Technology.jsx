import React, { useState } from 'react'
import style from './Technology.module.css'
import data from './TechnologyData.js'

const Technology = ({width}) => {
  const [currentTech, setTech] = useState(data[0])
  const img  = width<970?currentTech.landScapeImage:currentTech.portraitImage
  const techChngHandler=(index)=>{
    setTech(data[index])
  }

  return (
   <section className={style.section}>
 <div className={style.div}>
     <h3 className={style.h3}><span>03</span> SPACE LAUNCH 101</h3>
     <article className={style.article}>
      <div className={style.container}>
      <h5   className={style.h5}>THE TERMINOLOGY...</h5>
      <h1  className={style.h1}>{currentTech.techName}</h1>
      <p   className={style.p}>{currentTech.description}</p>
      </div>
      <div className={style.btnContainer}>
        <button onClick={()=>techChngHandler(0)}>1</button>
        <button onClick={()=>techChngHandler(1)}>2</button>
        <button onClick={()=>techChngHandler(2)}>3</button>
     
      </div>
     </article>
     <img   className={style.img} src={img} alt='Crew-members-images'/>
    
     </div>
   </section>
  )
}

export default Technology
