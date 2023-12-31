import { useState } from 'react'
import style from './Destination.module.css'
import destinationData from './DestinationData'
// const destinationNName=[{destination:'MOON',isClicked:false},{destination:'MARS',isClicked:false},{destination:'EUROPA',isClicked:false},{destination:'TITAN',isClicked:false}]
const Destination = () => {
  const [destination,setData] =useState(destinationData)
  const [currentDestination,setCurrDes] = useState(destinationData[0])

  const onDestiinationChng=(index)=>{

    // const curr=destination[index]
    setCurrDes(destinationData[index])
    const dataArr = destination.map((data,i)=>{
           if(i===index) {data.isClicked=true
            return data
          }
          data.isClicked=false
           return data
    })
    setData(dataArr)
  }
  return (
    <section className={style.section}>
      <h3 className={style.h3}><span>01</span> PICK YOUR DESTINATION</h3>
      <div className={style.container}>
      <img key={Math.random()} className={style.img} src={currentDestination.image} alt={'terrestial-body-img'}/>  
      <article className={style.article}>
        <ul className={style.ul} >
        {destination.map((destination,index)=><li  key={destination.destination} className={destination.isClicked?style.liIsClicked:style.li} onClick={()=>onDestiinationChng(index)} >{destination.destination}</li>)}
        </ul>
        <h1 key={Math.random()} className={style.h1}>{currentDestination.destination}</h1>
        <p key={Math.random()} className={style.p}>{currentDestination.about}</p>
        <hr  key={Math.random()} className={style.hr}/>
        <div key={Math.random()} className={style.specContainer}>
          <h5><span>AVG. DISTANCE</span>{currentDestination.distance}</h5>
          <h5><span>EST. TIME TRAVEL</span>{currentDestination.time}</h5>
        </div>
      </article>
      </div>
        </section>
  )
}

export default Destination
