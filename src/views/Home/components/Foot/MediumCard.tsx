import React from 'react'
import styled from 'styled-components'
import orderBy from 'lodash/orderBy'
import { Card, CardBodySocial } from '@anpanswap/uikit'
import { Link } from 'react-router-dom'
import pools from 'config/constants/pools'
import { Pool } from 'state/types'



const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardImage = styled.img`
  position: center;
  padding: 2px;
`

const MediumCard = () => {
  const activeNonNapPools = pools.filter((pool) => !pool.isFinished && !pool.earningToken.symbol.includes('NAP'))
  const latestPools: Pool[] = orderBy(activeNonNapPools, ['sortOrder', 'pid'], ['desc', 'desc']).slice(0, 3)
  // Always include NAP
  const assets = ['NAP', ...latestPools.map((pool) => pool.earningToken.symbol)].join(', ')

  return (
    <StyledFarmStakingCard>
      <CardBodySocial>
       <StyledLink as="a" href="https://anpanswap.medium.com/" aria-label="Anpan Medium" target="_blank"> 
          <CardImage src="/images/medium.svg" width={176.5} height={176.5}/>
        </StyledLink>  
      </CardBodySocial>
    </StyledFarmStakingCard>
  )
}

export default MediumCard
