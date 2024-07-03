import React from 'react'
import BackIcon from '../../Components/BackIcon'
import HeaderOne from '../../Components/HeaderOne'
import HeaderSix from '../../Components/HeaderSix'
import Calender from '../../Components/SiteVisitComponents/Calender'
import SiteVisitHorizontal from '../../Components/SiteVisitComponents/SiteVisitHorizontal'
import Time from '../../Components/SiteVisitComponents/Time'
import SiViSingleButton from '../../Components/SiteVisitComponents/SiViSingleButton'
import { FooterIn, NormalHeaderBar } from '../../Components'

export default function SiteVisitSeven() {
  return (
    <div>
      <NormalHeaderBar />
      <BackIcon />
      <HeaderOne value='Scheduling Site Visit' />
      <HeaderSix value='Scheduling Your Site Visit Here!' />
      <SiteVisitHorizontal />
      <Calender />
      <Time />
      <SiViSingleButton value='Update' />
      <FooterIn />

    </div>
  )
}
