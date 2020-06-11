import React, { Component } from "react";
import Headers from "../Headers";
import Contents from "../Contents";
import { Slider } from "antd";
import Siders from "../Siders";
import System from "./System";
import User from "./User";
import Diary from "./Diary";
import Comments from "./Comments";
import Picture from "./Picture";
import { HashRouter as Router, Route, Link } from "react-router-dom";
// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入图
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataone: "",
      datatwo: "",
      datathree: "",
      datafour: "",
      datafive: "",
      // status:0
    };
  }
  componentDidMount() {
    fetch("http://116.62.14.0:8645/table/userstatus")
      .then((res) => res.json())
      .then((res) => {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById("chart1"));

        //绘制图表
        var temp = res.option;
        myChart.setOption({
          title: { text: temp.title.text, left: temp.title.left },
          tooltip: {
            formatter: temp.tooltip.formatter,
            trigger: temp.tooltip.trigger,
          },
          legend: {
            orient: temp.legend.orient,
            left: temp.legend.left,
            data: temp.legend.data,
          },
          // xAxis: {
          //   // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          //   type:'category',
          //   data:temp.xAxis.data
          // },
          // yAxis: {type:"value"},
          series: [
            {
              name: temp.series[0].name,
              type: temp.series[0].type,
              data: temp.series[0].data,
              emphasis: temp.series[0].emphasis,
              radius: temp.series[0].radius,
            },
          ],
        });
      });
    fetch("http://116.62.14.0:8645/table/diarypublish")
      .then((res) => res.json())
      .then((res) => {
        var myChart = echarts.init(document.getElementById("chart2"));
        // 绘制图表
        var temp = res.option;
        myChart.setOption({
          title: { text: temp.title.text, left: temp.title.left },
          tooltip: {},
          xAxis: {
            // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            type: "category",
            data: temp.xAxis.data,
          },
          yAxis: { type: "value" },
          series: [
            {
              // name: "销量",
              type: "line",
              data: temp.series[0].data,
            },
          ],
        });
      });
    fetch("http://116.62.14.0:8645/table/diaryplay")
      .then((res) => res.json())
      .then((res) => {
        var myChart = echarts.init(document.getElementById("chart3"));

        // 绘制图表

        var temp = res.option;

        myChart.setOption({
          title: { text: temp.title.text, left: temp.title.left },
          tooltip: {},
          xAxis: {
            // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            type: "category",
            data: temp.xAxis.data,
          },
          yAxis: { type: "value" },
          series: [
            {
              // name: "销量",
              type: temp.series[0].type,
              data: temp.series[0].data,
            },
          ],
        });
      });
    fetch("http://116.62.14.0:8645/table/onepublish")
      .then((res) => res.json())
      .then((res) => {
        var myChart = echarts.init(document.getElementById("chart4"));

        // 绘制图表

        var temp = res.option;
        myChart.setOption({
          title: { text: temp.title.text, left: temp.title.left },
          tooltip: {},
          xAxis: {
            // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            type: "category",
            data: temp.xAxis.data,
          },
          yAxis: { type: "value" },
          series: [
            {
              // name: "销量",
              type: "line",
              data: temp.series[0].data,
            },
          ],
        });
      });
    fetch("http://116.62.14.0:8645/table/oneplay")
      .then((res) => res.json())
      .then((res) => {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById("chart5"));

        //绘制图表
        var temp = res.option;
        myChart.setOption({
          title: { text: temp.title.text, left: temp.title.left },
          tooltip: {
            formatter: temp.tooltip.formatter,
            trigger: temp.tooltip.trigger,
          },
          legend: {
            orient: temp.legend.orient,
            left: temp.legend.left,
            data: temp.legend.data,
          },
          // xAxis: {
          //   // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          //   type:'category',
          //   data:temp.xAxis.data
          // },
          // yAxis: {type:"value"},
          series: [
            {
              name: temp.series[0].name,
              type: temp.series[0].type,
              data: temp.series[0].data,
              emphasis: temp.series[0].emphasis,
              radius: temp.series[0].radius,
            },
          ],
        });
      });

    fetch("http://116.62.14.0:8677/all")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        this.setState({
          dataone: res.dataone,
          datatwo: res.datatwo,
          datathree: res.datathree,
          datafour: res.datafour,
          datafive: res.datafive,
          // status:res.status
        });
      });
  }
  render() {
    return (
      // <div style={{width:'100%',height:'100%',position:'fixed',background:'ghostwhite'}}>
      <div style={{ overflowY: "auto", width: "100%", height: "100%" }}>
        {/* <div className='contents'> */}
        {/* <Contents /> */}
        <div className="h-b1">
          <div className="b1-s">
            <div className="s-t">{this.state.dataone}</div>
            <div className="s-c">今日用户上线量</div>
            <div className="s-b">
              <img src="http://116.62.14.0:8666/api/image/99" />
            </div>
          </div>
          <div className="b1-s">
            <div className="s-t">{this.state.datatwo}</div>
            <div className="s-c">总用户量</div>
            <div className="s-b">
              <img src="http://116.62.14.0:8666/api/image/98" />
            </div>
          </div>
          <div className="b1-s">
            <div className="s-t">{this.state.datathree}</div>
            <div className="s-c">日记量</div>
            <div className="s-b">
              <img src="http://116.62.14.0:8666/api/image/101" />
            </div>
          </div>
          <div className="b1-s">
            <div className="s-t">{this.state.datafour}</div>
            <div className="s-c">一句话量</div>
            <div className="s-b">
              <img src="http://116.62.14.0:8666/api/image/103" />
            </div>
          </div>
          <div className="b1-s">
            <div className="s-t">{this.state.datafive}</div>
            <div className="s-c">交换日记量</div>
            <div className="s-b">
              <img src="http://116.62.14.0:8666/api/image/101" />
            </div>
          </div>
        </div>
        <div className="h-b2" id="echats">
          <div className="chart1" id="chart1"></div>
          <div className="chart3" id="chart3"></div>
          <div className="chart2" id="chart2"></div>
          {/* <div className='chart1' id='chart3'>

            </div> */}
          <div className="chart3" id="chart4"></div>
          <div className="chart1" id="chart5"></div>
          {/* <div className='b2-i'>
                            <img src='http://116.62.14.0:8666/api/image/96'/>
                        </div> */}
        </div>

        {/* </div> */}
      </div>
    );
  }
}
