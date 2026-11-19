import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';
import { GraduationCap, Briefcase } from 'lucide-react';
import timeline from '../../data/timeline.json';

const Timeline = () => {
    return (
        <section className="section timeline-section" aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="section-heading">Experience &amp; Education</h2>
            <VerticalTimeline lineColor="" animate={false}>
                {timeline.map(({ pk, fields }) => (
                    <VerticalTimelineElement
                        key={pk}
                        date={fields.date}
                        icon={fields.education ? <GraduationCap /> : <Briefcase />}
                    >
                        <h3 className="vertical-timeline-element-title">{fields.title}</h3>
                        <div className="vertical-timeline-element-subtitle">
                            {fields.organisation}
                            {fields.location && ` · ${fields.location}`}
                        </div>
                        {fields.description && <p>{fields.description}</p>}
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
};

export default Timeline;
