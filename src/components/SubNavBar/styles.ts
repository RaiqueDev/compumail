import styled, { css } from 'styled-components'

export const SubNavBarContainer = styled.div`
  width: 100%;
  height: 3.75rem;

  display: flex;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme['gray-200']};
`

export const SubNavBarMain = styled.main`
  width: 90%;
  max-width: 95.625rem;
  height: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
`

export const SubNavBarLeft = styled.div`
  display: flex;
  gap: 3.75rem;
`

interface LeftButtonProps {
  variants?: 'PC-Config'
}

export const SubNavBarLeftButton = styled.button<LeftButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  border: 0;
  border-radius: 4px;

  background-color: transparent;
  cursor: pointer;

  padding: 0.5rem;

  span {
    font-size: 0.875rem;
    font-weight: 500;

    color: ${(props) => props.theme['blue-800']};
  }

  ${(props) =>
    props.variants === 'PC-Config' &&
    css`
      padding: 0.75rem;

      background-color: ${(props) => props.theme['blue-900']};

      span {
        color: ${(props) => props.theme.white};
      }
    `}
`

export const SubNavBarButton = styled.button`
  padding: 0.625rem 1.25rem;

  border: 0;
  border-radius: 999px;

  background-color: ${(props) => props.theme['blue-600']};
  color: ${(props) => props.theme.white};

  font-size: 0.75rem;
  font-weight: 600;

  cursor: pointer;
`
