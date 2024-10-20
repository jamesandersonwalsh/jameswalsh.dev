import { render, screen } from '@testing-library/react'

import ProjectsPage from './page'
import { projectsCollection } from './project-collection'

describe('/projects/page', () => {
  it('displays page heading', () => {
    render(<ProjectsPage />)

    expect(screen.getByRole('heading', { name: /things i've helped build that make me smile/i })).toBeInTheDocument()
  })

  it.each(projectsCollection)('renders a link card for project $title', (project) => {
    render(<ProjectsPage />)

    const projectLink = screen.getByText(project.externalLink.title).closest('a')
    const projectHeader = screen.getByRole('heading', { name: project.title })
    const projectDescription = screen.getByText(project.description)
    const projectImageIcon = screen.getByAltText(`Project logo for ${project.title}`)

    expect(projectLink).toHaveAttribute('href', project.externalLink.href)
    expect(projectHeader).toBeInTheDocument()
    expect(projectDescription).toBeInTheDocument()
    expect(projectImageIcon).toBeInTheDocument()
  })
})
