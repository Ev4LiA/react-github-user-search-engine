import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Chart, CandyTheme);

const Doughnut2d = ({ data }) => {
  const chartConfigs = {
    type: 'doughnut2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Stars Per Languages',
        decimals: 0,
        doughnutRadius: '35%',
        showPercentValues: 0,
        theme: 'candy',
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2d;
