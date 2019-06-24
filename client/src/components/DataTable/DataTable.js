import React, { Component } from "react";

// messing around with TradingStrats
import Cell from "./Cell";
import "./DataTable.css";

class DataTable extends Component {

  renderHeadingRow = (_cell, cellIndex) => {
    const { headings } = this.props;

    return (
      <Cell
        key={`heading-${cellIndex}`}
        content={headings[cellIndex]}
        header={true}
      />
    );
  };
  renderRow = (_row, rowIndex) => {
    const { rows } = this.props;

    return (
      <tr key={`row-${rowIndex}`}>
        {rows[rowIndex].map((_cell, cellIndex) => {
          return (
            <Cell
              key={`${rowIndex}-${cellIndex}`}
              content={rows[rowIndex][cellIndex]}
            />
          );
        })}
      </tr>
    );
  };
  render() {
    const {headings, rows} = this.props;
    this.renderHeadingRow = this.renderHeadingRow.bind(this);
    this.renderRow = this.renderRow.bind(this);

    const theadMarkup = (
      <tr key="heading">
        {headings.map(this.renderHeadingRow)}
      </tr>
    );

    const tbodyMarkup = rows.map(this.renderRow);

    return (
      <table className="Table">
        <thead>{theadMarkup}</thead>
        <tbody>{tbodyMarkup}</tbody>
      </table>
    );
  }
}

export default DataTable;
