import React from "react";
import { Image } from "semantic-ui-react";

const ImageGrid = ({ Images }) => {
  const { breedImages } = Images;
  console.log("gg", breedImages);
  return (
    <div>
      <Image.Group size="small">
        {breedImages &&
          breedImages.map((url) => (
            <Image
              src={url}
              width="150"
              height="150"
              style={{ margin: 5 }}
              key={url}
            />
          ))}
      </Image.Group>
    </div>
  );
};

export default ImageGrid;
