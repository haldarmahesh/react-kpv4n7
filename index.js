import React from 'react';
import { render } from 'react-dom';
// Import Highcharts
import Highcharts from 'highcharts/highstock';

// Import our demo components
import Chart from './components/Chart.jsx';
import StockChart from './components/Stock.jsx';
import MapChart from './components/Map.jsx';
import Container from './components/Container.jsx';
import mapData from './data/mapData.js';

// Load Highcharts modules
require('highcharts/indicators/indicators')(Highcharts);
require('highcharts/indicators/pivot-points')(Highcharts);
require('highcharts/indicators/macd')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/map')(Highcharts);

const chartOptions = {
  title: {
    text: '',
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

// Render app with demo chart
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        series: chartOptions.series,
      },
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      options: {
        series: [
          {
            data: [1, 2, 3],
          },
          {
            data: [2, 3, 1],
          },
          {
            data: [3, 2, 1],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div>
        <h1>Demos</h1>

        <h2>Highcharts</h2>
        <Chart options={this.state.options} highcharts={Highcharts} />
        <button onClick={this.onClick}>Update Series</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
