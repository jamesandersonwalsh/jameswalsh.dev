import Image from 'next/image'

export default function PhotoGrid() {
  return (
    <div className="h-[648px] columns-2 gap-4 sm:h-auto sm:columns-3">
      <div className="relative mb-4 h-40">
        <Image
          src="/portraits/spartan-race.webp"
          alt="James finishing a Spartan Race"
          width={160}
          height={160}
          className="mb-4 rounded-lg shadow-xl"
        />
      </div>
      <div className="relative mb-4 md:h-72">
        <Image
          src="/portraits/bridge.webp"
          alt="Picture of James on a bridge"
          width={160}
          height={160}
          className="mb-4 rounded-lg shadow-xl"
        />
      </div>
      <div className="relate mb-0 h-40 sm:mb-4 sm:h-72">
        <Image
          src="/portraits/shortboard.webp"
          alt="James playing guitar"
          width={160}
          height={160}
          className="aspect-square rounded-lg object-cover object-top shadow-xl sm:aspect-auto"
        />
      </div>
      <div className="relative mb-4 h-40">
        <Image
          src="/portraits/aviators.webp"
          alt="Picture of James in NYC"
          width={160}
          height={160}
          className="rounded-lg shadow-xl"
        />
      </div>
      <div className="relative mb-4 h-40">
        <Image
          src="/portraits/southern-utah.webp"
          alt="James in a national park in southern Utah"
          width={120}
          height={120}
          className="w-full rounded-lg shadow-xl"
        />
      </div>
      <div className="relative mb-4 h-72">
        <Image
          src="/portraits/guitar.webp"
          alt="Picture of James Skateboarding"
          width={160}
          height={160}
          className="rounded-lg shadow-xl"
        />
      </div>
    </div>
  )
}
