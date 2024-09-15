import { render, screen, act } from '@testing-library/react'

import WorkflowHistory from '../work-history'

describe('about/WorkHistory', () => {
  it('renders logos for each company', () => {
    render(<WorkflowHistory />)

    act(() => screen.getByRole('button', { name: /view work history/i }).click())

    expect(screen.getByAltText(/tomo company logo/i)).toBeInTheDocument()
    expect(screen.getByAltText(/vasion company logo/i)).toBeInTheDocument()
    expect(screen.getByAltText(/podium company logo/i)).toBeInTheDocument()
    expect(screen.getByAltText(/pluralsight company logo/i)).toBeInTheDocument()
    expect(screen.getByAltText(/maersk company logo/i)).toBeInTheDocument()
  })

  it.each(['tomo-cv-item', 'vasion-cv-item'])('displays work history for %s', (dataTestId: string) => {
    render(<WorkflowHistory />)

    act(() => screen.getByRole('button', { name: /view work history/i }).click())

    const workListItem = screen.getByTestId(dataTestId)

    expect(workListItem).toBeInTheDocument()
  })

  it('allows a user to download CV', () => {
    render(<WorkflowHistory />)

    act(() => screen.getByRole('button', { name: /view work history/i }).click())

    const cvLink = screen.getByRole('link')

    expect(cvLink).toBeInTheDocument()
    expect(cvLink).toHaveTextContent(/download cv/i)
    expect(cvLink).toHaveAttribute('href', 'resume.pdf')
  })
})
