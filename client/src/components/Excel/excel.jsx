import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';
import '@progress/kendo-ui';
import { Spreadsheet } from '@progress/kendo-spreadsheet-react-wrapper';

class SpreadsheetContainer extends React.Component {

    constructor(props) {
            super(props);
            this.loadJSON = this.loadJSON.bind(this);
    }

    loadJSON = (e) => {
         let spreadsheet = $("[data-role='spreadsheet']").getKendoSpreadsheet();
         spreadsheet.fromJSON({
            sheets: [{
                name: "Food Order",
                mergedCells: [
                    "A1:G1"
                ],
                rows: [{
                    height: 70,
                    cells: [{
                        value: "My Company", fontSize: 32, textAlign: "center"
                    }]
                }]
            }]
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.loadJSON} className={"k-button"}>Load data from JSON</button>
                <br/>
                <Spreadsheet/>
            </div>
        );
     }
    }
// ReactDOM.render(
//     <SpreadsheetContainer/>,
//     document.querySelector('my-app')
// );

export default SpreadsheetContainer;