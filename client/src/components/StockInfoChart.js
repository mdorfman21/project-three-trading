import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";
import Correlate from "../Utils/correlation_function";
import MovingAverage from "../Utils/MovingAverage";

class StockInfoChart extends React.Component {
  state = {
    chartOptions: {
      title: {
        text: `Bollinger Bands for ${this.props.stockOne}`
      },
      xAxis: {
        categories: this.props.categories
      },
      series: [
        { data: [], label: "" },
        { data: [], label: "" },
        { data: [], label: "" }
      ],
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

    const dataValid =
      !this.state.chartOptions.series[0].data != null &&
      this.props.dataOne != null;

    if (dataSeriesOneChanged && dataValid) {
      const { chartOptions } = this.state;
      const title = {
        text: "Bollinger Bands for " + this.props.stockOne
      };

      const closingDataArray = this.props.dataOne;
      const movingAverage = closingDataArray.map((price, index) => {
        if (index > 19) {
          return MovingAverage.arrayOfTen(closingDataArray, index);
        } else {
          return price;
        }
      });

      const standardDeviationArray = closingDataArray.map((price, index) => {
        if (index > 19) {
          return MovingAverage.getTheArray(closingDataArray, index);
        } else {
          return 0;
        }
      });

      const upperBollinger = standardDeviationArray.map((price, index) => {
        return 2 * price + movingAverage[index];
      });

      const lowerBollinger = standardDeviationArray.map((price, index) => {
        return movingAverage[index] - 2 * price;
      });

      console.log("array of twenty:", standardDeviationArray);
      console.log("moving average", movingAverage);
      const series = [
        { data: closingDataArray.slice(170), name: this.props.stockOne },
        { data: movingAverage.slice(170), name: "20 Day Moving Average" },
        { data: upperBollinger.slice(170), name: "upper Bollinger Band" },
        { data: lowerBollinger.slice(170), name: "lower Bollinger Band" }
      ];
      const xAxis = { categories: this.props.categories.slice(170) };
      const newChartOptions = { ...chartOptions, series, xAxis, title };

      this.setState({ ...this.state, chartOptions: newChartOptions });
    }
  }

  render() {
    const { chartOptions, hoverData } = this.state;

    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    );
  }
}
export default StockInfoChart;
