import React, { useContext } from 'react'
import { pagecontext } from './hooks/BookingModalPage'
import ConfirmPageOne from './ConfirmPageOne'
import ConfirmPageTwo from './ConfirmPageTwo'
import ConfirmPageThree from './ConfirmPageThree'
import UserDetails from '../UserDetails'

export default function PageComfirm() {
  const { bookingpage } = useContext(pagecontext)
  return (
    <div>
      {bookingpage === 1 && <ConfirmPageOne />}
      {bookingpage === 2 && <ConfirmPageTwo />}
      {bookingpage === 3 && <ConfirmPageThree />}
      {bookingpage === 4 && <UserDetails />}
    </div>
  )
}