import { ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ReadMore() {
  return (
    <Button variant="ghost">
      Read More <ChevronRight width={20} height={20} />
    </Button>
  )
}
