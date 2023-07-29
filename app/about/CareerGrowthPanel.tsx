import { Accordion, type AccordionPanelProps } from '@ui/client/Accordion'

export default function CareerGrowthPanel(props: AccordionPanelProps) {
  return (
    <Accordion.Panel {...props}>
      By January of 2015 I had landed my first job as an Associate Software Engineer at IntegraCore <i>(now Maersk)</i>.
      Where I felt fortunate & lucky to be mentored by some of the best Ruby on Rails Developers in my area. That
      foundation blossomed into a decades long full-stack career in web development, where I am baffled & proud to say
      that Im still learning new things that challenge my thinking to this day. Thanks for being here & for stopping by.
    </Accordion.Panel>
  )
}
