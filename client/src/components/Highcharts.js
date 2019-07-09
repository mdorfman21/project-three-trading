import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";

class PairsChart extends React.Component {
  state = {
    chartOptions: {
      title: {
        text: "Price Relative Comparison"
      },
      xAxis: {
        type: "datetime",
        categories: this.props.categories
      },
      rangeSelector: {
        enabled: false
      },
      time: {
        useUTC: true
      },
      series: [{ data: [], label: "" }, { data: [], label: "" }],
      plotOptions: {
        series: {
          point: {
            events: {
              mouseOver: this.setHoverData
            }
          }
        }
      }
    },
    hoverData: null
  };

  componentDidUpdate(prevProps) {
    const dataSeriesOneChanged = !_.isEqual(
      this.props.dataOne,
      prevProps.dataOne
    );
    const dataSeriesTwoChanged = !_.isEqual(
      this.props.dataTwo,
      prevProps.dataTwo
    );
    const dataValid =
      !this.state.chartOptions.series[0].data != null &&
      this.props.dataOne != null &&
      this.state.chartOptions.series[1].data != null &&
      this.props.dataTwo != null;

    if ((dataSeriesOneChanged || dataSeriesTwoChanged) && dataValid) {
      const { chartOptions } = this.state;
      console.log("props:", this.props);
      const series = [
        { data: this.props.dataOne, name: this.props.stockOne },
        { data: this.props.dataTwo, name: this.props.stockTwo }
      ];
      const xAxis = { categories: this.props.categories };
      const newChartOptions = { ...chartOptions, series, xAxis };
      console.log("newChartOptions:", newChartOptions);
      console.log("state chart options:", this.state.chartOptions);

      this.setState({ ...this.state, chartOptions: newChartOptions });
    }
  }

  setHoverData = e => {
    this.setState({ hoverData: e.target.category });
  };

  render() {
    const { chartOptions, hoverData } = this.state;
    console.log(this.props);
    console.log("render chartoptions:", chartOptions);

    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType="stockChart"
          options={chartOptions}
        />
      </div>
    );
  }
}

export default PairsChart;
