import { memo } from 'react';
import Td from './Td';

const Tr = memo(({ rowdIndex, rowData, dispatch }) => {
  return (
    <Tr>
      {Array(rowData.length).fill().map((td, i) => (<Td dispatch={dispatch} rowdIndex={rowdIndex} cellIndex={i} cellData={rowData[i]}>{''}</Td>))}
    </Tr>
  );
});

export default Tr;
