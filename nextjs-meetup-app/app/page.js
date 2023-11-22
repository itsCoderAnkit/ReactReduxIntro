import Layout from '@/components/layout/Layout'
import MeetupList from '@/components/meetups/MeetupList'
import React, { useEffect } from 'react'


const DUMMY_MEETUPS = [
  {
    id:'m1',
    title:'A First Meetup',
    image:'https://media.istockphoto.com/id/502588750/photo/brihadeeswarar-temple-in-thanjavur.jpg?s=1024x1024&w=is&k=20&c=phDju5iW-QTHSqtEJge_oaOZFRuufS9DW-V5wlCuqAA=',
    address:'Some address',
    description:'This is a First Meetup'
  },
  {
    id:'m2',
    title:'A Second Meetup',
    image:'https://media.istockphoto.com/id/502588750/photo/brihadeeswarar-temple-in-thanjavur.jpg?s=1024x1024&w=is&k=20&c=phDju5iW-QTHSqtEJge_oaOZFRuufS9DW-V5wlCuqAA=',
    address:'Another address',
    description:'This is a Second Meetup'
  }
]

function HomePage() {

const [loadedMeetups,setLoadedMeetups] =  useState([])
  useEffect(()=>{
    setLoadedMeetups(DUMMY_MEETUPS)
  },[])
  return (
  
   <MeetupList meetups={props.meetups}/>
  
  )
}

export async function getStaticProps(){
  // fetch data from API or other source

  return {
    props:{
      meetups:DUMMY_MEETUPS
    }
  }
}

export default HomePage
