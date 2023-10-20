import React from 'react'
import { useContext } from 'react'
import { Waypoint } from 'react-waypoint'
import { WaypointContext } from '../hooks/WaypointContext.js';

const PageScroll = ({ className, children }) => {
  const [waypoint, setWaypoint] = useContext(WaypointContext);

  const handleEnter = (id, wp) => {
    const isBrowser = typeof window !== `undefined`
    if (!isBrowser || !id) return
    console.log(`Waypoint Enter = ${id}`)
    //console.log(wp)
    setWaypoint(id)

  }
  const handleLeave = (id, wp) => {
    const isBrowser = typeof window !== `undefined`
    if (!isBrowser || !id) return
    console.log(`Waypoint Leave = ${id}`)
    //console.log(wp)
  }

  return (
    <>
      <Waypoint
        className={`page-scroll ${className}`}
        topOffset="100px"
        bottomOffset="100px"
        onEnter={(wp) => handleEnter(children.props?.slice?.slice_type, wp)}
        onLeave={(wp) => handleLeave(children.props?.slice?.slice_type, wp)}
      >
        <div className={`waypoint ${children.props?.slice?.slice_type || ''}`}>
          {children}
        </div>
      </Waypoint>
    </>
  )
  // return (
  //   <>
  //     {children.map((child, key) => (
  //       <Waypoint
  //         key={key}
  //         className={`page-scroll ${className}`}
  //         topOffset="50px"
  //         bottomOffset="50px"
  //         onEnter={(wp) => handleEnter(child.props.id, wp)}
  //         onLeave={(wp) => handleLeave(child.props.id, wp)}
  //       >
  //         <div className={`waypoint ${child.props.id || ''}`}>{child}</div>
  //       </Waypoint>
  //     ))}
  //   </>
  // )
}

export default PageScroll
