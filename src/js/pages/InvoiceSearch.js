import React from "react";
import GlabalSearch from "../components/GlabalSearch";
import InvoiceGrid from "../components/InvoiceGrid";

export default class InvoiceSearch extends React.Component {
  render() {
    return (
      <div>
        
        <GlabalSearch></GlabalSearch>
        <h1>Invoice Search</h1>
        <InvoiceGrid></InvoiceGrid>
      </div>
    );
  }
}
