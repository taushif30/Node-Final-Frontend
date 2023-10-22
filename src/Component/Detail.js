import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Store } from './ContextStore';
import { NavLink } from 'react-router-dom';


const Detail = () => {
  const id = useParams().id;
  const [dataContext] = useContext(Store);
  // const category = dataContext[parseInt (id)-1].cat
  const dRouteData = dataContext[parseInt (id)-1].cat;
  const random = Math.floor(Math.random()*7)
  console.log(typeof id);

  useEffect(()=>{
    window.scrollTo(0,0);
  })

  return (
    <>
    {dataContext.filter((data) => data.id === parseInt(id)).map((item,index)=>{
      return(
      <>
      <div className='parentTop'>
      <div className='leftDetail'>
        <h4><i class="fa-regular fa-thumbs-up"></i> : 9.3k....</h4>
        <h5><i class="fa-solid fa-share-nodes"></i> : share the user</h5>
      </div>
      <div className='detail'>
      {/* <h1>{item.id}</h1> */}
      
      {/* <h1>{item.name}</h1> */}
      <h2>{item.textt}</h2><br/>

      <div className='detailHeadLike'>
        <div className='logoDetailOne'>
            <h1><i class="fa-solid fa-user-large"></i></h1>
        </div>

        <div className='logoDetailTwo'>
      <h4> <i class="fa-regular fa-thumbs-up"></i> : Like <i class="fa-solid fa-share-nodes"></i> :share</h4>
      </div>

      </div>
      
      <img src={item.image} alt='NOT FOUND' height='450px' width='550px'/><br/>
      <p>{item.text}</p>
      <p>{item.text}</p>
      <p>{item.text}</p>
      <p>{item.text}</p>
        {/* <p>{item.text.slice(0,20)}</p> */}
     </div>

     <div className='rightDetail'>
     </div>
     
     </div><br/><br/><hr width='max-content'/>
{/* 
     <div>

    <div className='latestBoxDetail'>
    {dataContext.filter((item)=> item.id >=8 && item.id<=10).map((item,index)=>{
      return(
        <NavLink to={`/detail/${item.id}`}>

        <div key={index} className='b'>
          <img src={item.image} alt='NOT FOUND' height='200px' width='350px'/>
          <h2>{item.name}</h2>
          <p>{item.textt}</p>
        </div>
        </NavLink>

      )
    })}
    
    </div>

   </div><br/>  */}


      </>

      )
    })}

   

{/* {{dataContext.filter((data) => (data.cat === dRouteData) && (data.id % 13 === 1 || data.id % 14 === 2 || data.id % 15 === 0)  ).map((item,index)=>{ */}
<div className='latestBoxDetail'>
{dataContext.filter((data)=> data.cat === dRouteData && data.id !== parseInt(id))
.slice(random,random+3)
.map((item,index)=>{
  return(
    <div className='DetailBox'>
     <NavLink to={`/detail/${item.id}`}>
      <div key={index} className='b'>
      <h2>{item.name}</h2>
    <img src={item.image} alt='NOT FOUND'/>
    <p>{item.textt}</p>
    </div>
    </NavLink>
    </div>
  )
})} 
</div>
    
    </>
  )
}

export default Detail