
import { useEffect, useState } from 'react';

const ViewCounter = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    // Get stored view count
    const storedViews = localStorage.getItem('profileViews');
    const currentViews = storedViews ? parseInt(storedViews) : 0;
    
    // Increment and store
    const newViews = currentViews + 1;
    localStorage.setItem('profileViews', newViews.toString());
    setViews(newViews);
  }, []);

  return (
    <div className="text-gray-400 text-sm">
      Profile Views: {views}
    </div>
  );
};

export default ViewCounter;
