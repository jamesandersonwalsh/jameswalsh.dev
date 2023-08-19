import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { hstack } from 'styled-system/patterns'

const articleCTA = hstack({
  gap: 1,
  fontWeight: 'semibold',
  fontSize: 'md',
  _dark: {
    color: 'blue.500',
  },
  _light: {
    color: 'blue.600',
  },
  _hover: {
    _dark: {
      color: 'blue.400',
    },
    _light: {
      color: 'blue.500',
    },
  },
})

export function ArticleCTA() {
  return (
    <span className={articleCTA}>
      Read Article <ChevronRightIcon width={20} height={20} />
    </span>
  )
}
