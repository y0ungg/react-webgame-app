import Td from './Td';

const Tr = ({ rowData }) => {

  return (
    <Tr>
      {Array(rowData.length).fill().map((td) => (<Td>{''}</Td>))}
    </Tr>
  );
}

export default Tr;
