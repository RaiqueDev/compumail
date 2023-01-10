import { ArrowRight } from 'phosphor-react'
import {
  MainRightBottom,
  HeaderButton,
  HeaderButtonImpaired,
  HeaderType,
  HeroContainer,
  HeroContent,
  HeroHeader,
  HeroMain,
  MainLeft,
  MainLeftContent,
  MainLeftImage,
  MainLeftText,
  MainRight,
  MainRightContent,
  RightImage,
} from './styles'

export const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroHeader>
            <HeaderType>
              <HeaderButton value="profession" variants="profession">
                Erhverv
              </HeaderButton>

              <HeaderButton value="private" variants="private">
                Privat
              </HeaderButton>
            </HeaderType>

            <HeaderButtonImpaired>
              Nedsatte varer i vores outlet
              <ArrowRight size={24} />
            </HeaderButtonImpaired>
          </HeroHeader>

          <HeroMain>
            <MainLeft>
              <MainLeftContent>
                <MainLeftText>
                  <span>
                    Bredt udvalg af <br />
                    produkter fra Ubiquiti
                  </span>

                  <p>
                    Ubiquiti er kendt for deres solide netværks <br />
                    løsninger til både private og <br />
                    erhvervsdrivende
                  </p>

                  <button>Se Hele Udvalget </button>
                </MainLeftText>

                <MainLeftImage />
              </MainLeftContent>
            </MainLeft>

            <MainRight>
              <MainRightContent>
                <span>Google Chromecast med Google TV 4K</span>

                <RightImage />

                <MainRightBottom>
                  <span>551,00 DKK</span>

                  <button> --&gt; </button>
                </MainRightBottom>
              </MainRightContent>
            </MainRight>
          </HeroMain>
        </HeroContent>
      </HeroContainer>
    </>
  )
}
