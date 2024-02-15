import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, handleSelectedTopic }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => {
        return <TopicListItem key={topic.id} topic={topic} handleSelectedTopic={handleSelectedTopic} />
      } )}
    </div>
  );
};

export default TopicList;
