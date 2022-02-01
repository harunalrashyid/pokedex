import React from 'react'
import styled from 'styled-components'

import theme from '@styled/theme'

const circleRadius = 4
const strokeDasharray = 282.783

const ProgressCircle = ({ label, value, width }) => {
  const strokeDashoffset = strokeDasharray - value // not accurate but, this will do for current demos

  return (
    <Progress width={width}>
      <ProgressShape>
        <svg viewBox="0 0 100 100">
          <path d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90" stroke={theme.color.light} strokeWidth={circleRadius} fillOpacity="0"></path>
          <path d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90" stroke={theme.color.blue} strokeWidth={circleRadius} strokeDasharray={strokeDasharray + ' ' + strokeDasharray} fillOpacity="0" style={{ strokeDashoffset }}></path>
        </svg>
      </ProgressShape>
      {<ProgressContent>
        <ProgressLabel>{label}</ProgressLabel>
        <ProgressValue>{value}</ProgressValue>
      </ProgressContent>}
    </Progress>
  )
}

export default ProgressCircle

const Progress = styled.div`
  position: relative;
  width: ${props => props.width};
`
const ProgressShape = styled.div`
  svg {
    width: 100%;
    height: 100%;
  }
`
const ProgressContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 85%;
  transform: translate(-50%, -50%);
  text-align: center;
`
const ProgressLabel = styled.h5`
  color: #777777;
  font-weight: normal;
  margin: 0;
`
const ProgressValue = styled.span`
  font-weight: bold;
`
