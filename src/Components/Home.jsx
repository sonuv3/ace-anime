import { Search } from '@mui/icons-material';
import { Typography ,Paper, Box} from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useEffect, useState } from 'react'
import '../Style/style.scss';
import Card from './card/Card';
import Footer from './Footer';
const aceimg= "./Image/ACE PNG.png"
const Home = () => {
  const [searchAnime,setsearchAnime]=useState('bleach')
    const [animeData,setanimeData]= useState()
    const[searchValue,setsearchValue]=useState(searchAnime)
    const getAnime = async ()=>{

        const res =await fetch(`https://api.jikan.moe/v4/anime?q=${searchValue}&limit=20`)
        const resData = await res.json();
        setanimeData(resData.data)
    }
    useEffect(()=>{
        getAnime() 
    },[searchValue])
  return (
<>
    <Paper className="hMain" sx={"padding:0"}>

    <Paper className="homewrapper" elevation={0}>
        <div className="hl">
           <p className="b-font">
            ITS 
           </p>
           <p className='b-font'>ACE</p>
           <p className='b-font'>
            ANIME
           </p>

           <p className='n-font '>
            WELCOME TO ACE MOVIES Lorem ipsum dolor sit amet 
           </p>
            <p className='n-font'>

            consectetur, adipisicing elit. Nemo laudantium laborum natus optio dolore. Doloribus!
            </p>
            <div className="search flex">

            <input type="search" name="animename" className='search-i flex' onChange={(e)=>setsearchAnime(e.target.value)}/>
       <button className='search-button' onClick={()=>{setsearchValue(searchAnime)
        
      }}> 
       <a href="#content" className='link flex'><Search/>SEARCH</a></button>
      </div>

        </div>
        
        <div>
        <img src={aceimg} alt="" />
       
        </div>
    </Paper>
    <Paper elevation={0} className="MAINCOLOR">

    <div className="H-Intro">
      <h3>Do you know that according to Google, the monthly search volume for anime related topics is up to over 1 Billion times? Anime is famous worldwide and it is no wonder we've seen a sharp rise in the number of free anime streaming sites.

Just like free online movie streaming sites, anime watching sites are not created equally, some are better than the rest, so we've decided to build Zoro.to to be one of the best free anime streaming site for all anime fans on the world.</h3>
</div>
    </Paper>
    <Paper className='content' id='content'>
    <Card animelist={animeData}></Card>
    </Paper>
    </Paper>
    
    </>
)}

export default Home
