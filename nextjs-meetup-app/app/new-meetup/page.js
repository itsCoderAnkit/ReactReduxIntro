"use client" 
//  According to the documentation, you cannot import a component that 
// needs useRef or any other React Hook into a Server Component, because Hooks only work 
// in Client Components2. To fix this, you need to mark the component that imports useRef 
// with the use client directive at the top of the module

import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import React from 'react'

function NewMeetUpPage() {

    function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData)
    }
  return (
    <NewMeetupForm onAddMeetup ={addMeetupHandler} />
  )
}

export default NewMeetUpPage
