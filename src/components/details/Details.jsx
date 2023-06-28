import React, { useEffect, useState } from 'react';
import s from './details.module.css'

export const Details = ({ info }) => {
  const { id, name } = info;
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(null);
    const getUserInfo = async () => {
      const res = await fetch(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
      );
      return await res.json();
    };
    if (id) {
      getUserInfo(id).then((data) => setUser(data));
    }
  }, [id]);

  return user ? (
    <div className={s.container}>
      <h3>{name}</h3>
      <div>
        <img src={user?.avatar} alt={user.name} />
      </div>
      <p>{user.details?.city}</p>
      <p>{user.details?.company}</p>
      <p>{user.details?.position}</p>
    </div>
  ) : (
    <div>Loading</div>
  );
};
