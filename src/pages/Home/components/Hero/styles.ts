import styled from 'styled-components'

import * as RadioGroup from '@radix-ui/react-radio-group'

import HeroImage from '../../../../assets/png/HeroImage.png'
import GoogleChromecast from '../../../../assets/png/GoogleChromecast.png'
import HeroBackImage from '../../../../assets/svg/HeroBackImage.svg'
import RightBackImage from '../../../../assets/svg/RightBackImage.svg'

export const HeroContainer = styled.div`
  width: 100%;

  margin-top: 3.875rem;

  background-image: url(${HeroBackImage});
  background-repeat: no-repeat;
  background-position: 100%;
  background-size: contain;
`

export const HeroContent = styled.main`
  width: 90%;
  max-width: 95.625rem;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`

export const HeroHeader = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderType = styled(RadioGroup.Root)`
  display: flex;
  gap: 0.25rem;

  padding: 0.1875rem;

  border: 1px solid ${(props) => props.theme['blue-600']};
  border-radius: 4px;

  display: flex;
`

interface HeaderButtonsProps {
  variants?: 'profession' | 'private'
}

export const HeaderButton = styled(RadioGroup.Item)<HeaderButtonsProps>`
  padding: 0.5rem 0.9375rem;

  border: 0;
  border-radius: 2px;

  background-color: transparent;
  color: ${(props) => props.theme['gray-900']};

  cursor: pointer;

  font-size: 0.75rem;
  font-weight: 500;

  &[data-state='unchecked']:hover {
    background-color: ${(props) => props.theme['blue-600']};
    color: ${(props) => props.theme.white};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.variants === 'profession'
        ? props.theme['blue-600']
        : props.theme['blue-600']};
  }
`

export const HeaderButtonImpaired = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0.6875rem 1.375rem;

  border: 0;
  border-radius: 999px;

  cursor: pointer;

  background-color: ${(props) => props.theme['gray-300']};

  font-size: 0.75rem;
  font-weight: 500;
`

export const HeroMain = styled.main`
  width: 100%;

  display: flex;
  gap: 1.875rem;
`

export const MainLeft = styled.div`
  width: 100%;
  max-width: 66.5625rem;

  padding: 3.125rem 0;

  background: linear-gradient(180deg, #001834 0%, rgba(0, 24, 52, 0.85) 100%);
  color: #fff;

  border-radius: 8px;
`

export const MainLeftContent = styled.div`
  width: 90%;
  max-width: 60.3125rem;

  margin: 0 auto;

  display: flex;
  gap: 3.125rem;
`

export const MainLeftText = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 3.125rem;

  color: ${(props) => props.theme.white};

  span {
    font-size: 2rem;
    font-weight: 700;

    line-height: 130%;
  }

  p {
    font-size: 1rem;
    font-weight: 400;

    line-height: 150%;

    opacity: 0.95;
  }

  button {
    padding: 0.875rem 1.25rem;

    border: 0;
    border-radius: 4px;
    cursor: pointer;

    background-color: ${(props) => props.theme['blue-600']};
    color: ${(props) => props.theme.white};

    font-size: 0.875rem;
    font-weight: 600;
  }
`

export const MainLeftImage = styled.div`
  width: 100%;
  max-width: 35.5625rem;

  background-image: url(${HeroImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

export const MainRight = styled.div`
  width: 100%;
  max-width: 27.1875rem;

  padding: 2.5rem 0;

  background-color: ${(props) => props.theme['blue-600']};
  background-image: url(${RightBackImage});
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: right;

  border-radius: 8px;
`

export const MainRightContent = styled.div`
  width: 90%;
  max-width: 22.1875rem;

  margin: 0 auto;

  color: ${(props) => props.theme.white};

  display: flex;
  flex-direction: column;
  gap: 3.125rem;

  span {
    font-size: 1.75rem;
    font-weight: 700;

    line-height: 130%;
  }
`

export const RightImage = styled.div`
  width: 100%;
  max-width: 15.5625rem;
  height: 10rem;

  background-image: url(${GoogleChromecast});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const MainRightBottom = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  button {
    padding: 0.375rem;

    border: 0;
    border-radius: 99px;

    color: ${(props) => props.theme['blue-600']};

    cursor: pointer;
  }
`
