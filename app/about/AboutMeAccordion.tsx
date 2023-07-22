'use client'

import { Accordion } from '@ui/client/Accordion'
import IntroductionPanel from './IntroductionPanel'
import GettingStartedPanel from './GettingsStartedPanel'
import CareerGrowthPanel from './CareerGrowthPanel'
import TodayPanel from './TodayPanel'
import { useState } from 'react'

type AccordionPanelTypes = 'intro' | 'gettingStarted' | 'careerGrowth' | 'today'

export default function AboutMeAccordion() {
  const [panelVisibilityState, setPanelState] = useState<
    Record<AccordionPanelTypes, false>
  >({
    intro: false,
    gettingStarted: false,
    careerGrowth: false,
    today: false,
  })

  const togglePanel = (panelType: AccordionPanelTypes) => () => {
    setPanelState({
      ...panelVisibilityState,
      [panelType]: !panelVisibilityState[panelType],
    })
  }

  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Button onClick={togglePanel('intro')}>
          Who I Am 🤙
        </Accordion.Button>
        <IntroductionPanel isVisible={panelVisibilityState.intro} />
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Button onClick={togglePanel('gettingStarted')}>
          How I Got Started 🤓
        </Accordion.Button>
        <GettingStartedPanel isVisible={panelVisibilityState.gettingStarted} />
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Button onClick={togglePanel('careerGrowth')}>
          Career Growth 💻
        </Accordion.Button>
        <CareerGrowthPanel isVisible={panelVisibilityState.careerGrowth} />
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Button onClick={togglePanel('today')}>
          Today 🎧
        </Accordion.Button>
        <TodayPanel isVisible={panelVisibilityState.today} />
      </Accordion.Item>
    </Accordion>
  )
}
