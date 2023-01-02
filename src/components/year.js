<<<<<<< HEAD

import { useState } from "react";
import './Cp.css'
export default function Year ({data,nosem2}){

    const [show, setShow] = useState(false);

    

  
 

    

  

    return (
      <>
        
          
           
              <div key={1} id={data.year.year} className="Cp">
              <a href={data.year.link}> <span className="title_cp">{data.year.year}</span></a>
                <div className="semestres">
                  <div className="semestre_1">
                   <a href={data.modules_S1.link}><header>Semestre 01</header></a> 
                    <div className="modules">
                      {data.modules_S1.modules.map((module, index) => {
                      if(module.module_name!==""){
                        return (
                          <div
                            key={index}
                            className=
                              "module_container"
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
                        )}else{
                          return null
                        };
                      })}
                    </div>
                  </div>
                  {!nosem2 && <div className="semestre_2">
                    <a href={data.modules_S2.link}><header>Semestre 02</header></a>
                    <div className="modules">
                      {data.modules_S2.modules.map((module, index) => {
                        if(module.module_name!==""){
                        return (
                          <div
                            key={index}
                            className="module_container"
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
                        )}else{
                          return null
                        };
                      })}
                    </div>
                  </div>}
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
                    <a href={!show ?data.modules_S1.link:data.modules_S2.link}> 
                    <span className="mobile_semestre">
                    {!show? "semestre 01" : "semestre 02"}
                    </span>
                    </a>
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
                      ? data.modules_S1.modules.map((module, index) => {
                        if(module.module_name!==""){
                          return (
                            <div
                              key={index}
                              className=
                                  "module_container"
                              
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
                          )}else{
                            return null
                          };
                        })
                      : data.modules_S2.modules.map((module, index) => {
                        if(module.module_name!==""){
                          return (
                            <div
                              key={index}
                              className=                                 
                                   "module_container"                             
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
                          )}else{
                            return null
                          };
                        })}
                  </div>
                </div>}

          

              </div>
            
          
        
      </>
    );



}
=======
import { useState } from "react";
import "./Cp.css";
export default function Year({ data, nosem2 }) {
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
                if (module.module_name !== "") {
                  return (
                    <div key={index} className="module_container">
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
                } else {
                  return null;
                }
              })}
            </div>
          </div>
          {!nosem2 && <div className="semestre_2">
            <header>Semestre 02</header>
            <div className="modules">
              {data.modules_S2.map((module, index) => {
                if (module.module_name !== "") {
                  return (
                    <div key={index} className="module_container">
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
                } else {
                  return null;
                }
              })}
            </div>
          </div>
          }
        </div>
        {/****************************************************MOBIIIIIIIIIIIILE******************************************************************************* */}

        {
          <div className="semestres_mobile">
            <header>
              {!show ? (
                <img
                  className="left_icon_desactive"
                  src="/left_icon_desactive.svg"
                  loading="lazy"
                  alt="img"
                />
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
              {!show ? "semestre 01" : "semestre 02"}
              {!show ? (
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
                <img
                  src="/right_icon_desactive.svg"
                  className="right_icon_desactive"
                  alt="icon"
                />
              )}
            </header>
            <div className="modules">
              {!show
                ? data.modules_S1.map((module, index) => {
                  if (module.module_name !== "") {
                    return (
                      <div key={index} className="module_container">
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
                  } else {
                    return null;
                  }
                })
                : data.modules_S2.map((module, index) => {
                  if (module.module_name !== "") {
                    return (
                      <div key={index} className="module_container">
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
                  } else {
                    return null;
                  }
                })}
            </div>
          </div>
        }
      </div>
    </>
  );
}
>>>>>>> c42802b929e4c578cc15698cbfd4e29e790e5738
