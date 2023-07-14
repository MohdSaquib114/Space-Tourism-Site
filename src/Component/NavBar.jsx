import {useState} from 'react'
import { Link } from 'react-router-dom'
import style from './NavBar.module.css'
import logo from '../assets/shared/logo.svg'
import hamBurgerBtn from '../assets/shared/icon-hamburger.svg'
import closeBtn from '../assets/shared/icon-close.svg'

const NavBar = ({width}) => {
  const [isClicked,setCLicked] = useState(true)
const hmbrgrBtn = isClicked ?'block':'none'
const sideBar = !isClicked?'0px':'-1000px'
return <nav className={style.nav}>
   <img className={style.logo} src={logo} alt="logo-img" />
 {width>1000 &&  <div className={style.line}></div>}
  <ul className={style.ul} style={{right:`${sideBar}`}} onClick={()=>setCLicked(!isClicked)}>
    {width<630 && <img onClick={()=>setCLicked(true)} className={style.closeBtn} src={closeBtn} alt="close-btn-img" />}
      <li>
        <Link className={style.link} to='/'>00 HOME</Link>
      </li>
      <li>
        <Link className={style.link} to='destination'>01 DESTINATION</Link>
      </li>
      <li>
        <Link className={style.link} to='crew' >02 CREW</Link>
      </li>
      <li>
        <Link className={style.link} to='technology' >03 TECHNOLOGY</Link>
      </li>

   </ul>
   {width<630 && <img onClick={()=>setCLicked(false)} style={{display:`${hmbrgrBtn}`}} className={style.hamburgerLogo} src={hamBurgerBtn} alt="slide-in-btn-img" />}
  
</nav>
}

export default NavBar

