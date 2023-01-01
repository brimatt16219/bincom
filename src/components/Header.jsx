import React from 'react'
import {FaHouseUser} from 'react-icons/fa'

export default function Header() {
  return (
    <div>
        <div className="bg-blue-900 w-screen h-16">
            <h1 className="text-center  text-4xl py-3"><span className="text-slate-400">Bin</span><span className="text-white">Com</span></h1>
        </div>
        
        <div className="bg-black w-screen h-16 flex justify-center">
            <div className="m-auto text-white text-center w-1/12">
                <FaHouseUser className="align-middle"/>
                <h1>Home</h1>
            </div>
            <div className="m-auto text-white text-center w-1/12">
                <FaHouseUser className="align-middle"/>
                <h1>Packages</h1>
            </div>
            <div className="m-auto text-white text-center w-1/12">
                <FaHouseUser className="align-middle"/>
                <h1>Connect</h1>
            </div>
            <div className="m-auto text-white text-center w-1/12">
                <FaHouseUser className="align-middle"/>
                <h1>Contact</h1>
            </div>
        </div>
    </div>
  )
}
