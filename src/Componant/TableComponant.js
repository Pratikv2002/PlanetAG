import React from 'react';
import { useTable } from 'react-table';

const TableComponent = ({ columns, data, onStatusToggle, onPreviewOpen }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div style={{ overflowX: 'auto' }}>
      <table
        {...getTableProps()}
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          margin: '20px 0',
          fontSize: '18px',
          textAlign: 'left',
        }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} style={{ borderBottom: '2px solid #ddd' }}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{ padding: '10px', background: '#f4f4f4', fontWeight: 'bold' }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} style={{ borderBottom: '1px solid #ddd' }}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} style={{ padding: '10px' }}>
                    {cell.column.id === 'actions' ? (
                      <>
                        <button
                          onClick={() => onPreviewOpen(row.original.apiToken)}
                          style={{ marginRight: '5px' }}
                        >
                          Preview API Token
                        </button>
                        <button
                          onClick={() => onPreviewOpen(row.original.appUrl)}
                          style={{ marginRight: '5px' }}
                        >
                          Preview App URL
                        </button>
                        <button onClick={() => onStatusToggle(row.original.id)}>
                          Toggle Active
                        </button>
                      </>
                    ) : (
                      cell.render('Cell')
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
