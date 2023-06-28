import React, { useCallback, useEffect, useState } from 'react';
import { List } from './../list/List';

export const Effect = () => {
  const [data, setData] = useState([]);

  const getInfo = useCallback(async () => {
    const res = await fetch(
      'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json',
    );
    return await res.json();
  }, []);

  useEffect(() => {
    getInfo().then((data) => setData(data));
  }, [getInfo]);

  return (
    <div>
      <List data={data} />
    </div>
  );
};
