import { Space, Tag } from "antd";
let { CheckableTag } = Tag;
import { useState } from "react";
const Tags = ({ tagsData }) => {
  const [selectedTags, setSelectedTags] = useState([tagsData[0]]);
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };
  return (
    <Space size={[0, 8]} wrap>
      {tagsData.map((tag) => (
        <CheckableTag
          color="green"
          key={tag}
          checked={selectedTags.includes(tag)}
          onChange={(checked) => handleChange(tag, checked)}>
          {tag}
        </CheckableTag>
      ))}
    </Space>
  );
};
export default Tags;
