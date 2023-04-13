import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

import { useState } from "react";

export default function FavoriteButton() {
  // this should be a state variable
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={() => {
        console.log("favorite button clicked");
        setIsFavorite(!isFavorite);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
