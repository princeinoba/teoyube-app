import React from 'react'
import CardBtn from '../CardBtn'
import {useLanguage} from '../../utils/LanguageContext'
import './style.css'

function LanguageSelector() {
  const {language, nextLanguage, previousLanguage} = useLanguage()
  return (
    <div>
      {/* <p className="lead text-center">Select the user language below:</p> */}
      <div className="language-btn">
        <CardBtn onClick={nextLanguage} type="back" />
          <span className="text-center">{language}</span>
        <CardBtn onClick={previousLanguage} type="next" />
      </div>
    </div>
  )
}

export default LanguageSelector
