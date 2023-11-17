'use client'

import Image from 'next/image'

export function PhotoGrid() {
  return (
    <div className="columns-2 gap-4 sm:columns-3">
      <Image
        src="/portraits/spartan-race.webp"
        alt="James finishing a Spartan Race"
        width={160}
        height={160}
        className="mb-4 rounded-lg opacity-0 shadow-xl transition-opacity duration-700"
        onLoad={(image) => image.currentTarget.classList.remove('opacity-0')}
      />
      <Image
        src="/portraits/bridge.webp"
        alt="Picture of James on a bridge"
        width={160}
        height={160}
        className="mb-4 rounded-lg opacity-0 shadow-xl transition-opacity delay-300 duration-700"
        onLoad={(image) => image.currentTarget.classList.remove('opacity-0')}
      />
      <Image
        src="/portraits/shortboard.webp"
        alt="James playing guitar"
        width={160}
        height={160}
        className="mb-0 aspect-square rounded-lg object-cover object-top opacity-0 shadow-xl transition-opacity delay-100 duration-700 sm:mb-4 sm:aspect-auto"
        onLoad={(image) => image.currentTarget.classList.remove('opacity-0')}
      />
      <Image
        src="/portraits/aviators.webp"
        alt="Picture of James in NYC"
        width={160}
        height={160}
        className="mb-4 rounded-lg opacity-0 shadow-xl transition-opacity delay-500 duration-700"
        onLoad={(image) => image.currentTarget.classList.remove('opacity-0')}
      />
      <Image
        src="/portraits/southern-utah.webp"
        alt="James in a national park in southern Utah"
        width={120}
        height={120}
        className="mb-4 w-full rounded-lg opacity-0 shadow-xl transition-opacity delay-200 duration-700"
        onLoad={(image) => image.currentTarget.classList.remove('opacity-0')}
      />
      <Image
        src="/portraits/guitar.webp"
        alt="Picture of James Skateboarding"
        width={160}
        height={160}
        className="mb-4 rounded-lg opacity-0 shadow-xl transition-opacity delay-700 duration-700"
        onLoad={(image) => image.currentTarget.classList.remove('opacity-0')}
      />
    </div>
  )
}
