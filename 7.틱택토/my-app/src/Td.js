import { useCallback } from 'react';
import styled from 'styled-components';
import { CLICK_CELL, CHANGE_TURN } from './TicTacToe';

const Td = ({ rowdIndex, cellIndex, dispatch, cellData }) => {
    const onClickTd = useCallback(() => {
        console.log(rowdIndex, cellIndex);
        dispatch({ type: CLICK_CELL, row: rowdIndex, cell: cellIndex })
        dispatch({ type: CHANGE_TURN });
    }, [])

    return (
        <Td onClick={onClickTd}>{''}</Td>
    )
}
export default Td;