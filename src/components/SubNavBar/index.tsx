import { useContext } from 'react'

import { AllProducts } from './components/AllProducts'
import { AllProductsContext } from '../../contexts/AllProductsContext'

import {
  SubNavBarButton,
  SubNavBarContainer,
  SubNavBarLeft,
  SubNavBarLeftButton,
  SubNavBarMain,
} from './styles'

import {
  CaretDown,
  Desktop,
  DeviceMobile,
  GameController,
  GearSix,
  Laptop,
  Tag,
} from 'phosphor-react'

export const SubNavBar = () => {
  const { handleAllProductsButton } = useContext(AllProductsContext)

  return (
    <>
      <SubNavBarContainer>
        <SubNavBarMain>
          <SubNavBarLeft>
            <SubNavBarLeftButton onClick={handleAllProductsButton}>
              <CaretDown size={16} color="#0A2540" weight="bold" />
              <span>Alle Produkter</span>
            </SubNavBarLeftButton>

            <SubNavBarLeftButton>
              <Tag size={16} color="#0A2540" weight="bold" />
              <span>Kampagner</span>
            </SubNavBarLeftButton>

            <SubNavBarLeftButton>
              <GameController size={16} color="#0A2540" weight="bold" />
              <span>Gaming</span>
            </SubNavBarLeftButton>

            <SubNavBarLeftButton>
              <Laptop size={16} color="#0A2540" weight="bold" />
              <span>Bærbar</span>
            </SubNavBarLeftButton>

            <SubNavBarLeftButton>
              <Desktop size={16} color="#0A2540" weight="bold" />
              <span>Skærme</span>
            </SubNavBarLeftButton>

            <SubNavBarLeftButton>
              <DeviceMobile size={16} color="#0A2540" weight="bold" />
              <span>Smartphones</span>
            </SubNavBarLeftButton>

            <SubNavBarLeftButton variants="PC-Config">
              <GearSix size={16} color="#ffffff" weight="bold" />
              <span>Pc Konfigurator</span>
            </SubNavBarLeftButton>
          </SubNavBarLeft>

          <SubNavBarButton>Fri fragt på alle order over 1000kr</SubNavBarButton>
        </SubNavBarMain>
      </SubNavBarContainer>

      <AllProducts />
    </>
  )
}
