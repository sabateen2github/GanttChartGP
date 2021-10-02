import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import './App.css';

const data = {
    data: [
        { id: 2, text: 'Design document', start_date: '13-02-2022', duration: 7},
        { id: 3, text: 'Design review with supervisor', start_date: '18-02-2022', duration: 5},
        { id: 4, text: 'CI/CD implementation', start_date: '23-02-2022', duration: 5 },
        { id: 5, text: 'Backend implementation', start_date: '28-02-2022', duration: 21},
        { id: 6, text: 'Front-end implementation', start_date: '19-03-2022', duration: 21},
        { id: 7, text: 'Launch to Beta stage', start_date: '10-04-2022', duration: 3},
        { id: 8, text: 'Testing (Functional testing and load testing) + Benchmarking', start_date: '13-04-2022', duration: 3},
        { id: 9, text: 'Update specs of system based on benchmarking results', start_date: '16-04-2022', duration: 3},
        { id: 10, text: 'Documenting the System + APIs', start_date: '19-04-2022', duration: 7},
        { id: 11, text: 'Preparing a presentation', start_date: '26-04-2022', duration: 5},
        { id: 12, text: 'Presentation + Demo Day', start_date: '2-05-2022', duration: 1},

    ],
    links: [
        { id: 2, source: 2, target: 3, type: '0' },
        { id: 3, source: 3, target: 4, type: '0' },
        { id: 4, source: 4, target: 5, type: '0' },
        { id: 5, source: 5, target: 6, type: '0' },
        { id: 6, source: 6, target: 7, type: '0' },
        { id: 7, source: 7, target: 8, type: '0' },
        { id: 8, source: 8, target: 9, type: '0' },
        { id: 9, source: 9, target: 10, type: '0' },
        { id: 10, source: 10, target: 11, type: '0' },
        { id: 11, source: 11, target: 12, type: '0' },



      ]
};
class App extends Component {
    render() {
     return (
        <div>
      <Chart
        width={'100%'}
        height={'100vh'}
        chartType="Gantt"
        loader={<div>Loading Chart</div>}
        data={[
          [
            { type: 'string', label: 'Task ID' },
            { type: 'string', label: 'Task Name' },
            { type: 'date', label: 'Start Date' },
            { type: 'date', label: 'End Date' },
            { type: 'number', label: 'Duration' },
            { type: 'number', label: 'Percent Complete' },
            { type: 'string', label: 'Dependencies' },
          ],
          ['1', 'Design document', new Date('2021-10-13'), null, 14 * 86400000, 100, null],
          ['2', 'Design review with supervisor', null, null, 10 * 86400000, 100, '1'],
          ['3', 'CI/CD implementation', null, null, 10 * 86400000, 100, '2'],
          ['4', 'Backend implementation', null, null, 14 * 86400000, 100, '3'],
          ['5', 'Front-end implementation', null, null, 21 * 86400000, 100, '4'],
          ['6', 'Launch to Beta stage', null, null, 14 * 86400000, 100, '5'],
          ['7', 'Testing (Functional testing and load testing) + Benchmarking', null, null, 7 * 86400000, 100, '6'],
          ['8', 'Update specs of system based on benchmarking results', null, null, 7 * 86400000, 100, '7'],
          ['9', 'Documenting the System + APIs', null, null, 10 * 86400000, 100, '8'],
          ['10', 'Preparing a presentation', null, null, 7 * 86400000, 100, '9'],
          ['11', 'Presentation + Demo Day', null, null, 1 * 86400000, 100, '10'],
        ]}
		options={{
			gantt: {
				labelMaxWidth: 400,
			}
		}}
        rootProps={{ 'data-testid': '1' }}
      />
        </div>
     );
    }
 }
 export default App;