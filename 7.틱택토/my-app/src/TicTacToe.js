import Table from "./Table";
import { useCallback, useState } from "react";

const initialState = {
    winner: '',
    turn: 'O',
    tableData: [['', '', ''], ['', '', ''], ['', '', '']],
};

export const SET_WINNER = 'SET_WINNER'
export const CLICK_CELL = 'CLICK_CELL'
export const CHANGE_TURN = 'CHANGE_TURN'

const reducer = (state, action) => {
    //switch (type별로 구분)
    switch (action.type) {
        case SET_WINNER : //case 'TYPE'이면
            return {    //return state를 변경한다
                ...state,
                winner: action.winner,
            };
        case CLICK_CELL : {
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]];
            tableData[action.row][action.cell] = state.turn;

            return {
                ...state,
            };
        }
        case CHANGE_TURN : {
            return {
                ...state,
                turn: state.turn === 'O' ? 'X' : 'O'
            }
        }
    };
};

const TicTacToe = () => {
    const [state, dispatch] = useState(reducer, initialState);

    const onClickTable = useCallback(() => {
        dispatch({ type: 'SET_WINNER',  winner: 'A'}); //action 객체
    }, [])

    return (
        <>
          <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch} />  
        </>
    )

}

export default TicTacToe;