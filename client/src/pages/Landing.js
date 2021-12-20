import React from 'react'
import styled from 'styled-components'

const Landing = () => {
  return (
    <StyledLanding>
       <div className='yellow'></div>
    </StyledLanding>
  )
}

const StyledLanding = styled.div `
    .yellow {
      height: 300vh;
      background: yellow;
    }
`

export default Landing
