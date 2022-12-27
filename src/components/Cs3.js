import "./Cp.css";
import data from "./data.json";
import { useState } from "react";
export default function Cs3({ activate, drop }) {
  const [show_5, setShow_5] = useState(false);

  return (
    <>
      {data.map((obj, index) => {
        if (obj.year == "3CS") {
          return (
            <div key={index} className="Cs" id="3CS">
              <span className="title_cs">3CS</span>
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
                                className="fileImg"
                                src="/file.svg"
                              />
                              <span className="moduleName">
                                {module.module_name}
                              </span>
                            </div>
                            <img
                              className="drop_down"
                              src="/dropDown.svg"
                              onClick={(e) => {
                                activate(module);

                                if (e.target.style.transform == "") {
                                  e.target.style.transform = "rotate(180deg)";
                                } else {
                                  e.target.style.transform = "";
                                }

                                console.log(e.target.style);
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
                          className={
                            module.active
                              ? "module_container clicked"
                              : "module_container"
                          }
                        >
                          <div className="module">
                            <div className="img_name">
                              <img
                                className="fileImg"
                                src="/file.svg"
                                alt="img"
                              />
                              <span className="moduleName">
                                {module.module_name}
                              </span>
                            </div>
                            <img
                              alt="img"
                              className="drop_down"
                              src="/dropDown.svg"
                              onClick={(e) => {
                                activate(module);

                                if (e.target.style.transform == "") {
                                  e.target.style.transform = "rotate(180deg)";
                                } else {
                                  e.target.style.transform = "";
                                }

                                console.log(e.target.style);
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
                  {!show_5 ? (
                    <img src="/left_icon_desactive.svg" />
                  ) : (
                    <img
                      onClick={() => {
                        setShow_5(false);
                      }}
                      src="/left_icon_active.svg"
                    />
                  )}
                  {!show_5 ? "semestre 01" : "semestre 02"}
                  {!show_5 ? (
                    <img
                      src="/right_icon_active.svg"
                      onClick={() => {
                        setShow_5(true);
                      }}
                    />
                  ) : (
                    <img src="/right_icon_desactive.svg" />
                  )}
                </header>
                <div className="modules">
                  {!show_5
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
                                  className="fileImg"
                                  src="/file.svg"
                                />
                                <span className="moduleName">
                                  {module.module_name}
                                </span>
                              </div>
                              <img
                                alt="img"
                                className="drop_down"
                                src="/dropDown.svg"
                                onClick={(e) => {
                                  activate(module);

                                  if (e.target.style.transform == "") {
                                    e.target.style.transform = "rotate(180deg)";
                                  } else {
                                    e.target.style.transform = "";
                                  }

                                  console.log(window.scrollY);
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
