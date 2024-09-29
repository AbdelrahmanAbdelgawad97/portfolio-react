import React from 'react'
import './Progress.css'
const Progress = () => {

  return (
    <div>
        <div className="skills-container" id="skills">
                <div className="skills ">
                    
                    <div className="parent">
                        
                        <div className="bar-chart">
                            <div className="content">
                                <h3 className="m-40">HTML</h3>
                                <div className="skill">
                                    <span style={{width: '90%'}}  data-skill="90%"></span>
                                </div>
                            </div>
        
                            <div className="content">
                                <h3 className="m-40">CSS</h3>
                                <div className="skill">
                                    <span style={{width: '80%'}}  data-skill="80%"></span>
                                </div>
                            </div>
        
                            <div className="content">
                                <h3 className="m-40">JavaScript (ES6)</h3>
                                <div className="skill">
                                    <span style={{width: '70%'}}  data-skill="70%"></span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bar-chart">
                            <div className="content">
                                <h3 className="m-40">BootStrap</h3>
                                <div className="skill">
                                    <span style={{width: '95%'}}  data-skill="95%"></span>
                                </div>
                            </div>
        
                            <div className="content">
                                <h3 className="m-40">Github</h3>
                                <div className="skill">
                                    <span style={{width: '79%'}}  data-skill="79%"></span>
                                </div>
                            </div>
        
                            <div className="content">
                                <h3 className="m-40">React</h3>
                                <div className="skill">
                                    <span style={{width: '85%'}} data-skill="85%"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Progress
