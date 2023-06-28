import { useState } from 'react';
import { Details } from '../details/Details';
import s from './list.module.css';

export const List = ({ data }) => {
  const [users, setUsers] = useState({});
  const [active, setActive] = useState(false);

  return (
    <div>
      <ul className={s.list}>
        {data.map((item) => (
          <li
            key={item.name}
            className={s['list-item']}
            onClick={() => {
              setActive(true);
              setUsers({ id: item.id, name: item.name });
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
		  {active && <Details info={users}  />}
    </div>
  );
};
