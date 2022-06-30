import Table from "./Table";
import { useCallback, useState } from "react";

const initialState = {
    winner: '',
    turn: 'A',
    tableData: [['', '', ''], ['', '', ''], ['', '', '']],
};

const reducer = (state, action) => {
    //switch (type별로 구분)
    switch (action.type) {
        case 'SET_WINNER' : //case 'TYPE'이면
            return {    //return state를 변경한다
                ...state,
                winner: action.winner,
            };
    };
};

const TicTacToe = () => {
    const [state, dispatch] = useState(reducer, initialState);


    const onClickTable = useCallback(() => {
        dispatch({ type: 'SET_WINNER',  winner: 'A'}); //action 객체
    }, [])

    return (
        <>
          <Table onClick={onClickTable} tableData={tableData} />  
        </>
    )

}

export default TicTacToe;