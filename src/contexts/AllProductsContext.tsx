import { useState, ReactNode, createContext } from 'react'

interface AllProductsContextType {
  isOpen: any
  setIsOpen: any
  handleAllProductsButton: any
}

export const AllProductsContext = createContext({} as AllProductsContextType)

interface ChildrenProps {
  children?: ReactNode
}

export const AllProductsContextProvider = ({ children }: ChildrenProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleAllProductsButton = () => {
    if (isOpen === false) {
      setIsOpen(true)
    } else if (isOpen === true) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <AllProductsContext.Provider
        value={{ isOpen, setIsOpen, handleAllProductsButton }}
      >
        {children}
      </AllProductsContext.Provider>
    </>
  )
}
