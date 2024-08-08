// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import blog from './data';

 function App() {
    
     let[activetab,setactivetab] = useState(0);
     let[activecontent,setactivecontent] = useState(blog[0]);
     let changedData = (i)=>{
          setactivetab(i);
          setactivecontent(blog[i])
     }
           return(
            <div className='center'>
               <h1>Tabbing Button</h1>
            <ul>
               {blog.map((v,i)=>{
                    return(
                         <li><button onClick={()=>changedData(i)} className={activetab===i?'active':''}>{v.title}</button></li>
                    )
               })}
            </ul>
            <p>{activecontent.body}</p>
            </div>
           )         
    
   

}
      
  
export default App;


