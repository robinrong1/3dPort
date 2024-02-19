import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full h-screen">

    <div className={`${styles.paddingX} absolute inset-0 top-[120px] 
    max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-center
      mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
        <div className="w-1 sm:h-80 h-40 violet-gradient"/>
      </div>

      <div>
        <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className="txt-[#915eff]">Robin</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am a computer engineering student at the university of Waterloo. I develop full-stack websites and love to keep up with the latest tech trends.
        </p>
      </div>
    </div>
    <ComputersCanvas/>
    </section>
  )
}

export default Hero