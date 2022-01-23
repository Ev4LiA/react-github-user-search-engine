import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

ReactFC.fcRoot(FusionCharts, Charts);

const Bar3D = ({ data }) => {
  const chartConfigs = {
    type: 'bar3d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most Forked',
        xAxisName: 'Forks',
        yAxisName: 'Repos',
        xAxisNameFontSize: '16px',
        yAxisNameFontSize: '16px',
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Bar3D;
