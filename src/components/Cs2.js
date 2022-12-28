import "./Cp.css";
import data from "./data.json";
import { useState } from "react";
export default function Cs2({ activate, drop }) {
  const [show_4, setShow_4] = useState(false);

  return (
    <>
      {data.map((obj, index) => {
        if (obj.year == "2CS") {
          return (
            <div key={index} className="Cs" id="2CS">
              <span className="title_cs">2CS</span>
              <div className="semestres">
                <div className="semestre_1">
                  <header>Semestre 01</header>
                  <div className="modules">
                    {obj.modules_S1.map((module, index) => {
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

                                if (e.target.style.transform == "") {
                                  e.target.style.transform = "rotate(180deg)";
                                } else {
                                  e.target.style.transform = "";
                                }

                               
                              }}
                            />
                          </div>
                          {drop}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="semestre_2">
                  <header>Semestre 02</header>
                  <div className="modules">
                    {obj.modules_S2.map((module, index) => {
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

                                if (e.target.style.transform == "") {
                                  e.target.style.transform = "rotate(180deg)";
                                } else {
                                  e.target.style.transform = "";
                                }

                                
                              }}
                            />
                          </div>
                          {drop}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/****************************************************MOBIIIIIIIIIIIILE******************************************************************************* */}

              <div className="semestres_mobile">
                <header>
                  {!show_4 ? (
                    <img src="/left_icon_desactive.svg" className="left_icon_desactive"/>
                  ) : (
                    <img
                      loading="lazy"
                      onClick={() => {
                        setShow_4(false);
                      }}
                      src="/left_icon_active.svg"
                      className="left_icon_active"
                    />
                  )}
                  {!show_4 ? "semestre 01" : "semestre 02"}
                  {!show_4 ? (
                    <img
                      src="/right_icon_active.svg"
                      className="right_icon_active"
                      onClick={() => {
                        setShow_4(true);
                      }}
                    />
                  ) : (
                    <img src="/right_icon_desactive.svg" loading="lazy" className="right_icon_desactive"/>
                  )}
                </header>
                <div className="modules">
                  {!show_4
                    ? obj.modules_S1.map((module, index) => {
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

                                  if (e.target.style.transform == "") {
                                    e.target.style.transform = "rotate(180deg)";
                                  } else {
                                    e.target.style.transform = "";
                                  }

                                  
                                }}
                              />
                            </div>
                            {drop}
                          </div>
                        );
                      })
                    : obj.modules_S2.map((module, index) => {
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
                                  loading="lazy"
                                  alt="img"
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

                                  if (e.target.style.transform == "") {
                                    e.target.style.transform = "rotate(180deg)";
                                  } else {
                                    e.target.style.transform = "";
                                  }
                                }}
                              />
                            </div>
                            {drop}
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
