// import React from 'react'
import style from './Home.module.css'

const Home = () => {
  return (
   <section className={style.section}>
    <div className={style.container}><article className={style.article}>
  <h5 style={{color:'rgb(208, 214, 249)',letterSpacing:'.5rem', lineHeight:'0rem'}}>SO, YOU WANGT TO TRAVEL TO</h5>
  <h1 style={{color:'rgb(255,255,255)',lineHeight:'0rem'}}>SPACE</h1>
  <p style={{color:'rgb(208, 214, 249)',lineClamp:'3',fontWeight:'200'}}>Let’s face it; if you want to go to space, you might
     as well genuinely go to outer space and not hover kind 
     of on the edge of it. Well sit back, and relax because 
     we’ll give you a truly out of this world experience!</p>
</article>
<button className={style.btn}>
 <div> EXPLORE</div>
</button>
</div>

   </section>

  )
}

export default Home
