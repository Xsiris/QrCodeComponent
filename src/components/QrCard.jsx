import React from 'react'
import QrCodeImage from '../img/image-qr-code.png'

const QrCard = () => {
  return (
    <div className="flex flex-col w-80 px-4 pt-4 pb-10 rounded-lg bg-white">
      <div className="flex">
        <img className="rounded-lg" src={QrCodeImage} alt="QR" />
      </div>
      <div className="flex flex-col px-4 mt-6">
        <h1 className="font-Outfit font-bold text-center text-2xl">Improve your front-end skills by building projects</h1>
        <p className="font-Outfit font-normal text-center mt-4">Scan the QR code to visit Frontend Mentor and take your coding skills tot he next level</p>
      </div>
    </div>
  )
}

export default QrCard
