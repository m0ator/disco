import React from 'react';
import { Icon } from '../Icon/Icon';
import './Table.css';

export const Table = ({
  columns,
  data,
  sortable = false,
  selectable = false,
  onSort,
  onSelect,
  selectedRows = [],
  className = ''
}) => {
  const handleSort = (column) => {
    if (!sortable || !column.sortable) return;
    onSort?.(column);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      onSelect?.(data.map((_, index) => index));
    } else {
      onSelect?.([]);
    }
  };

  const handleSelectRow = (index) => {
    const newSelected = selectedRows.includes(index)
      ? selectedRows.filter(i => i !== index)
      : [...selectedRows, index];
    onSelect?.(newSelected);
  };

  return (
    <div className={`table-container ${className}`}>
      <table className="table">
        <thead>
          <tr>
            {selectable && (
              <th className="table-checkbox">
                <input
                  type="checkbox"
                  checked={selectedRows.length === data.length}
                  onChange={handleSelectAll}
                />
              </th>
            )}
            {columns.map((column, index) => (
              <th
                key={index}
                className={`
                  ${column.align ? `text-${column.align}` : ''}
                  ${sortable && column.sortable ? 'sortable' : ''}
                `}
                style={{ width: column.width }}
                onClick={() => handleSort(column)}
              >
                <div className="table-header">
                  <span>{column.title}</span>
                  {sortable && column.sortable && (
                    <Icon name="unfold_more" className="sort-icon" />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={selectedRows.includes(rowIndex) ? 'selected' : ''}
              onClick={() => selectable && handleSelectRow(rowIndex)}
            >
              {selectable && (
                <td className="table-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(rowIndex)}
                    onChange={() => handleSelectRow(rowIndex)}
                  />
                </td>
              )}
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={column.align ? `text-${column.align}` : ''}
                >
                  {column.render
                    ? column.render(row[column.key], row)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 