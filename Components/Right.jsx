import Link from 'next/link';
import React from 'react'
import { HiLanguage } from 'react-icons/hi2';
import { LiaUserCircleSolid } from "react-icons/lia";

const Right = () => {
  return (
   <>
       <div className="right">
          <div className="">
            <button
              style={{
                width: '5rem',
                height: '2rem',
                color: '#fff',
                display: 'flex',
                backgroundColor: '#000',
                borderRadius: '2rem',
                gap:".5rem",
                justifyContent:"center",
                alignItems:"center"
              }}
            >
              <HiLanguage /> EN
            </button>
          </div>

          <div
            className=""
            style={{
              width: '3rem',
              height: '3rem',
              background: '#000',
              borderRadius: '50%',
            }}
          ><Link href="/profile"> <LiaUserCircleSolid style={{color:"#fff",fontSize:"3rem"}}/></Link>
            
          </div>
        </div></>
  )
}

export default Right