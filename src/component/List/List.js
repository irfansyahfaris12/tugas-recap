import React from "react";
import "../List/List.css"

const List = ({ nomor, email, password }) => {
  return (
    <div className="list">
      <p>
        {nomor}. {email} - {password}
      </p>
    </div>
  );
};

export default List;
