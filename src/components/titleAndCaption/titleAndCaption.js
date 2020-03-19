import React from "react";

const TitleAndCaption = ({data}) => {
  const { title, subtitle } = data
  console.log(title);
  console.log(subtitle);

  return (
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default TitleAndCaption;