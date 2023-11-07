'use client'

import { AccordionContent } from '@radix-ui/react-accordion'

import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function AboutMe() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="who-i-am">
        <AccordionTrigger>Who I Am 🤙</AccordionTrigger>
        <AccordionContent>
          Growing up I was always drawn to music, art, video games, & writing. In retrospect, it&apos;s easy to see the
          natural velocity that ended up eventually becoming a career. For as long as I can remember I&apos;ve had a
          sincere intrigue for computers. My earliest memory of using a computer was booting up <b>The Oregon Trail</b>{' '}
          from a floppy disk at my Grandma&apos;s house during the summer of 2001. As the years went on I remember
          rushing home from class to play Runescape on our shared family Windows XP machine. Or receiving my first 30GB
          Video iPod which absolutely changed my relationship to music forever. At least at a subtle level, I&apos;ve
          always been drawn to the intersection of hardware, software, & artistic expression. But I had no idea who was
          building these machines & applications I was using, or how they worked. I thought it was actual magi, which I
          was happy to be the beneficiary of my entire life.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="how-i-got-started">
        <AccordionTrigger>How I Got Started 🤓</AccordionTrigger>
        <AccordionContent>
          Fast forward to summer of 2014, I was working full-time while taking a semester off from my business
          management major. Spring Semester had left me feeling like I was approaching an intersection in life. I knew
          my major wasn&apos;t a great fit, but I wasn&apos;t sure what was next. One night in early June 2014, I was
          drivng home bursting with excitement because for the first time ever I was going to boot up my new{' '}
          <b>Gaming PC</b>. As I thought about pressing the power button on my new gaming rig, a thought popped into my
          head that I couldn&apos;t get rid of. Instead of playing games tonight, What if I sat down at the keyboard &
          just tried to build something... Earlier that day, one of my teammates had mentioned that they were
          transitioning onto the software development team. & hearing that made something spark in my brain. Rather than
          rushing home every night to tinker with computers, I wanted to understand how they worked. I wanted to see if
          it was viable for me to make a career out of this, not a night time hobby. What came next was a summers long
          blur of mastering HTML, CSS, & beginning to read a books on JavaScript & Ruby. Before I knew it summer had
          ended, Fall was here & I was enrolled in DevMountain, a fully immersive full stack JavaScript bootcamp. Each
          day & I felt newfound excitement every time I walked out the front door to catch the train & head to class.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="career-growth">
        <AccordionTrigger>Career Growth 💻</AccordionTrigger>
        <AccordionContent>
          By January of 2015 I had landed my first job as an Associate Software Engineer at IntegraCore{' '}
          <i>(now Maersk)</i>. Where I felt fortunate & lucky to be mentored by some of the best Ruby on Rails
          Developers in my area. That foundation blossomed into a decades long full-stack career in web development,
          where I am baffled & proud to say that Im still learning new things that challenge my thinking to this day.
          Thanks for being here & for stopping by.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="today">
        <AccordionTrigger>Today 🎧</AccordionTrigger>
        <AccordionContent>
          Today I&apos;m a seasoned full stack software engineer who loves frontend web development. I&apos;ve been
          fortunate enough to gain experience in monoliths, monorepos, & microservices. I&apos;ve learned both the easy
          way & the hard way about what can go right & wrong with all of them. I&apos;ve contributed to scaling Node.js
          APIs from Go to Market to Enterprise SaaS. I&apos;ve co-founded & contributedd to hand crafted Design Systems.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
