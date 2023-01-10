import styled, { css } from 'styled-components'

export const AllProductsContainer = styled.div`
  width: 100%;

  position: absolute;
  transition: 0.1s ease-in;
`

export const AllProductsMain = styled.main`
  width: 90%;
  max-width: 95.625rem;

  margin: 0 auto;
`

export const AllProductsGrid = styled.div`
  width: 100%;
  max-width: 60rem;
  height: 35rem;

  padding: 2.1875rem 0;

  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.1875rem;
`

interface GridItemProps {
  variants?: 'Grid-One' | 'Grid-Two' | 'Grid-Three'
}

export const GridItem = styled.div<GridItemProps>`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;

  overflow: auto;

  ${(props) => props.variants === 'Grid-One' && css``}
  ${(props) => props.variants === 'Grid-Two' && css``}
  ${(props) => props.variants === 'Grid-Three' && css``}
`

interface ButtonLinkProps {
  variants?: 'Dark'
}

export const ButtonLink = styled.button<ButtonLinkProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.625rem;

  padding: 0.625rem 2.1875rem;

  border: 0;
  border-radius: 0;

  outline: 0;
  box-shadow: 0;

  background-color: transparent;

  cursor: pointer;

  span {
    font-size: 0.875rem;
    font-weight: 500;

    color: ${(props) => props.theme['blue-900']};
  }

  ${(props) =>
    props.variants === 'Dark' &&
    css`
      background-color: orangered;
    `}
`
