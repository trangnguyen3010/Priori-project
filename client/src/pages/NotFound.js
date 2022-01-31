import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found';
  }, []);

  return (
    <div className="bg-gray-background">
      <div className="frontpage">
        <h1 className="text-center text-2xl">Not Found!</h1>
      </div>
    </div>
  );
}