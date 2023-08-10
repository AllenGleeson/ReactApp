import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../../../assets/css/aboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faAddressBook } from '@fortawesome/free-regular-svg-icons';
import timeline from '../../../data/timeline.json';

const Timeline = () => {


    return(
        <section className='rounded-1 timelineSection'>
            <VerticalTimeline>
                {
                    timeline.map((element) => {
                        let isEven = element.pk%2==0;
                        let color = '';
                        let icon = '';
                        let timelineClass = ""
                        if(isEven){
                            color = '#333333'
                            timelineClass='vertical-timeline-element--education'
                        }
                        else{
                            color = '#ffc228'
                            timelineClass='vertical-timeline-element--work'
                        }
                        if(element.fields.education){
                            icon = <FontAwesomeIcon icon={faCalendar} className='icon'/>
                        }
                        else{
                            icon = <FontAwesomeIcon icon={faAddressBook} className='icon'/>
                        }
                        return(
                            <VerticalTimelineElement
                            className={timelineClass}
                            contentArrowStyle={{ borderRight: '7px solid '+color }}
                            date={element.fields.date}
                            iconStyle={{ background: '#ffc228', color: '#fff' }}
                            icon={icon}
                            >
                                <h3 className="vertical-timeline-element-title text-shadow-light text-shadow">{element.fields.title}</h3>
                                <div className="vertical-timeline-element-subtitle text-shadow-light text-shadow">
                                    <h5>{element.fields.location}</h5>
                                    <h4>{element.fields.organisation}</h4>
                                </div>
                                <hr />
                                <p className='text-shadow-light text-shadow'>{element.fields.description}</p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </section>
    );
}

export default Timeline;