import { useEffect, useState } from 'react';

import { Data } from './content.types';

export const Content = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ message: 'Hello world!' });
    }, 1001); // Longer than the default 1000ms findBy timeout so we can prove the test works
  }, []);

  return <main>{data && <p>{data.message}</p>}</main>;
};
