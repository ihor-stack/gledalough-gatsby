import React from 'react'
import styled from 'styled-components'
import { buttonBlank, gutter } from '../constants/styles'
import { COLOR, FONT } from '../constants'
import { slugify } from '../utils/filters'

const PanelContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 1.75rem 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: ${FONT.monospace};
  font-size: 0.825rem;
  z-index: 100;
  position: relative;
  ${gutter}
`

const Label = styled.span`
  letter-spacing: 2.8px;
  text-transform: uppercase;
  margin-right: 2rem;
`

const FilterButton = styled.button`
  ${buttonBlank}
  letter-spacing: 2.8px;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 0.825rem;
  padding: 0.75rem 0.75rem;
  margin-right: 0.5rem;
  &:hover {
    color: ${COLOR.black};
  }
  ${(props) =>
    props['data-active'] == 'true' &&
    `
    color: ${COLOR.black};
    border: 1px solid black;
    border-radius: 2rem;
    padding: 0.75rem 2rem;
  `}
`

const ProductFilter = ({ slice }) => {
  const [activeFilter, setActiveFilter] = React.useState('all')

  const items = slice?.items?.map((item) => ({
    ...item,
    key: slugify(item?.category),
  }))

  const handleFilterClick = (category) => {
    setActiveFilter(category)
    // get all data-category attributes
    const items = document.querySelectorAll('[data-category]')
    // show only items with matching category
    items.forEach((item) => {
      if (category === 'all') {
        item.style.display = 'flex'
      } else if (item.dataset.category === category) {
        item.style.display = 'flex'
      } else {
        item.style.display = 'none'
      }
    })
    // if category is all, show all items
    if (category === 'all') {
      items.forEach((item) => {
        item.style.display = 'flex'
      })
    }
  }

  return (
    <PanelContainer
      style={{
        backgroundColor: slice.primary.background_color || COLOR.warmwhite,
      }}
    >
      <Label>{slice?.primary?.label?.text || 'FILTER'}:</Label>
      <FilterButton
        data-active={(activeFilter === 'all').toString()}
        onClick={() => handleFilterClick('all')}
      >
        All
      </FilterButton>
      {items?.map((item, index) => {
        return (
          <FilterButton
            key={index}
            data-active={(item.key === activeFilter).toString()}
            onClick={() => handleFilterClick(item.key)}
          >
            {item?.category}
          </FilterButton>
        )
      })}
    </PanelContainer>
  )
}

export default ProductFilter
