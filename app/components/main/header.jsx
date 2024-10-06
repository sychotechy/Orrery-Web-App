import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
      <section className='header w-full flex items-center justify-around my-4'>
          <div className="ImageLogo text-textColor font-bold flex items-end justify-center text-5xl">
              <Image src={'/logo-Rockai.png'} width={50} height={50} alt='Logo Rock Simulator' />
              <h1 className='ml-2'>NeoSphere<span className='font-light text-3xl text-white'></span></h1>
          </div>
    </section>
  )
}
