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
    const color = isEven(element.pk) ? '#333333' : '#6f6f6f';
    const icon = element.fields.education ? <FontAwesomeIcon icon={faCalendar} className='icon' /> : <FontAwesomeIcon icon={faAddressBook} className='icon' />;

    return (
        <VerticalTimelineElement
            className={timelineClass}
            contentArrowStyle={{ borderRight: `7px solid ${color}` }}
            date={element.fields.date}
            iconStyle={{ background: '#99e7e4', color: '#000' }}
            icon={icon}
        >
            <h5 className="vertical-timeline-element-title text-shadow">{element.fields.title}</h5>
            <div className="vertical-timeline-element-subtitle text-shadow">
                <h5>{element.fields.location}</h5>
                <h5>{element.fields.organisation}</h5>
            </div>
            <hr />
            <p className="text-shadow">{element.fields.description}</p>
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
