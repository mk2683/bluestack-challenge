import React from 'react';
import PropTypes from 'prop-types';

const ContainerTab = ({activeTab,setActiveTab,localeString}) => {
    return (
        <div className="containerTab">
            <div className={`tabItem ${activeTab === 'upcoming' && 'active'}`} onClick={() => setActiveTab('upcoming')}>{localeString.upcoming}</div>
            <div className={`tabItem ${activeTab === 'live' && 'active'}`} onClick={() => setActiveTab('live')}>{localeString.live}</div>
            <div className={`tabItem ${ activeTab === 'past' && 'active'}`} onClick={() => setActiveTab('past')}>{localeString.past}</div>
        </div>
    )
}
ContainerTab.propTypes = {
    activeTab: PropTypes.string,
    setActiveTab:PropTypes.func
}
export default ContainerTab;