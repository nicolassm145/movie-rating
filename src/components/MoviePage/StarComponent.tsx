import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";
import { StarRatingProps } from "../../types";

const StarRating: React.FC<StarRatingProps> = ({ rating, setRating }) => {
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    starValue: number
  ) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const relativeX = event.clientX - left;
    const isHalf = relativeX < width / 2;
    setHoverRating(starValue - (isHalf ? 0.5 : 0));
  };

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    starValue: number
  ) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const relativeX = event.clientX - left;
    const isHalf = relativeX < width / 2;
    setRating(starValue - (isHalf ? 0.5 : 0));
  };

  return (
    <div className="flex gap-1 ">
      {[1, 2, 3, 4, 5].map((starValue) => {
        const current = hoverRating || rating;
        return (
          <div
            key={starValue}
            onMouseMove={(e) => handleMouseMove(e, starValue)}
            onClick={(e) => handleClick(e, starValue)}
            onMouseLeave={() => setHoverRating(0)}
            className="cursor-pointer relative item-center"
          >
            {current >= starValue ? (
              <StarIcon className="h-8 w-8 text-yellow-500" />
            ) : current >= starValue - 0.5 ? (
              <div className="relative">
                <StarOutlineIcon className="h-8 w-8 text-gray-300" />
                <div className="absolute inset-0 w-1/2 overflow-hidden">
                  <StarIcon className="h-8 w-8 text-yellow-500" />
                </div>
              </div>
            ) : (
              <StarOutlineIcon className="h-8 w-8 text-gray-300" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
