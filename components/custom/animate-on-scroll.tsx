'use client'

import { InView } from 'react-intersection-observer'

export function AnimationOnScroll({
  children,
  classNameInView,
  classNameNotInView,
}: {
  children: React.ReactNode
  classNameInView: string
  classNameNotInView: string
}) {
  return (
    <InView triggerOnce threshold={1}>
      {({ inView, ref, entry }) => (
        <div ref={ref} className={inView ? classNameInView : classNameNotInView}>
          {children}
        </div>
      )}
    </InView>
  )
}
