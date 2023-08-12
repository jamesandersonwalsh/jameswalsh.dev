import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { hstack } from 'styled-system/patterns'

const articleCTA = hstack({
  gap: 1,
  color: 'blue.600',
  fontWeight: 'semibold',
  fontSize: 'md',
  _hover: {
    color: 'blue.500',
  },
})

export function ArticleCTA() {
  return (
    <span className={articleCTA}>
      Read Article <ChevronRightIcon width={20} height={20} />
    </span>
  )
}
