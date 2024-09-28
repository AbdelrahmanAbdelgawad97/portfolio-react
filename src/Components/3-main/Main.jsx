import React, { useState } from 'react'
import "./main.css"
import {myProjects} from './data'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Main = () => {
  const [currentActive, setcurrentActive] = useState('allProject');
  const [arr, setArr] = useState(myProjects);

  
  const handleClick = (activeWord, cat) => {
    setcurrentActive(activeWord);
    if (cat === 'all') {
      setArr(myProjects)
    } else {
    // const projects = myProjects.filter(item=>{return item.category === cat})

    const projects = myProjects.filter(item => {
      let valueOfCat = item.category.find((innerItem, index) => {
        return  innerItem === cat
      });
      return valueOfCat 
    });
    setArr(projects);
  }
}
  
  return (
    <main className='dflex'>
      <section className='left-section dflex'>

        <button onClick={()=>handleClick('allProject','all')} className={currentActive ===  'allProject'? 'active':null}>all Projects</button>
        <button onClick={()=>handleClick('htmlCss','HtmlCss')} className={currentActive === 'htmlCss'? 'active':null}>hTML & cSS</button>
        <button onClick={()=>handleClick('bootstrap','bootstrap')} className={currentActive === 'bootstrap'? 'active':null}>bootstrap</button>
        <button onClick={()=>handleClick('javaScript','javaScript')} className={currentActive === 'javaScript'? 'active':null}>javaScript</button>
        <button onClick={()=>handleClick('react JS','react')} className={currentActive === 'react JS'? 'active':null}>react JS</button>
      </section>

      <section className='right-section dflex'>

        {arr.map(item=>{
          return (
          <motion.article 
            layout
            initial={{transform: "scale(0)"}}
            animate={{transform: "scale(1)"}}
            transition={{type: "spring", damping: 8, stiffness: 100}}
            key={item.id} className='card'>
            <video style={{borderRadius: "6px"}} width={266} height={150} controls src={item.video} />
            {/* <img style={{borderRadius: "6px"}} width={266} src={item.imgPath} alt=""/> */}

            <div style={{width: "266px"}} className="box">
              <h1 className="title">{item.projectTitle}</h1>
              <p className='sub-title'>{item.description}</p>

              <div className="dflex icones">
                
                <div className='dflex'>
                  <div  className="icon-link"></div>
                  <a href={item.link} target='_blank' className="icon-github"></a>
                </div>

                <a  href='' className='dflex'>More <span className="icon-arrow_forward"/></a>
              </div>
            </div>
          </motion.article>

          )
        })}

      </section>
    </main>
  )
}

export default Main
