//Vertical TImeline used in Autokriti2
import React, { Component } from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

function VerticalTimeline(){
    return(
        <>
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001"
                    dateText="12 / 02 / 2022"
                    dateInnerStyle={{ background: '#76bb7f', color: '#fff' }}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{ color: 'blue', marginBottom: '15px' }}>Day 1</h3>
                    <h4 style={{ color: 'blue', marginBottom: '15px' }}>Introduction</h4>
                    <p>
                        Starting with the various components composing an automobile’s transmission, Day 1 involves- <br/><br/>
                        1. Relation between power, torque and rpm. <br/><br/>
                        2. Why do need transmission <br/><br/>
                        3. Different types of transmission <br/><br/>
                        4. Gear types and related terminology. <br/><br/>
                        By the end of the day, you’ll have deep insight of what really happens when gears are changed or when clutch pedal is pressed.
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="13 / 02 / 2022 "
                    dateInnerStyle={{ background: '#ffde00', color: '#fff' }}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{ color: 'blue', marginBottom: '15px' }}>Day 2</h3>
                    <h4 style={{ color: 'blue', marginBottom: '15px' }}>Fundamentals</h4>
                    <p>
                        Once we are thorough with the functioning of different units of a drivetrain, we'll move to the designing part. And the first step towards designing is the knowledge of what numbers we wish achieve from our machine i.e., Max Torque, power and rpm
                        No. of gears, etc. 
                        <br/><br/>
                        The subsequent session takes you deeper into designing fundamentals of gearbox, axle and shafts. And together we’ll do the calculations, taking into consideration all the constraints (space, cost and design limitations), to get the desired output
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="003"
                    dateText="TBC"
                    dateInnerStyle={{ background: '#ffbc00', color: '#fff' }}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{ color: 'blue', marginBottom: '15px'}}>Day 3</h3>
                    <h4 style={{ color: 'blue', marginBottom: '15px'}}>Modelling Fundamentals Part 1</h4>
                    <p>
                        With all the required data in hand, the next step is modelling of the parts. So, the succeeding session is entirely dedicated to CAD in SolidWorks. We’d go from basics of SolidWorks to 3D modelling and assembly of the components from previous session.
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="004"
                    dateText="TBC"
                    dateInnerStyle={{ background: '#fd9600', color: '#fff' }}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{ color: 'blue', marginBottom: '15px'}}>Day 4</h3>
                    <h4 style={{ color: 'blue', marginBottom: '15px'}}>Modelling Fundamentals Part 2</h4>
                    <p>
                        Ensuing it will be a session on Ansys, encompassing the structural analysis of designed components. From meshing to material selection and selecting boundary conditions, the session will be hugely insightful. An another software added to your skillset!
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="005"
                    dateText="Project"
                    dateInnerStyle={{ background: '#e86971', color: '#fff' }}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{ color: 'blue', marginBottom: '15px'}}>Day 4 Continued...</h3>
                    <h4 style={{ color: 'blue', marginBottom: '15px'}}>Project</h4>
                    <p>
                        And finally, you’ll get a hands on experience through a project involving implementing the learning from all 4 days. Wouldn’t it be exciting? When all is said and done, you’ll be in your own right to judge how a mechanism can be designed.
                    </p>
                </TimelineItem>
            </Timeline>
        </>
    )
}

export default VerticalTimeline;