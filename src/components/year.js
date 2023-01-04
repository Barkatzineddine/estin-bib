
import { useState } from "react";
import './Cp.css'
export default function Year ({data}){

    const [show, setShow] = useState(false);

    const[change,setChange]= useState(1)

  
  const activate=(module)=>{
    if(!module.active){
      module.active=true
    }else{
      module.active=false
    }

    setChange((prevent) => prevent * -1);

  }

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
                              <img
                                alt="img"
                                loading="lazy"
                                className="drop_down"
                                src="/dropDown.svg"
                                onClick={(e) => {
                                  activate(module);
  
                                  if (e.target.style.transform === "") {
                                    e.target.style.transform = "rotate(180deg)";
                                  } else {
                                    e.target.style.transform = "";
                                  }
  
                                  
                                }}
                              />
                            </div>
                            <div className="drop_div">
                              {module.tabs.map((tab)=>{
                                return(

                                  <span><a href={tab.link}>{tab.name}</a></span>

                                )
                              })}
                                  
                            </div>
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
                              <img
                                loading="lazy"
                                alt="img"
                                className="drop_down"
                                src="/dropDown.svg"
                                onClick={(e) => {
                                  activate(module);
  
                                  if (e.target.style.transform === "") {
                                    e.target.style.transform = "rotate(180deg)";
                                  } else {
                                    e.target.style.transform = "";
                                  }
                                }}
                              />
                            </div>
                            <div className="drop_div">
                              {module.tabs.map((tab)=>{
                                return(

                                  <span><a href={tab.link}>{tab.name}</a></span>

                                )
                              })}
                                  
                            </div>
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
                                <img
                                  alt="img"
                                  loading="lazy"
                                  className="drop_down"
                                  src="/dropDown.svg"
                                  onClick={(e) => {
                                    activate(module);
  
                                    if (e.target.style.transform === "") {
                                      e.target.style.transform = "rotate(180deg)";
                                    } else {
                                      e.target.style.transform = "";
                                    }
  
                                    ;
                                  }}
                                />
                              </div>
                              <div className="drop_div">
                              {module.tabs.map((tab)=>{
                                return(

                                  <span><a href={tab.link}>{tab.name}</a></span>

                                )
                              })}
                                  
                            </div>
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
                                <img
                                  alt="img"
                                  loading="lazy"
                                  className="drop_down"
                                  src="/dropDown.svg"
                                  onClick={(e) => {
                                    activate(module);
  
                                    if (e.target.style.transform === "") {
                                      e.target.style.transform = "rotate(180deg)";
                                    } else {
                                      e.target.style.transform = "";
                                    }
                                  }}
                                />
                              </div>
                              <div className="drop_div">
                              {module.tabs.map((tab)=>{
                                return(

                                  <span><a href={tab.link}>{tab.name}</a></span>

                                )
                              })}
                                  
                            </div>
                            </div>
                          );
                        })}
                  </div>
                </div>}

          

              </div>
            
          
        
      </>
    );



}