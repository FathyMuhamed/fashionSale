import { cloneElement } from 'react';
function List({ children, items }: any) {
  const child = items.map((el: any) => cloneElement(children, { item: el, key: el.id }));
  return <div>{child}</div>;
}

export default List;