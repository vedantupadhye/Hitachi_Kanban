import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import React, { useState } from 'react';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';

type ItemsType = {
  id: UniqueIdentifier;
  title: string;
};

const Items = ({ id, title }: ItemsType) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: 'item',
    },
  });

  const [status, setStatus] = useState('Pending');

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  const getStatusColor = () => {
    switch (status) {
      case 'Completed':
        return 'bg-green-400';
      case 'In Progress':
        return 'bg-green-200';
      case 'Pending':
        return 'bg-red-400';
      default:
        return 'bg-white';
    }
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        'px-2 py-4 shadow-md rounded-xl w-full border border-transparent hover:border-gray-200 cursor-pointer',
        isDragging && 'opacity-50',
        getStatusColor()
      )}
    >
      <div className="flex items-center justify-between">
        {title}

        <button
          className="border p-2 text-xs rounded-xl shadow-lg hover:shadow-xl"
          {...listeners}
        >
          Drag Handle
        </button>
      </div>

      <div className="mt-2">
        <select
          value={status}
          onChange={handleStatusChange}
          className="border p-2 rounded-xl shadow-lg"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default Items;






// import { UniqueIdentifier } from '@dnd-kit/core';
// import { useSortable } from '@dnd-kit/sortable';
// import React from 'react';
// import { CSS } from '@dnd-kit/utilities';
// import clsx from 'clsx';

// type ItemsType = {
//   id: UniqueIdentifier;
//   title: string;
// };

// const Items = ({ id, title }: ItemsType) => {
//   const {
//     attributes,
//     listeners,
//     setNodeRef,
//     transform,
//     transition,
//     isDragging,
//   } = useSortable({
//     id: id,
//     data: {
//       type: 'item',
//     },
//   });
//   return (
//     <div
//       ref={setNodeRef}
//       {...attributes}
//       style={{
//         transition,
//         transform: CSS.Translate.toString(transform),
//       }}
//       className={clsx(
//         'px-2 py-4 bg-white shadow-md rounded-xl w-full border border-transparent hover:border-gray-200 cursor-pointer',
//         isDragging && 'opacity-50',
//       )}
//     >
//       <div className="flex items-center justify-between">
//         {title}

//         <button
//           className="border p-2 text-xs rounded-xl shadow-lg hover:shadow-xl"
//           {...listeners}
//         >
//           Drag Handle
//         </button>

//         <div >
//             checkbox<input type="checkbox" className='mx-2'></input>
//         </div>
      
        
//       </div>
//     </div>
//   );
// };

// export default Items;
