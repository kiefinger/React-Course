'use client'

import Image from 'next/image'
import MeetupList from '../components/meetups/MeetupList';
import {useEffect, useState} from 'react'


const DUMMY_MEETUPS = [
    {
        id: "1",
        title: "Munich",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        address: " Some address, 54542 Som eCity",
        description: "This is a meetup"
    },
    {
        id: "2",
        title: "Hamburg",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        address: " Some address, 54542 Som Hamburg",
        description: "This is a Hamburg"
    },
]

export default function Home() {

    [meetups, setMeetups] = useState([]);

    useEffect ( () => {
        setMeetups(DUMMY_MEETUPS);
    });
  return (
    <MeetupList meetups={meetups} />
   )
}
