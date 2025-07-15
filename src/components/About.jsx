import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useGSAP(() => {

    const clipAnimation = gsap.timeline({
      scrollTrigger: {

        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      }
    });

    clipAnimation.to(".mask-clip-path", {

      width: "100vw",
      height: "100vh",
      borderRadius: 0,

    })
  })

  return (
    <div id="about" className='min-h-screen w-screen'>
      <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
        <h2 className='font-general text-sm uppercase md:text-[10px]'>
          Let's Game until death do us part
        </h2>

        <AnimatedTitle title="Ch<b>a</b>llenge the heavens <br /> r<b>e</b>write Destiny" containerClass="mt-5 !text-black text-center"/>

        <div className='about-subtext'>
          <p>
           In the shadows of gods and monsters, a forgotten myth takes form. Step beyond the veil
          </p>
          <p>
            of reality, where the echoes of ancient legends intertwine with the pulse of modern gaming.
          </p>
        </div>
      </div>

      <div id="clip" className='h-dvh w-screen'>
        <div className='mask-clip-path about-image'>
          <img
            src='img/about.webp'
            alt='background'
            className='absolute left-0 top-0 size-full object-cover'
          />
        </div>
      </div>

    </div>
  )
}

export default About
