import Tr from "./Tr";

const Table = ({ onClick, tableData, dispatch }) => {
    return (
        <Table onClick={onClick}>
            {Array(tableData.length).fill().map((tr, i) => (<Tr dispatch={dispatch} rowIndex={i} rowData={tableData[i]} />))}
        </Table>
    )
}

export default Table;