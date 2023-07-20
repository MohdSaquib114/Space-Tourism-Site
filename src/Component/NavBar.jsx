import {useState} from 'react'
import { Link } from 'react-router-dom'
import style from './NavBar.module.css'
import logo from '../assets/shared/logo.svg'
import hamBurgerBtn from '../assets/shared/icon-hamburger.svg'
import closeBtn from '../assets/shared/icon-close.svg'

const NavBar = ({width}) => {
  const [isClicked,setCLicked] = useState(true)
  const [clickArr,setClickArr] = useState([true,false,false,false])
const hmbrgrBtn = isClicked ?'block':'none'
const sideBar = !isClicked?'0px':'-1000px'
const clickHandler =(index)=>{
  const newArr =clickArr.map((val,i)=>{
    if(i===index) return true
    else false
  })
  setClickArr(newArr)
}


return <nav className={style.nav}>
   <img className={style.logo} src={logo} alt="logo-img" />
 {width>1000 &&  <div className={style.line}></div>}
 
  <ul className={style.ul} style={{right:`${sideBar}`}} onClick={()=>setCLicked(!isClicked)}>
    {width<630 && <img onClick={()=>setCLicked(true)} className={style.closeBtn} src={closeBtn} alt="close-btn-img" />}
      <li onClick={()=>clickHandler(0)} className={clickArr[0]?style.clicked:style.unclicked}>
        <Link className={style.link} to='/'>00 HOME</Link>
      </li>
      <li onClick={()=>clickHandler(1)} className={clickArr[1]?style.clicked:style.unclicked}>
        <Link className={style.link} to='destination'>01 DESTINATION</Link>
      </li>
      <li onClick={()=>clickHandler(2)} className={clickArr[2]?style.clicked:style.unclicked}>
        <Link className={style.link} to='crew' >02 CREW</Link>
      </li>
      <li onClick={()=>clickHandler(3)} className={clickArr[3]?style.clicked:style.unclicked}>
        <Link className={style.link} to='technology' >03 TECHNOLOGY</Link>
      </li>

   </ul>
   
   {width<630 && <img onClick={()=>setCLicked(false)} style={{display:`${hmbrgrBtn}`}} className={style.hamburgerLogo} src={hamBurgerBtn} alt="slide-in-btn-img" />}
  
</nav>
}

export default NavBar

