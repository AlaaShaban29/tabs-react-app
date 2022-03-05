import React, { useEffect, useState } from "react";
import useGlobalContext from "../ContextData";
import Loading from "./../Loading/Loading";
import { FaAngleDoubleRight } from "react-icons/fa";

function Tabs() {
  let{GetJobs,jobs,loading}=useGlobalContext()
    let [value, setValue] = useState(0)
    useEffect(() => {
      GetJobs()
    }, [GetJobs,jobs])

if(loading){
  return(<Loading/>)
}
const {company,title,dates,duties}=jobs[value]
  return (

    <>
      <main>
        <div className="container">
        <div className="title text-center pt-5 pb-4">
              <h2>
                  Experience
              </h2>
              <div className="underline"></div>
          </div>  
    <section className="container-job " >
          <div className="row container-row gx-lg-5 gx-3 ">
                <div className="col-lg-3">
                <div className='container-company'>

                  {jobs.map((item, index) => {
                    const { company } = item;
                    return (

                      <div className="mb-4" key={index}>
                        <div className="company">
                          <button 
                       className={`job-btn ${index===value && 'active-btn'}`}
                       onClick={()=>setValue(index)}>
                            {company}
                          </button>
                        </div>
                      </div>

                    );
                  })}
                  </div>

                  </div>

                <div className="col-md-9">
                  <div className="jobs">
                    <div className="row">
                      <div className="col-12">
                        <div className="job-info">
                          <h3>{title}</h3>
                          <h4>{company}</h4>
                          <p className="job-date">{dates}</p>
                          {duties.map((item, index) => (
                            <div className="job-desc  d-flex  " key={index}>
                              <div className="job-icon  me-4">
                                <FaAngleDoubleRight size={16} />
                              </div>
                              <p>{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
         
          </div>
        </section>
       
        </div>
      </main>
    </>
  );
}

export default Tabs;
