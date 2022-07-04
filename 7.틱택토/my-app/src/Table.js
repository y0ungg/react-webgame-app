import Tr from "./Tr";

const Table = ({ tableData, dispatch }) => {
    return (
        <Table>
            {Array(tableData.length).fill().map((tr, i) => (
              <Tr key={i} dispatch={dispatch} rowIndex={i} rowData={tableData[i]} />
            ))}
        </Table>
      );
}

export default Table;