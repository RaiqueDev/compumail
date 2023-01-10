import { useContext } from 'react'
import { AllProductsContext } from '../../../../contexts/AllProductsContext'

import {
  Armchair,
  Cpu,
  Desktop,
  DeviceMobile,
  Football,
  GameController,
  HardDrives,
  HouseLine,
  Key,
  Laptop,
  Monitor,
  Plug,
  Printer,
  Screencast,
  Tag,
  VideoCamera,
} from 'phosphor-react'

import {
  AllProductsContainer,
  AllProductsMain,
  AllProductsGrid,
  GridItem,
  ButtonLink,
} from './styles'

export const AllProducts = () => {
  const { isOpen } = useContext(AllProductsContext)

  return (
    <>
      <AllProductsContainer
        style={{ visibility: isOpen ? 'visible' : 'hidden' }}
      >
        <AllProductsMain>
          <AllProductsGrid>
            <GridItem>
              <ButtonLink>
                <Desktop size={24} color="#001834" weight="light" />

                <span>Preowned IT og reservedele</span>
              </ButtonLink>

              <ButtonLink>
                <Tag size={24} color="#001834" weight="light" />

                <span>Tilbud/Outlet</span>
              </ButtonLink>

              <ButtonLink>
                <HouseLine size={24} color="#001834" weight="light" />

                <span>Hjem & Fritid</span>
              </ButtonLink>

              <ButtonLink>
                <DeviceMobile size={24} color="#001834" weight="light" />

                <span>Mobiler & Tilbehør</span>
              </ButtonLink>

              <ButtonLink>
                <Screencast size={24} color="#001834" weight="light" />

                <span>Smart Home</span>
              </ButtonLink>

              <ButtonLink>
                <Laptop size={24} color="#001834" weight="light" />

                <span>Computere & Tablets</span>
              </ButtonLink>

              <ButtonLink>
                <GameController size={24} color="#001834" weight="light" />

                <span>Gaming</span>
              </ButtonLink>

              <ButtonLink>
                <Cpu size={24} color="#001834" weight="light" />

                <span>Komponenter</span>
              </ButtonLink>

              <ButtonLink>
                <Printer size={24} color="#001834" weight="light" />

                <span>Printer & Tilbehør</span>
              </ButtonLink>

              <ButtonLink>
                <Desktop size={24} color="#001834" weight="light" />

                <span>Skræme & Projektorer</span>
              </ButtonLink>

              <ButtonLink>
                <Monitor size={24} color="#001834" weight="light" />

                <span>TV, Hifi, Kamera</span>
              </ButtonLink>

              <ButtonLink>
                <Plug size={24} color="#001834" weight="light" />

                <span>Kabler & Adaptere</span>
              </ButtonLink>

              <ButtonLink>
                <HardDrives size={24} color="#001834" weight="light" />

                <span>Servere & NAS</span>
              </ButtonLink>

              <ButtonLink>
                <VideoCamera size={24} color="#001834" weight="light" />

                <span>Netværk & Overvågning</span>
              </ButtonLink>

              <ButtonLink>
                <Armchair size={24} color="#001834" weight="light" />

                <span>Kontormøbler</span>
              </ButtonLink>

              <ButtonLink>
                <Key size={24} color="#001834" weight="light" />

                <span>Software</span>
              </ButtonLink>

              <ButtonLink>
                <Football size={24} color="#001834" weight="light" />

                <span>Sport Ernæring</span>
              </ButtonLink>
            </GridItem>
          </AllProductsGrid>
        </AllProductsMain>
      </AllProductsContainer>
    </>
  )
}
