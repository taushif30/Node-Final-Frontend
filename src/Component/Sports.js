import React, { useContext, useEffect } from 'react'
import { Store } from './ContextStore';
import { NavLink } from 'react-router-dom';


const Sports = () => {
  const [contextData] = useContext(Store);
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <>
    <h1 className='latestHeading'>THE LATEST</h1>

<div className='theLatest'>
    {contextData.filter((item)=> item.id >=45 && item.id<=47).map((item,index)=>{
        return(
            <div key={index} className='latestBox'>
                 <NavLink  to={`/detail/${item.id}`}>
                    <img src={item.image} alt='NOT FOUND'width='340px' height='200px' />
                    </NavLink>
                <h2>{item.name}</h2>
                <p>{item.textt}</p>
            </div>
        )
    })}
</div>
    
    {/* -----------------------TOPSTORIES---------------------- */}

   <div className='topStoriesParent'>
    <div>
        <h1 className='topstory'>TOP STORIES</h1>
        {contextData.filter((item)=> item.cat === 'Sports').map((item,index)=>{
            return(
                <div key={index} className='topStoryData'>
                    <NavLink  to={`/detail/${item.id}`}>
                    <div>
                        <img src={item.image} alt='NOT FOUND' />
                    </div>
                </NavLink>
                    <div className='topStoryData-down'>
                    <h4>{item.name}</h4>
                    <p>{item.textt}</p><hr/>
                    </div>
                </div>
            )
        })}
    </div>

    <div>
        <div>
        <h1 className='topPost'>TOP POST</h1>
        {contextData.filter((item)=> item.id >=48 && item.id<=50).map((item,index)=>{
            return(
                <div key={index} className='topPostData'>
                    <div>
                    <NavLink  to={`/detail/${item.id}`}>
                        <img src={item.image} alt='NOT FOUND' height='200px' width='200px'/>
                    </NavLink>
                    </div>

                    <div>
                        <h4>{item.name}</h4>
                        <p>{item.textt}</p>
                        <p className='p'>{item.sport}</p>
                    </div>

                </div>

            )
        })}
        </div>

        <div className='add'>
            <h4>ADVERTISEMENT</h4>
        </div>
    </div>
   </div>
    </>
  )
}

export default Sports