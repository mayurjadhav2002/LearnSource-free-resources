'use client'
import React from 'react'
import { UserSessionProvider, useUserContext } from '../auth/userContext/userContext'
import Sidebar from './components/sidebar'

function page() {
  return (
    <div>
<Sidebar />

    </div>
  )
}

export default page