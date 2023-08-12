import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../../../assets/css/aboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faAddressBook } from '@fortawesome/free-regular-svg-icons';
import timeline from '../../../data/timeline.json';

const isEven = (num) => num % 2 === 0;

const TimelineElement = ({ element }) => {
    const timelineClass = isEven(element.pk) ? 'vertical-timeline-element--education' : 'vertical-timeline-element--work';
    const color = isEven(element.pk) ? '#333333' : '#ffc228';
    const icon = element.fields.education ? <FontAwesomeIcon icon={faCalendar} className='icon' /> : <FontAwesomeIcon icon={faAddressBook} className='icon' />;

    return (
        <VerticalTimelineElement
            className={timelineClass}
            contentArrowStyle={{ borderRight: `7px solid ${color}` }}
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
    );
};

const Timeline = () => {
    return (
        <section className='rounded-1 timelineSection'>
            <VerticalTimeline>
                {timeline.map((element, index) => (
                    <TimelineElement key={index} element={element} />
                ))}
            </VerticalTimeline>
        </section>
    );
};

export default Timeline;
