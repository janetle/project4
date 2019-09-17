import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App3() {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
      );
      console.log(result.data)
      setData(result.data);
    };
    fetchData();

  }, []);
  console.log(data.hits)
  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
export default App3;