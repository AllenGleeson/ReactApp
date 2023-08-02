import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../../../assets/css/aboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faAddressBook } from '@fortawesome/free-regular-svg-icons';
import timeline from '../../../data/timeline.json';

const Timeline = () => {


    return(
        <section className='rounded-1 timelineSection'>
            <h3 className='defaultCursor tag text-shadow'>My History:</h3>
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
                            icon = <FontAwesomeIcon icon={faFolder} className='icon'/>
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
                                <h3 className="vertical-timeline-element-title">{element.fields.title}</h3>
                                <div className="vertical-timeline-element-subtitle">
                                    <h5>{element.fields.location}</h5>
                                    <h4>{element.fields.organisation}</h4>
                                </div>
                                <hr />
                                <p>{element.fields.description}</p>
                            </VerticalTimelineElement>
                        )
                    })
                }
                {/* <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  #ffc228' }}
                    date="2011 - present"
                    iconStyle={{ background: '#ffc228', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faFolder} className='icon'/>}
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
                    contentArrowStyle={{ borderRight: '7px solid  #333333' }}
                    date="2010 - 2011"
                    iconStyle={{ background: '#333', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faFolder} className='icon'/>}
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
                    icon={<FontAwesomeIcon icon={faFolder} className='icon'/>}
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
                    contentArrowStyle={{ borderRight: '7px solid  #333333' }}
                    date="2010 - 2011"
                    iconStyle={{ background: '#333', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faFolder} className='icon'/>}
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
                    icon={<FontAwesomeIcon icon={faFolder} className='icon'/>}
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
                    contentArrowStyle={{ borderRight: '7px solid  #333333' }}
                    date="2010 - 2011"
                    iconStyle={{ background: '#333', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faFolder} className='icon'/>}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <hr />
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement> */}
            </VerticalTimeline>
        </section>
    );
}

export default Timeline;