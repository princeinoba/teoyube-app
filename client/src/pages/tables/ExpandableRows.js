import React from "react";
import { Card, CardBody, Row, CardHeader, CardTitle, Container } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import { MinusCircle, PlusCircle } from "react-feather";

import { tableData, tableColumns } from "./data.js";

const ExpandableRowsTable = () => {
  const expandRow = {
    renderer: row => (
      <div>
        <Row>
         <img
           src={row.thumbnail}
           width="40"
           height="40"
           className="rounded-square my-n1"
           alt="Avatar"
          />
          <p>{`"${row.description}"`}</p>
        </Row>
      </div>
    ),
    showExpandColumn: true,
    expandHeaderColumnRenderer: ({ isAnyExpands }) =>
      isAnyExpands ? (
        <MinusCircle width={16} height={16} />
      ) : (
        <PlusCircle width={16} height={16} />
      ),
    expandColumnRenderer: ({ expanded }) =>
      expanded ? (
        <MinusCircle width={16} height={16} />
      ) : (
        <PlusCircle width={16} height={16} />
      )
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Teoyube Promises</CardTitle>
        <h6 className="card-subtitle text-muted">
          Teoyube Tables-aboutUs
        </h6>
      </CardHeader>
      <CardBody>
        <BootstrapTable
          bootstrap4
          bordered={false}
          keyField="name"M
          data={tableData}
          columns={tableColumns}
          expandRow={expandRow}
          pagination={paginationFactory({
            sizePerPage: 10,
            sizePerPageList: [5, 10, 25, 50]
          })}
        />
      </CardBody>
    </Card>
  );
};

const Tables = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Teoyube Tables</h1>

    <ExpandableRowsTable />
  </Container>
);

export default Tables;
