import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import get from 'utils/get'

const MeiliSearchName = styled.div`
  margin-left: 12px;
  @media (min-width: ${get('breakpoints.tablet')}) {
    display: none;
  }

  @media (min-width: ${get('breakpoints.desktop')}) {
    display: block;
  }
`

const Logos = styled.div`
  display: flex;
  align-items: center;
`

const Logo = () => (
  <Logos>
    <Image
      src="/images/meili-logo.svg"
      height={35}
      width={60}
      layout="fixed"
      alt="MeiliSearch Logo"
    />
    <MeiliSearchName>
      <Image
        src="/images/meili.svg"
        height={25}
        width={67}
        layout="fixed"
        alt="Meili name"
      />
      <Image
        src="/images/search.svg"
        height={25}
        width={93}
        layout="fixed"
        alt="Search"
      />
    </MeiliSearchName>
  </Logos>
)

export default Logo