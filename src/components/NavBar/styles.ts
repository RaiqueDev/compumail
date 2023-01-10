import styled from 'styled-components'

export const NavBarContainer = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme['gray-200']};
`

export const NavBarMain = styled.main`
  width: 90%;
  max-width: 95.625rem;
  height: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
`

export const NavBarSearch = styled.div`
  width: 729px;
  height: 100%;
  background-color: ${(props) => props.theme['gray-100']};
  padding: 0 0 0 1.875rem;

  display: flex;
  gap: 1.875rem;
`

export const SearchInput = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
`

export const SearchInputContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  input {
    padding: 0.5rem;
    border: 0;

    box-shadow: 0 0 0 2px ${(props) => props.theme['gray-100']};
    background-color: transparent;

    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const SearchShortcuts = styled.div`
  display: flex;
  gap: 0.375rem;

  span {
    padding: 0.3125rem 0.625rem;

    background-color: ${(props) => props.theme['gray-200']};
    color: ${(props) => props.theme['gray-800']};

    font-size: 0.75rem;
    font-weight: 500;
  }
`

export const NavBarBrands = styled.div`
  height: 100%;

  padding: 1.25rem;

  display: flex;
  align-items: center;
  gap: 1.25rem;

  background-color: ${(props) => props.theme.white};
`

export const NavBarButtons = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const ButtonRegister = styled.button`
  padding: 0 1.25rem;

  border: 2px solid ${(props) => props.theme['gray-900']};
  border-radius: 4px;

  cursor: pointer;

  background-color: transparent;

  font-size: 0.875rem;
  font-weight: 500;
`

export const ButtonLogin = styled.button`
  padding: 0.2rem 1.25rem;

  border: 0;
  border-radius: 4px;

  cursor: pointer;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['blue-900']};

  font-size: 0.875rem;
  font-weight: 500;
`

export const ButtonCart = styled.button`
  padding: 0.5625rem 0.75rem;

  border: 0;
  border-radius: 4px;

  cursor: pointer;
  line-height: 0;

  background-color: ${(props) => props.theme['gray-200']};

  position: relative;

  span {
    position: absolute;

    padding: 10px 8px;

    border-radius: 99px;
    bottom: 1.9rem;

    background-color: ${(props) => props.theme['blue-600']};
    color: ${(props) => props.theme.white};

    font-size: 0.625rem;
    font-weight: 700;
  }
`
