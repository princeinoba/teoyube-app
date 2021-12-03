import React, {useState, useEffect} from 'react'
import {languages} from '../utils/API'

const lastIndex = languages?.length - 1

const LanguageContext = React.createContext()

export function LanguageProvider(props) {
  const [language, setLanguage] = useState(languages[0])
  const [languageIndex, setLanguageIndex] = useState(0)

  useEffect(() => {
    setLanguage(languages[languageIndex])
  }, [languageIndex])

  function nextLanguage() {
    setLanguageIndex(prevIndex => (prevIndex === lastIndex ? 0 : prevIndex + 1))
  }

  function previousLanguage() {
    setLanguageIndex(prevIndex => (prevIndex === 0 ? lastIndex : prevIndex - 1))
  }

  return (
    <LanguageContext.Provider
      value={{language, nextLanguage, previousLanguage}}
      {...props}
    />
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (!context)
    throw new Error(
      'useLanguage must be called from a descendent of LanguageProvider.'
    )

  return context
}
