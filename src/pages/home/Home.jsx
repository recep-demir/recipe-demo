import React, { useContext } from 'react'
import { RecipeContext } from '../../context/RecipeProvider'
import Header from '../../components/header/Header'
import RecipeCard from './RecipeCard'
import { HomeImg, ImgDiv } from './HomeStyles'
import asci from "../../assets/home.svg"

const Home = () => {

  const {yemekler} =useContext(RecipeContext)
  return (
    <div>
      <Header />

{yemekler.length > 0 ? (
  <div>
    <RecipeCard/>
  </div>
) : (
  <ImgDiv>
    <HomeImg src={asci} alt="" />
  </ImgDiv>
)}
      
    </div>
  )
}

export default Home