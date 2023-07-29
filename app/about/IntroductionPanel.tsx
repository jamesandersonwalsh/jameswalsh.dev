import { Accordion, AccordionPanelProps } from '@ui/client/Accordion'

export default function IntroductionPanel(props: AccordionPanelProps) {
  return (
    <Accordion.Panel {...props}>
      Growing up I was always drawn to music, art, video games, & writing. In retrospect, it&apos;s easy to see the
      natural velocity that ended up eventually becoming a career. For as long as I can remember I&apos;ve had a sincere
      intrigue for computers. My earliest memory of using a computer was booting up <b>The Oregon Trail</b> from a
      floppy disk at my Grandma&apos;s house during the summer of 2001. As the years went on I remember rushing home
      from class to play Runescape on our shared family Windows XP machine. Or receiving my first 30GB Video iPod which
      absolutely changed my relationship to music forever. At least at a subtle level, I&apos;ve always been drawn to
      the intersection of hardware, software, & artistic expression. But I had no idea who was building these machines &
      applications I was using, or how they worked. I thought it was actual magi, which I was happy to be the
      beneficiary of my entire life.
    </Accordion.Panel>
  )
}
