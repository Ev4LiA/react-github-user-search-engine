import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Column3D = ({ data }) => {
  const chartConfigs = {
    type: 'column3d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most Popular',
        xAxisName: 'Repos',
        yAxisName: 'Stars',
        xAxisNameFontSize: '16px',
        yAxisNameFontSize: '16px',
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Column3D;
