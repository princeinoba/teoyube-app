import React from 'react'
import Card from '../components/Card'
import Row from '../components/Row'
import {LanguageProvider} from '../utils/LanguageContext'
import {UserProvider} from '../utils/UserContext'
import LanguageSelector from '../components/LanguageSelector'
import './Gallery.css'

// import { Row, Card, } from "reactstrap";

function Gallery() {
  return (
    <div>
      {/* <h1 className="text-center">Welcome to LinkedUp</h1> */}
      {/* <p className="lead text-center">Click on the arrows to browse users</p> */}
      <LanguageProvider>
        <LanguageSelector />
        <Row>
          <UserProvider>
            <Card />
          </UserProvider>
        </Row>
      </LanguageProvider>
    </div>
  )
}

export default Gallery
