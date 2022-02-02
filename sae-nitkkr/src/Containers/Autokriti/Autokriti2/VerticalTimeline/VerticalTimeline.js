import React, { Component } from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

function VerticalTimeline(){
    return(
        <>
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001"
                    dateText="12 / 02 / 2022"
                    dateInnerStyle={{ background: '#e86971', color: '#000' }}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3>Day 1</h3>
                    <h4>Introduction</h4>
                    <p>
                    Starting with the various components composing an automobile’s transmission, Day 1 involves- 1. Relation between power, torque and rpm. 2. Why do need transmission 3. Different types of transmission 4. Gear types and related terminology. By the end of the day, you’ll have deep insight of what really happens when gears are changed or when clutch pedal is pressed.
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="04/2009 – 11/2010"
                    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
                    <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
                    <p>
                    Once we are thorough with the functioning of different units of a drivetrain, we'll move to the designing part. And the first step towards designing is the knowledge of what numbers we wish achieve from our machine i.e., 1. Max Torque, power and rpm 2. No. of gears, etc. . The subsequent session takes you deeper into designing fundamentals of gearbox, axle and shafts. And together we’ll do the calculations, taking into consideration all the constraints (space, cost and design limitations), to get the desired output.
                    </p>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                    </p>
                </TimelineItem>
                {/* <TimelineItem
                    key="003"
                    dateComponent={(
                    <div
                        style={{
                        display: 'block',
                        float: 'left',
                        padding: '10px',
                        background: 'rgb(150, 150, 150)',
                        color: '#fff',
                        }}
                    >
                        11/2008 – 04/2009
                    </div>
                    )}
                >
                    <h3>Title, Company</h3>
                    <h4>Subtitle</h4>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                    </p>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                    </p>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="004"
                    dateText="08/2008 – 11/2008"
                    dateInnerStyle={{ background: '#76bb7f' }}
                >
                    <h3>Title, Company</h3>
                    <h4>Subtitle</h4>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                    </p>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                    </p>
                </TimelineItem> */}
                </Timeline>
        </>
    )
}

export default VerticalTimeline;