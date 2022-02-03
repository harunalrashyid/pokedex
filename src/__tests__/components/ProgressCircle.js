import React from 'react'
import { render, screen } from '@testing-library/react'
import styled, { ThemeProvider } from 'styled-components'
import '@testing-library/jest-dom'

import ProgressCircle from '@components/ProgressCircle'
import theme from '@styled/theme'

describe('Component ProgressCircle', () => {
  const progressLabel = 'Attack'
  const progressValue = 100

  it('Should render correctly', () => {
    render(
      <ThemeProvider theme={ theme }>
        <ProgressCircle
          label={progressLabel}
          value={progressValue}
        />
      </ThemeProvider>
    )

    const label = screen.getByText(progressLabel)
    const value = screen.getByText(progressValue)
    
    expect(label).toBeInTheDocument()
    expect(value).toBeInTheDocument()
  })
})