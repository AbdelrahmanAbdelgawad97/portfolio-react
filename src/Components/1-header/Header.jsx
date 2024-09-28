import React, { useEffect, useState } from 'react'
import "./Header.css"

const Header = () => {

  const [showModal, setShowModal] = useState(false);

  const [nightMood, setNightMood] = useState(false);

  const changeMood = () => {

    if (nightMood === false ) {

      setNightMood(true);
      document.body.classList.add("light");
      window.localStorage.setItem("mood","light");
      window.localStorage.setItem("sign","icon-sun");
    } else {
      
      setNightMood(false);
      document.body.classList.remove("light");
      window.localStorage.setItem("mood","dark");
      window.localStorage.setItem("sign","icon-moon");
    }
  }

  useEffect(()=>{
    const mood = window.localStorage.getItem("mood")
    let signMood = window.localStorage.getItem("sign")

    if (mood !== null) {
      document.getElementById("changeIcone").className = signMood
      document.body.className = mood;
    } else {
      document.getElementById("changeIcone").className = "icon-moon"
      document.body.className = "dark";
    }

    
  },[nightMood])
  

  return (
    <header className='dflex'>
      <button onClick={()=>setShowModal(true)} className='icon-list2 dflex'/>
      <div/>
      <nav>
        <ul className='dflex'>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

      <button onClick={changeMood} className='mode dflex'>
        <span id="changeIcone" className= {nightMood === true ? "icon-sun":'icon-moon'} ></span>
      </button>

      {showModal && (
            <div className='fixed'>
                <ul className='modal'>
                  <li><button onClick={() => {setShowModal(false)}} className='icon-close'/></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Articles</a></li>
                  <li><a href="">Projects</a></li>
                  <li><a href="">Speaking</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
            </div>)
      }


    </header>
  )
}

export default Header
