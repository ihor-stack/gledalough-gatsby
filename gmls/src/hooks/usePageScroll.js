import { useState, useEffect } from 'react'

const usePageScroll = () => {
  const [pageScrollY, setpageScrollY] = useState(0)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updatePageScroll = () => {
      const scrollY = window.pageYOffset

      if (scrollY - lastScrollY > 50 || scrollY - lastScrollY < -50) {
        setpageScrollY(scrollY)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }
    window.addEventListener('scroll', updatePageScroll) // add event listener
    return () => {
      window.removeEventListener('scroll', updatePageScroll) // clean up
    }
  }, [pageScrollY])

  return pageScrollY
}

export default usePageScroll
