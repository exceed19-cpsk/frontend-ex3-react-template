import { useEffect, useState } from "react"
import Card from "../component/Menucard"
import BCard from "../component/Bigcard"

function Home() {
  return (
    <div className="home">
      <div className="home-center">
        <div className="home-inp">
          <div className="search">
            <input></input>
          </div>
          <div className="home-button">
            <button>pizza</button>
            <button>pasta</button>
            <button>dessert</button>
            <button>drinks</button>
            <button>sauces</button>
            <button>sides</button>
          </div>
        </div>
        <div className="home-menulist"></div>
      </div>
    </div>
  )
}

export default Home
