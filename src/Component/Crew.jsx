// import {useState} from 'react'
import { useEffect, useState } from 'react'
import style from './Crew.module.css'
import crewData from './CrewData'

const Crew = () => {
  const [index, setIndex] = useState(0)
  // useEffect(()=>{
  
  // const intervalId = setInterval(()=>{
  //    const newIndex= index
  //    if(newIndex<3){
  //     setIndex(newIndex+1)}
  //     else{
  //       setIndex(0)
  //     }
  //  },3000)
  //   return ()=>clearInterval(intervalId)
  // })

  
  const crewChangeHandler = (index) =>{
    setIndex(index)
  
  }
  return <section className={style.section}>
    <div className={style.div}>
     <h3 className={style.h3}><span>02</span> MEET YOUR CREW</h3>
     <article className={style.article}>
      <h3 className={style.role}>{crewData[index].role}</h3>
      <h1 className={style.h1}>{crewData[index].name}</h1>
      <p className={style.p}>{crewData[index].about}</p>
      <div className={style.btnContainer}>
        <button onClick={()=>crewChangeHandler(0)} ></button>
        <button onClick={()=>crewChangeHandler(1)}></button>
        <button onClick={()=>crewChangeHandler(2)}></button>
        <button onClick={()=>crewChangeHandler(3)}></button>
      </div>
     </article>
     <img className={style.img} src={crewData[index].image} alt='Crew-members-images'/>
     </div>
    </section>

}

export default Crew
