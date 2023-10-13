import React from "react"
import { Waypoint } from "react-waypoint"

const PageScroll = ({ className, children }) => {
  const handleEnter = (id, waypoint) => {
    const isBrowser = typeof window !== `undefined`
    if (!isBrowser || !id) return
    console.log(`Waypoint Enter = ${id}`)
    console.log(waypoint)
  }
  const handleLeave = (id, waypoint) => {
    const isBrowser = typeof window !== `undefined`
    if (!isBrowser || !id) return
    console.log(`Waypoint Leave = ${id}`)
    console.log(waypoint)
  }

  return (
    <>
      {children.map((child, key) => (
        <Waypoint
          key={key}
          className={`page-scroll ${className}`}
          topOffset="50px"
          bottomOffset="50px"
          onEnter={(wp) => handleEnter(child.props.id, wp)}
          onLeave={(wp) => handleLeave(child.props.id, wp)}>
          <div className={`waypoint ${child.props.id || ""}`}>{child}</div>
        </Waypoint>
      ))}
    </>
  )
}

export default PageScroll
