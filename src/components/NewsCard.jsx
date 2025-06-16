import { FaStar, FaEye, FaBookmark, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const {
    title,
    rating = { number: 0 },
    total_view = 0,
    author = {},
    thumbnail_url,
    details,
    tags = [],
  } = news;

  // Extract published_date from author object
  const published_date = author?.published_date;

  // Improved date formatting function
  const formatDate = (dateString) => {
    if (!dateString) return 'Date not available';
    
    try {
      const date = new Date(dateString);
      return isNaN(date.getTime()) 
        ? 'Invalid date' 
        : date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          });
    } catch (e) {
      return 'Date error';
    }
  };

  // Full date version for the body
  const fullDate = (dateString) => {
    if (!dateString) return 'Publication date not available';
    
    try {
      const date = new Date(dateString);
      return isNaN(date.getTime())
        ? 'Invalid publication date'
        : date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
    } catch (e) {
      return 'Date format error';
    }
  };

  return (
    <div className="card bg-base-100 shadow-md p-4 rounded-xl space-y-4">
      {/* Author Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src={author.img || 'https://via.placeholder.com/40'} 
            alt={author.name || 'Unknown author'} 
            className="w-10 h-10 rounded-full" 
          />
          <div>
            <h2 className="font-semibold">{author.name || 'Unknown Author'}</h2>
            <p className="text-sm text-gray-500">{formatDate(published_date)}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-xl">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-xl font-bold leading-snug">{title || 'Untitled News'}</h1>

      {/* Thumbnail */}
      <img
        src={thumbnail_url || 'https://via.placeholder.com/800x400?text=No+Image'}
        alt={title || 'News thumbnail'}
        className="rounded-xl w-full h-52 object-cover"
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = 'https://via.placeholder.com/800x400?text=Image+Error';
        }}
      />

      {/* Tags + Description */}
      <p className="text-sm text-gray-600">
        <span className="block mb-1">
          {fullDate(published_date)}
          {tags.length > 0 && ` | Tags: ${tags.join(', ')}`}
        </span>
        {details ? `${details.slice(0, 200)}...` : 'No content available'}
        {details && (
          <span className="text-orange-600 font-medium cursor-pointer"> Read More</span>
        )}
      </p>

      {/* Footer Rating & Views */}
      <div className="flex justify-between items-center border-t pt-2 mt-2">
        <div className="flex items-center gap-1 text-orange-500">
          {Array(5).fill(null).map((_, i) => (
            <FaStar 
              key={i} 
              className={i < Math.floor(rating.number) ? 'text-orange-500' : 'text-gray-300'} 
            />
          ))}
          <span className="text-black font-medium ml-2">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;