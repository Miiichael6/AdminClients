import React from 'react'
import GetIntoForm from '../components/GetIntoForm'
import useHideMenu from '../hooks/useHideMenu'

const Getinto = () => {
  useHideMenu(false)

  return (
    <div>
      <GetIntoForm />
    </div>
  )
}

export default Getinto