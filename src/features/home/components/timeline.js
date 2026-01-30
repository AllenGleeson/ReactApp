import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../../../assets/css/aboutMe.css';
import { GraduationCap, Briefcase } from 'lucide-react';
import timeline from '../../../data/timeline.json';

const isEven = (num) => num % 2 === 0;

const TimelineElement = ({ element }) => {
    const timelineClass = isEven(element.pk) ? 'vertical-timeline-element--education' : 'vertical-timeline-element--work';
    const color = isEven(element.pk) ? '#01294c' : '#3f3f3f';
    const icon = element.fields.education ? <GraduationCap className='icon' /> : <Briefcase className='icon' />;

    return (
        <VerticalTimelineElement
            className={timelineClass}
            contentArrowStyle={{ borderRight: `7px solid ${color}` }}
            date={element.fields.date}
            iconStyle={{ color: '#fff' }}
            icon={icon}
        >
            <h5 className="vertical-timeline-element-title text-shadow">{element.fields.title}</h5>
            <div className="vertical-timeline-element-subtitle text-shadow">
                <h5>{element.fields.location}</h5>
                <h5>{element.fields.organisation}</h5>
            </div>
            <hr />
            <p className='vertical-timeline-element-description'>{element.fields.description}</p>
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