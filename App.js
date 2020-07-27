import React, { useState, useEffect } from "react";
import ReactDataGrid from "react-data-grid";

export default function DataGrid() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode/")
      .then(res => res.json())
      .then(data => setData(data.results));
  }, []);

  const columns = [
    { key: "id", name: "ID", width:50},
    { key: "name", name: "Name" },
    { key: "air_date", name: "Air Date" },
    { key: "episode", name: "Episode" }
  ];

  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={i => data[i]}
      rowsCount={data.length}
      minHeight={700}
    />
  );
}
