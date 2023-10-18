import { useLocation } from '@reach/router'

const useCurrentLocation = () => {
    const { pathname } = useLocation()
    let currentPage = pathname.split('/').slice(1)[0]
    currentPage = currentPage !== '' ? currentPage : 'home'

  return {
    pathname,
    currentPage,
  }
}

export default useCurrentLocation
