import './Cp.css'

import data from './data.json';
export default function Cp1({activate,drop}) {
    
    return(
    
<>


        {data.map((obj)=>{
            if(obj.year==="1CP"){
                return(
                <div id='1CP' className='Cp' >
            
            <span className='title_cp'>1CP</span>
            <div className='semestres'>
                <div className='semestre_1'>
                    <header>Semestre 01</header>
                    <div className='modules'>
                    {obj.modules_S1.map((module)=>{
                        return(
                            
                                <div className={module.active ?'module_container clicked':'module_container'}>
                                    <div className='module'><div className='img_name'><img className='fileImg' src="/file.svg"/><span className='moduleName'>{module.module_name}</span></div><img className='drop_down' src='/dropDown.svg' onClick={(e)=>{
                                        activate(module);
                                        
                                       
                                       if(e.target.style.transform==""){
                                        e.target.style.transform="rotate(180deg)";}
                                        else{e.target.style.transform=""}
                                        
                                        console.log(window.scrollY)
                                        }     
                                        }/></div>
                                        {drop}

                                </div>       
                           
                        )
                    })}
                    </div>
                    </div>
                    <div className='semestre_2'>
                        <header>Semestre 02</header>
                        <div className='modules'>
                    {obj.modules_S2.map((module)=>{
                        return(
                            
                                <div className={module.active ?'module_container clicked':'module_container'}>
                                    <div className='module'><div className='img_name'><img className='fileImg' src="/file.svg"/><span className='moduleName'>{module.module_name}</span></div><img className='drop_down' src='/dropDown.svg' onClick={(e)=>{
                                        activate(module);
                                       
                                       if(e.target.style.transform==""){
                                        e.target.style.transform="rotate(180deg)";}
                                        else{e.target.style.transform=""}
                                        
                                       
                                        }     
                                        }/></div>
                                        {drop}

                                </div>       
                           
                        )
                    })}
                    </div>
                    </div>
                    </div>
                    </div>
                )}})}
                </>)}
                    
                    
                


                
               
            

        
    
        
   
            


 