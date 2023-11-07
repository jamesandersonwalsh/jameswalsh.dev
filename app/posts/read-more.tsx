import { ChevronRight } from 'lucide-react'

export function ReadMore() {
  return (
    <span className="align-center flex flex-row items-end gap-1 text-base font-semibold text-primary hover:to-blue-400">
      Read More <ChevronRight width={20} height={20} />
    </span>
  )
}
