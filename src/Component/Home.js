import React, { useContext, useEffect } from 'react'
import { Store } from './ContextStore';
import { NavLink } from 'react-router-dom';


const Home = ({value}) => {
    const [homeData] = useContext(Store);
    useEffect(()=>{
        window.scrollTo(0,0);
      })
    

  return (
    <>
    <div className='mainBox'>
        <div className='FirstChild'>
            <img src='https://i.pinimg.com/originals/27/7e/b1/277eb1d795931a400e9f31956d3d788b.jpg' alt='NOT FOUND'/>
        </div>

        <div className='SecondChild'>
            <div className='SecondChildOne'>
            <img src='https://getwallpapers.com/wallpaper/full/1/a/b/1070863-tom-hardy-wallpapers-2000x1331-mobile.jpg' alt='NOT FOUND'/>
            </div>
            
            <div className='SecondChildTwo'>
            <img src='https://tastedrecipes.com/wp-content/uploads/2022/07/Coconut-Lassi-3.jpg' alt='NOT FOUND'/>
            </div>

        </div>

    </div>





    <h1 className='latestHeading'>THE LATEST</h1>

    <div className='theLatest'>
        {homeData.filter((item)=> item.latest === 'latest').map((item,index)=>{
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
        {homeData.filter((item)=> item.id%6 === 0).map((item,index)=>{
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
        {homeData.filter((item)=> item.id%15 === 0).map((item,index)=>{
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
                        <p className='p'>{item.idd}</p>
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

export default Home