import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://jimboireland.files.wordpress.com/2015/02/2560x1440-antique-white-solid-color-background.jpg" alt="" />
                <Avatar className="sidebar_avatar" src={user.photoUrl} />
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who Viewed you</p>
                    <p className="sidebar_statNumber">246546</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">246546</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("India")}
                {recentItem("Acenture")}
                {recentItem("Fresher Job")}
                {recentItem("Patni Inc")}
                {recentItem("OOPSLA 2009")}
            </div>
        </div>
    );
}

export default Sidebar;