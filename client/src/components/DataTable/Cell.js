import React from "react";

function Cell({
  content,
  header
}) {
  const cellMarkup = header ? (
    <th className="Cell Cell-header">
      {content}
    </th>
  ) : (
    <td className="Cell">
      {content}
    </td>
  );
  return (cellMarkup);
}

export default Cell;