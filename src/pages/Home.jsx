import React from 'react'
import NavigationBar from '../components/General/NavigationBar'
import Profile from '../components/Home/Profile'

export default function Home() {
  return (
    <>
    <NavigationBar activeElement="Home"></NavigationBar>
    <Profile></Profile>
    </>
  )
}
