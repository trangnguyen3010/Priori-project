import { useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found';
  }, []);

  return (
    <div className="bg-gray-background">
      <Navbar/>
      <div className="frontpage">
        <h1>Not Found!</h1>
      </div>
    </div>
  );
}