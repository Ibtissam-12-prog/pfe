import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/', { replace: true });
    // Add a small delay to ensure the navigation is complete before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [navigate]);

  return null;
}
