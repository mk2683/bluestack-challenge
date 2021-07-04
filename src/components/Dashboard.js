import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContainerTab from './ContainerTab';
import DataTable from './DataTable';

const DashBoard = ({localeString}) => {
    //using state to store the active tab from upcoming/live/past
    let [ activeTab, setActiveTab ] = useState('upcoming')
    let [ tableData, setData ] = useState([]);

    //adding api call to fetch json data on mount
    useEffect(() => {
        //checking if the data is available in localStorage
        if (localStorage.getItem('campaignData')) {
            //parsing local storage data and setting it to state data
            setData(JSON.parse(localStorage.getItem('campaignData')));
        }
        else {
            //fetching data from server 
            fetch(`https://mk2683.github.io/Campaign-API/data.json`)
			.then((res) => res.json())
            .then((json) => {
                console.log(json);
                setData(json);
                //storing data into localstorage(web storage) for performance gain
                localStorage.setItem('campaignData', JSON.stringify(json));
            })
        }
        //for clearing on unmount
        return()=>{}
    },[])

    let tabsData = {
        'upcoming': [],
        'past': [],
        'live':[]
    }
    //logic to create data on the basis of live/upcoming/past
    for (let i = 0; i < tableData.length; i++) {
        const diffTime = (new Date(tableData[ i ].createdOn) - new Date());
        const diffTimeAbs = Math.abs(diffTime);
        const diffDays = (diffTimeAbs / (1000 * 60 * 60 * 24));
         if (diffDays > 1 && diffTime<0) {
            tabsData[ 'past' ].push(tableData[ i ])
        }
        else if (diffDays > 0 && diffTime>0) {
            tabsData[ 'upcoming' ].push(tableData[ i ])
        }
        else {
            tabsData[ 'live' ].push(tableData[ i ])
        }
    }
    return (
        <div className="dashboard-container">
            <h1>{localeString.manage}</h1>
            <ContainerTab setActiveTab={setActiveTab} activeTab={activeTab} localeString={localeString}/>
            <DataTable data={tabsData[ activeTab ]} tableData={tableData} activeTab={activeTab} setData={setData} localeString={localeString}/>
        </div>
    )
}
DashBoard.propTypes = {
    localeString:PropTypes.object,
}
export default DashBoard;