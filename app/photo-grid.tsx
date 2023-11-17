'use client'

import Image from 'next/image'

export function PhotoGrid() {
  return (
    <div className="columns-2 gap-4 sm:columns-3">
      <div className="relative mb-4 h-40">
        <Image
          src="/portraits/spartan-race.webp"
          alt="James finishing a Spartan Race"
          width={160}
          height={160}
          className="mb-4 rounded-lg opacity-0 shadow-xl transition-opacity delay-1000 duration-700"
          onLoad={(image) => image.currentTarget.classList.remove('opacity-0')}
        />
      </div>
      <div className="relative mb-4 md:h-72">
        <Image
          src="/portraits/bridge.webp"
          alt="Picture of James on a bridge"
          width={160}
          height={160}
          className="rounded-lg opacity-0 shadow-xl transition-opacity delay-1300 duration-700"
          onLoad={(image) => image.currentTarget.classList.remove('opacity-0')}
        />
      </div>
      <div className="relate mb-0 h-40 sm:mb-4 sm:h-72">
        <Image
          src="/portraits/shortboard.webp"
          alt="James playing guitar"
          width={160}
          height={160}
          className="ease aspect-square rounded-lg object-cover object-top opacity-0 shadow-xl transition-opacity delay-1100 duration-700 sm:aspect-auto"
          onLoad={(image) => image.currentTarget.classList.remove('opacity-0')}
        />
      </div>
      <div className="relative mb-4 h-40">
        <Image
          src="/portraits/aviators.webp"
          alt="Picture of James in NYC"
          width={160}
          height={160}
          className="rounded-lg opacity-0 shadow-xl transition-opacity delay-1500 duration-700"
          onLoad={(image) => image.currentTarget.classList.remove('opacity-0')}
        />
      </div>
      <div className="relative mb-4 h-40">
        <Image
          src="/portraits/southern-utah.webp"
          alt="James in a national park in southern Utah"
          width={120}
          height={120}
          className="w-full rounded-lg opacity-0 shadow-xl transition-opacity delay-1200 duration-700"
          onLoad={(image) => image.currentTarget.classList.remove('opacity-0')}
        />
      </div>
      <div className="relative mb-4 h-72">
        <Image
          src="/portraits/guitar.webp"
          alt="Picture of James Skateboarding"
          width={160}
          height={160}
          className="rounded-lg opacity-0 shadow-xl transition-opacity delay-1700 duration-700"
          onLoad={(image) => image.currentTarget.classList.remove('opacity-0')}
        />
      </div>
    </div>
  )
}
