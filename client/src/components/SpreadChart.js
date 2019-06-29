import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";
import MovingAverage from "../Utils/MovingAverage";

class SpreadChart extends React.Component {
  state = {
    chartOptions: {
      title: {
        text: "Spread relation"
      },
      xAxis: {
        categories: this.props.categories
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
    console.log(`dataOne:`, this.props.dataOne);
    console.log("props:", this.props);
    console.log("state:", this.state.chartOptions.series);
    const dataSeriesOneChanged = !_.isEqual(
      this.props.dataOne,
      prevProps.dataOne
    );
    const dataSeriesTwoChanged = !_.isEqual(
      this.props.dataTwo,
      prevProps.dataTwo
    );
    const testVariable = this.state.chartOptions.series[1].data;

    const dataValid =
      this.state.chartOptions.series &&
      !testVariable != null &&
      this.props.dataOne != null &&
      this.state.chartOptions.series[1].data != null &&
      this.props.dataTwo != null;

    if ((dataSeriesOneChanged || dataSeriesTwoChanged) && dataValid) {
      const { chartOptions } = this.state;
      console.log("props:", this.props);
      const spreadOneData = this.props.dataOne;
      const spreadTwoData = this.props.dataTwo;
      const spreadDataArray = MovingAverage.SpreadRelationArray(
        spreadOneData,
        spreadTwoData
      );
      console.log(`[DEBUG A PROBLEM]`, spreadDataArray);
      const series = [
        ...this.state.chartOptions.series,
        { data: spreadDataArray, label: "Spread Relation" }
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
          options={chartOptions}
          constructorType="stockChart"
        />
      </div>
    );
  }
}

export default SpreadChart;
