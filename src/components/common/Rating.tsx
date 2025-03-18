import React from "react";

interface Rating {
  rate?: number;
}

export default function Rating({ rate = 0 }: Rating) {
  if (rate === 0) return null;

  const fullStar = Math.floor(rate);
  const hasHalfStar = rate % 1 >= 0.5;
  const emptyStars = 5 - fullStar - (hasHalfStar ? 1 : 0);

  return (
    <div className="rating rating-half">
      {Array(fullStar)
        .fill(0)
        .map((_, index) => (
          <React.Fragment key={`full-${index}`}>
            <input
              type="radio"
              name="rating-10"
              className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
              checked
              disabled
            />
            <input
              type="radio"
              name="rating-10"
              className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
              checked
              disabled
            />
          </React.Fragment>
        ))}

      {hasHalfStar && (
        <React.Fragment>
          <input
            type="radio"
            name="rating-10"
            className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
            checked
            disabled
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
            disabled
          />
        </React.Fragment>
      )}

      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <React.Fragment key={`empty-${index}`}>
            <input
              type="radio"
              name="rating-10"
              className="bg-yellow-400  cursor-default mask mask-star-2 mask-half-1"
              disabled
            />
            <input
              type="radio"
              name="rating-10"
              className="bg-yellow-400  cursor-default mask mask-star-2 mask-half-2"
              disabled
            />
          </React.Fragment>
        ))}
    </div>
  );
}
