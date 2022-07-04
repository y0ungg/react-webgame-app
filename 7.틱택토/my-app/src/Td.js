import { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { CLICK_CELL } from './TicTacToe';

const Td = ({ rowdIndex, cellIndex, dispatch, cellData }) => {
    const onClickTd = useCallback(() => {
        console.log(rowdIndex, cellIndex);

        if(cellData) return;

        dispatch({ type: CLICK_CELL, row: rowdIndex, cell: cellIndex })
    }, [cellData])

    return (
        <Td onClick={onClickTd}>{cellData}</Td>
    )
}
export default Td;