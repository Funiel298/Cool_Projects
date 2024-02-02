'use client'
import { useState } from "react"
import Card from "./card"
import List from "./list"
export default function list(){

    const cards = [
        {
          name: 'Create new video for YouTube',
          tags: ['YouTube', 'UI', 'UX'],
          deadline: 14,
          importance: 'Important',
          image: 'https://img.freepik.com/premium-photo/glowing-youtube-logo-pattern_1379-4911.jpg?size=626&ext=jpg&ga=GA1.1.1225704836.1691402271&semt=sph',
          tasksCompleted: 7,
          totalTasks: 10
        },
        {
          name: 'Design website landing page',
          tags: ['Web Design', 'UI', 'HTML', 'CSS'],
          deadline: 10,
          importance: 'High',
          image: 'https://img.freepik.com/free-photo/motherboard-closeup-technology-integrated-microchip-circuit-board-computer-processor-with-neon-light_90220-1203.jpg?size=626&ext=jpg&ga=GA1.2.1225704836.1691402271&semt=sph',
          tasksCompleted: 6,
          totalTasks: 12
        },
        {
          name: 'Write blog post on JavaScript tips',
          tags: ['JavaScript', 'Programming', 'Tips'],
          deadline: 7,
          importance: 'Medium',
          image: 'https://img.freepik.com/free-photo/top-view-of-smartphone-with-keyboard-and-charger_23-2149404179.jpg?size=626&ext=jpg&ga=GA1.2.1225704836.1691402271&semt=sph',
          tasksCompleted: 4,
          totalTasks: 20
        },
        {
          name: 'Prepare presentation for conference',
          tags: ['Presentation', 'Conference', 'Slides'],
          deadline: 21,
          importance: 'High',
          image: 'https://img.freepik.com/free-photo/digital-device-eletronic-networking-media_53876-31695.jpg?size=626&ext=jpg&ga=GA1.2.1225704836.1691402271&semt=sph',
          tasksCompleted: 26,
          totalTasks: 112
        },
        {
          name: 'Plan vacation trip',
          tags: ['Travel', 'Vacation', 'Planning'],
          deadline: 30,
          importance: 'Medium',
          image: 'https://img.freepik.com/free-photo/digital-device-eletronic-networking-media_53876-31695.jpg?size=626&ext=jpg&ga=GA1.2.1225704836.1691402271&semt=sph',
          tasksCompleted: 8,
          totalTasks: 10
        },
        {
          name: 'Review quarterly financial reports',
          tags: ['Finance', 'Reports', 'Analysis'],
          deadline: 7,
          importance: 'Important',
          image: 'https://img.freepik.com/free-photo/3d-illustration-of-blue-and-purple-futuristic-sci-fi-techno-lights-cool-background_181624-57587.jpg?size=626&ext=jpg&ga=GA1.2.1225704836.1691402271&semt=sph',
          tasksCompleted: 7,
          totalTasks: 11
        },
        {
          name: 'Organize team-building event',
          tags: ['Team Building', 'Event', 'Teamwork'],
          deadline: 14,
          importance: 'High',
          image: 'https://img.freepik.com/free-photo/3d-illustration-of-blue-and-purple-futuristic-sci-fi-techno-lights-cool-background_181624-57587.jpg?size=626&ext=jpg&ga=GA1.2.1225704836.1691402271&semt=sph',
          tasksCompleted: 67,
          totalTasks: 57
        },
        {
          name: 'Learn new programming language',
          tags: ['Programming', 'Learning', 'Skills'],
          deadline: null,
          importance: 'Low',
          image: 'https://img.freepik.com/free-photo/checking-current-in-laptop-circuit-board_1098-13759.jpg?size=626&ext=jpg&ga=GA1.2.1225704836.1691402271&semt=sph',
          tasksCompleted: 23,
          totalTasks: 23
        }
      ];
      
      // You now have eight card objects in the array, each representing a different task or item with its properties.
      
    

    return(
        <div className="flex flex-wrap flex-row p-4">

            <List cards={cards} name={'Summer plans'} />
            
        </div>
    )
}