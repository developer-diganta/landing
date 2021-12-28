import React from 'react'
import styled from 'styled-components'
import GithubButton from 'components/GithubButton'
import Container from 'components/Container'
import get from 'utils/get'
import Logo from './Logo'
import MenuLinks from './MenuLinks'
import Ctas from './Ctas'

const Grid = styled(Container)`
  display: none;
  @media (min-width: ${get('breakpoints.tablet')}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 46px 26px;
  }
`

const DesktopHeader = ({ headerProps, stargazers_count }) => {
  return (
    <Grid>
      <Logo />
      <MenuLinks headerProps={headerProps} />
      <GithubButton count={stargazers_count} />
      <Ctas headerProps={headerProps} />
    </Grid>
  )
}

export default DesktopHeader