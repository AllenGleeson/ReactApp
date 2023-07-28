import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../../../assets/css/aboutMe.css';

const Timeline = () => {

    return(
        <section>
            <h3 className='text-center tag'>My History:</h3>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  #ffc228' }}
                    date="2011 - present"
                    iconStyle={{ background: '#ffc228', color: '#fff' }}
                    icon={<img src="https://www.freeiconspng.com/img/12516" />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <hr />
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2010 - 2011"
                    iconStyle={{ background: '#333', color: '#fff' }}
                    icon={<img src="https://www.freeiconspng.com/img/12516" />}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <hr />
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  #ffc228' }}
                    date="2011 - present"
                    iconStyle={{ background: '#ffc228', color: '#fff' }}
                    icon={<img src="https://www.freeiconspng.com/img/12516" />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <hr />
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2010 - 2011"
                    iconStyle={{ background: '#333', color: '#fff' }}
                    icon={<img src="https://www.freeiconspng.com/img/12516" />}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <hr />
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  #ffc228' }}
                    date="2011 - present"
                    iconStyle={{ background: '#ffc228', color: '#fff' }}
                    icon={<img src="https://www.freeiconspng.com/img/12516" />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <hr />
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2010 - 2011"
                    iconStyle={{ background: '#333', color: '#fff' }}
                    icon={<img src="https://www.freeiconspng.com/img/12516" />}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <hr />
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    );
}

export default Timeline;