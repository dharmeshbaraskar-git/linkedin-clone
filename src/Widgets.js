import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widget_article">
            <div className="widget_articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widget_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>

    )

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Dharmesh baraskar completed Linkedin", "Top news -6 build in last 20 days")}
            {newsArticle("Corona Update", "Betul having large cases")}
            {newsArticle("Formar Law", "Formar going to make Protest in Delhi")}
            {newsArticle("React", "Start From Scrach Now")}
        </div>
    );
}

export default Widgets;