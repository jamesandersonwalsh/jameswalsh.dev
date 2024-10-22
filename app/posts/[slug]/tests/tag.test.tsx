import { act, render, screen } from '@testing-library/react'

import { Tag } from '../tag'

describe('posts/[slug]/tag', () => {
  it.each([
    ['jessica', 'blue'],
    ['ted', 'fuchsia'],
    ['rowan', 'violet'],
    ['james', 'emerald'],
  ])(`displays tag when text='%s' with %s color`, async (text, expectedColor) => {
    await act(() => render(<Tag text={text} />))

    expect(screen.getByText(`#${text}`)).toHaveClass(`bg-${expectedColor}-900`)
  })
})
