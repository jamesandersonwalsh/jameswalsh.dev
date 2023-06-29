import { container } from 'styled-system/patterns'

const mainStyles = container({ textAlign: 'center', my: '4rem' })

export default function Home() {
  return (
    <div className={mainStyles}>
      <h1>Under construction. Please come back later.</h1>
    </div>
  )
}
