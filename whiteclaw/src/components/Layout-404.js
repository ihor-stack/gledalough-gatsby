import React from 'react'

// Components
import Header from './Header'
import Footer from './Footer'

// CSS
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '../assets/css/styles.min.css'

const Layout404 = ({children, currentPage, customPage, activeDocMeta}) => {
  // console.log('layout 404 activeDoc', activeDocMeta)

  return(
    <>
      {/* Header */}
      <Header customPage={(currentPage)? currentPage : null} activeDocMeta={activeDocMeta}/>
      {(currentPage)?  <main id={currentPage}>{children}</main>
      : <main>{children}</main>
      }
      {/* Footer */}
      <Footer activeDocMeta={activeDocMeta} />
    </>
  )
}

export default Layout404