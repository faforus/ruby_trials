import React, { useState, useCallback } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { CardItem } from '../components/CardItem.jsx';
import { itemData } from '../data/itemsData.js';

const Hotspot = () => {
  const [items, setItems] = useState(itemData);
  const [value, setValue] = useState('');

  const moveListItem = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = items[dragIndex];
      const hoverItem = items[hoverIndex];

      setItems((items) => {
        const updateItems = [...items];
        updateItems[dragIndex] = hoverItem;
        updateItems[hoverIndex] = dragItem;
        return updateItems;
      });
    },
    [items],
  );

  const pushData = () => {
    if (value.trim() === '') return;
    const newItem = { id: items.length + 1, name: value };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setValue('');
  };

  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='flex flex-col items-center justify-center h-screen space-y-2'>
        <input value={value} onChange={valueHandler} className='textInput' type='text' />
        <button
          onClick={pushData}
          className='p-4 bg-orange-400 disabled:bg-gray-400 hover:bg-orange-500 rounded-xl shadow-md text-white font-semibold tracking-widest'
        >
          Add element
        </button>
        <div className='space-y-2 border-2 border-orange-500 rounded-lg p-6 text-center'>
          {items.map((item, index) => (
            <CardItem key={item.id} moveListItem={moveListItem} text={item.name} index={index} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default Hotspot;
