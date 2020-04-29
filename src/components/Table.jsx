import React from 'react';
import Tr from './Tr';

const Table = ( {onClick, tableData, dispatch }) => {
  return (
  <table>
    {/* tableData.length = 4 */}
    {/* i = columns  */}
   {Array(tableData.length).fill().map((tr, i) => (<Tr dispatch={dispatch} rowIndex = {i}rowData={tableData[i]}/>))}
  </table>
  )
}

export default Table; 