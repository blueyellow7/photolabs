import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, handleSelectedTopic }) => {
  return (
    <div className="topic-list__item" onClick={() => { handleSelectedTopic(topic.id) }}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
