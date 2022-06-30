import Tr from "./Tr";

const Table = ({ onClick, tableData }) => {
    return (
        <Table onClick={onClick}>
            {Array(tableData.length).fill().map((tr, i) => (<Tr rowData={tableData[i]} />))}
        </Table>
    )
}

export default Table;