import React from 'react';

const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 mt-1 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.92 1.603-.92 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.122 2.251a1 1 0 00-.364 1.118l1.2 3.674c.3.92-.755 1.688-1.538 1.118L10 14.347a1 1 0 00-1.175 0l-3.122 2.251c-.784.57-1.838-.198-1.538-1.118l1.2-3.674a1 1 0 00-.364-1.118L1.88 9.101c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
        </svg>
      )).reverse()}
    </div>
  );
};

export default StarRating;
