import { useEffect, useState } from 'react';

export const Footer = () => {
  const [link, setLink] = useState<string>('');

  useEffect(() => {
    // Mocking async loading of content for the test
    setTimeout(() => {
      setLink('https://joeytermeulen.com');
    }, 500);
  }, []);

  return (
    <footer>
      <h3>Website by Joey</h3>
      <p>C - Copyright</p>
      <button>Logout</button>
      {link && <a href={link}>Joey's website</a>}
    </footer>
  );
};
