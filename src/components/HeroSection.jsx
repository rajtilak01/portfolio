import Link from "next/link"
import {Spotlight} from './ui/Spotlight'


function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="p-4 relative z-10 w-full text-center" >
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Welcoming You Rajtilak Pandey</h1>
            <p
            className="mt-4 font-normal text-4xl md:text-4xl text-neutral-300 max-w-lg mx-auto"
            >Come see my work</p>
            <div className="mt-4">
               
            </div>
        </div>
        
        </div>
  )
}

export default HeroSection