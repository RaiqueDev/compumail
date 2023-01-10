import { MagnifyingGlass, ShoppingBagOpen } from 'phosphor-react'

import { Logo } from '../../assets/Logo'
import { Denmark, Sweden, UK } from '../../assets/Flags'

import {
  ButtonCart,
  ButtonLogin,
  ButtonRegister,
  NavBarBrands,
  NavBarButtons,
  NavBarContainer,
  NavBarMain,
  NavBarSearch,
  SearchInput,
  SearchInputContent,
  SearchShortcuts,
} from './styles'

export const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <NavBarMain>
          <Logo />

          <NavBarSearch>
            <SearchInput>
              <SearchInputContent>
                <MagnifyingGlass size={22} color="#5E7790" weight="light" />
                <input type="text" placeholder="Find products" />
              </SearchInputContent>

              <SearchShortcuts>
                <span>CTRL</span>
                <span>K</span>
              </SearchShortcuts>
            </SearchInput>

            <NavBarBrands>
              <Denmark />
              <Sweden />
              <UK />
            </NavBarBrands>
          </NavBarSearch>

          <NavBarButtons>
            <ButtonRegister>Register</ButtonRegister>
            <ButtonLogin>Login</ButtonLogin>

            <ButtonCart>
              <ShoppingBagOpen size={24} color="#0A2540" weight="duotone" />

              <span>1</span>
            </ButtonCart>
          </NavBarButtons>
        </NavBarMain>
      </NavBarContainer>
    </>
  )
}
