import React from "react";
import {BootstrapTable, TableHeaderColumn, ExportCSVButton } from 'react-bootstrap-table';

 var createCustomClearButton = (onClick) => {
    return (
      <ClearSearchButton
        btnText='MyClear'
        btnContextual='btn-warning'
        className='my-custom-class'
        onClick={ e => this.handleClearButtonClick(onClick) }/>
    );
    // If you want have more power to custom the child of ClearSearchButton,
    // you can do it like following
    // return (
    //   <ClearSearchButton
    //     btnContextual='btn-warning'
    //     className='my-custom-class'
    //     onClick={ () => this.handleClearButtonClick(onClick) }>
    //     { ... }
    //   </ClearSearchButton>
    // );
  }

const selectRowProp = {
  mode: 'checkbox'
};

var products = [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  },{
      id: 3,
      name: "Product3",
      price: 120
  }, {
      id:4,
      name: "Product4",
      price: 80
  },{
      id: 5,
      name: "Product5",
      price: 120
  }, {
      id: 6,
      name: "Product6",
      price: 80
  },{
      id: 7,
      name: "Product7",
      price: 120
  }, {
      id: 8,
      name: "Product8",
      price: 80
  },{
      id: 9,
      name: "Product9",
      price: 120
  }, {
      id: 10,
      name: "Product10",
      price: 80
  },{
      id: 11,
      name: "Product11",
      price: 120
  }, {
      id: 12,
      name: "Product12",
      price: 80
  }];



export default class InvoiceGrid extends React.Component {
  constructor(props) {
    super(props);
  }

 handleExportCSVButtonClick = (onClick) => {
  // Custom your onClick event here,
  // it's not necessary to implement this function if you have no any process before onClick
  console.log('This is my custom function for ExportCSVButton click event');
  onClick();
}

 createCustomExportCSVButton = (onClick) => {
  return (
    <ExportCSVButton
      btnText='Down CSV'
      onClick={ () => this.handleExportCSVButtonClick(onClick) }/>
  );
}

  onToggleDropDown = (toggleDropDown) => {
    // do your stuff here
    console.log('toggle dropdown');
    toggleDropDown();
  }

  renderSizePerPageDropDown = (props) => {
    return (
      <SizePerPageDropDown
        className='my-size-per-page'
        btnContextual='btn-warning'
        variation='dropup'
        onClick={ () => this.onToggleDropDown(props.toggleDropDown) }/>
    );
  }

  handleBtnClick = () => {
    if (order === 'desc') {
      this.refs.table.handleSort('asc', 'name');
      order = 'asc';
    } else {
      this.refs.table.handleSort('desc', 'name');
      order = 'desc';
    }
  }
  render() {
    const options = {
      sizePerPageDropDown: this.renderSizePerPageDropDown,
      clearSearch: true,
      clearSearchBtn: this.createCustomClearButton,
      exportCSVBtn: this.createCustomExportCSVButton
    };
    return (
      <div>
        <BootstrapTable
          data={ products }
          options={ options }
          pagination
          search
          exportCSV
           selectRow={ selectRowProp }>
          <TableHeaderColumn dataField='id' isKey={ true }  dataSort={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'  dataSort={ true }>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'  dataSort={ true }>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}