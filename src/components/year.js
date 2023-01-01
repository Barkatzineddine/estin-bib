
import { useState } from "react";
import './Cp.css'
export default function Year ({data}){

    const [show, setShow] = useState(false);

    

  
 

    

  

    return (
      <>
        
          
           
              <div key={1} id={data.year} className="Cp">
                <span className="title_cp">{data.year}</span>
                <div className="semestres">
                  <div className="semestre_1">
                    <header>Semestre 01</header>
                    <div className="modules">
                      {data.modules_S1.map((module, index) => {
                        return (
                          <div
                            key={index}
                            className={
                              module.active
                                ? "module_container clicked"
                                : "module_container"
                            }
                          >
                            <a href={module.link}>
                            <div className="module">
                              
                              <div className="img_name">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  className="fileImg"
                                  src="/file.svg"
                                />
                                <span className="moduleName">
                                  {module.module_name}
                                </span>
                              </div> 
                            </div>
                            </a>
                            
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="semestre_2">
                    <header>Semestre 02</header>
                    <div className="modules">
                      {data.modules_S2.map((module, index) => {
                        return (
                          <div
                            key={index}
                            className={
                              module.active
                                ? "module_container clicked"
                                : "module_container"
                            }
                          >
                            <a href={module.link}>
                            <div className="module">
                              <div className="img_name">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  className="fileImg"
                                  src="/file.svg"
                                />
                                <span className="moduleName">
                                  {module.module_name}
                                </span>
                              </div>
                            
                            </div>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
{/****************************************************MOBIIIIIIIIIIIILE******************************************************************************* */}
  
               { <div className="semestres_mobile">
                  <header>
                    {!show ? (
                      <img className="left_icon_desactive" src="/left_icon_desactive.svg" loading="lazy" alt="img"/>
                    ) : (
                      <img
                        className="left_icon_active"
                        alt="img"
                        loading="lazy"
                        onClick={() => {
                          setShow(false);
                        }}
                        src="/left_icon_active.svg"
                      />
                    )}
                    {!show? "semestre 01" : "semestre 02"}
                    {!show? (
                      <img
                        className="right_icon_active"
                        alt="icon"
                        src="/right_icon_active.svg"
                        loading="lazy"
                        onClick={() => {
                          setShow(true);
                        }}
                      />
                    ) : (
                      <img src="/right_icon_desactive.svg" className="right_icon_desactive" alt="icon"/>
                    )}
                  </header>
                  <div className="modules">
                    {!show
                      ? data.modules_S1.map((module, index) => {
                          return (
                            <div
                              key={index}
                              className={
                                module.active
                                  ? "module_container clicked"
                                  : "module_container"
                              }
                            >
                              <a href={module.link}>
                              <div className="module">
                                <div className="img_name">
                                  <img
                                    alt="img"
                                    loading="lazy"
                                    className="fileImg"
                                    src="/file.svg"
                                  />
                                  <span className="moduleName">
                                    {module.module_name}
                                  </span>
                                </div>
                               
                              </div>
                              </a>
                            
                            </div>
                          );
                        })
                      : data.modules_S2.map((module, index) => {
                          return (
                            <div
                              key={index}
                              className={
                                module.active
                                  ? "module_container clicked"
                                  : "module_container"
                              }
                            >
                              <a href={module.link}>
                              <div className="module">
                                <div className="img_name">
                                  <img
                                    alt="img"
                                    loading="lazy"
                                    className="fileImg"
                                    src="/file.svg"
                                  />
                                  <span className="moduleName">
                                    {module.module_name}
                                  </span>
                                </div>
                                
                              </div>
                              </a>
                           
                            </div>
                          );
                        })}
                  </div>
                </div>}

          

              </div>
            
          
        
      </>
    );



}