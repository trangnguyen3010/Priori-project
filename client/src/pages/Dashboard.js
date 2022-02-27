import React, {useState} from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {Link} from "react-router-dom"
import {Sidebardata} from "./Sidebardata"
import ReactApexChart from 'react-apexcharts'
import "../App.css"


class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'PRODUCT A',
          data: [44, 55, 41, 67, 22, 43]
        }, {
          name: 'PRODUCT B',
          data: [13, 23, 20, 8, 13, 27]
        }, {
          name: 'PRODUCT C',
          data: [11, 17, 15, 15, 21, 14]
        }, {
          name: 'PRODUCT D',
          data: [21, 7, 25, 13, 22, 8]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
              show: true
            },
            zoom: {
              enabled: true
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 10
            },
          },
          xaxis: {
            type: 'datetime',
            categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
              '01/05/2011 GMT', '01/06/2011 GMT'
            ],
          },
          legend: {
            position: 'right',
            offsetY: 40
          },
          fill: {
            opacity: 1
          }
        },
      
      
      };
    }

  

    render() {
      return (
        


  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
</div>



      );
    }
  }


class Dashboard extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [44, 55, 13, 33],
        options: {
          chart: {
            align: 'center',
            offsetX: 50,
            width: 380,
            type: 'donut',
          },
          dataLabels: {
            enabled: false
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                show: false
              }
            }
          }],
          legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
          },
          title: {
            text: "Today's Summary",
            align: 'center',
            margin: 10,
            offsetX: -50,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '30px',
              fontWeight:  'bold',
              fontFamily:  "ariel",
              color:  '#263238'
            },
        }
        },
        sidebar:false
      
      
      };
    }

    Navbar() {
        
    
        const showSidebar = () => this.setState({ sidebar :  !this.state.sidebar })
        return(
            <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={this.state.sidebar ? "nav-menu active" : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bar">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {Sidebardata.map((item, index)=>{
                        return (
                            <li key={index} className={item.classname}>
                                <Link to={item.path}>
                                    {item.icon}
                                        <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </>
        )
    }
      
    appendData() {
      var arr = this.state.series.slice()
      arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1) //THIS IS WHERE YOU ADD DATA TO CHART
    
      this.setState({
        series: arr
      })
    }
    
    removeData() {
      if(this.state.series.length === 1) return
      
      var arr = this.state.series.slice()
      arr.pop()
    
      this.setState({
        series: arr
      })
    }
       

    render() {
      return (
        


  <div>
      {this.Navbar()}
<div className="chart-wrap">
<div id="chart">
<ReactApexChart 
    options={this.state.options} 
    series={this.state.series} 
    type="donut" width={600} 
    align="center"
    />
</div>
</div>

<div class="actions" align="center">
<button
    
    onClick={() => this.appendData()}
    >
        
  + ADD
</button>
&nbsp;
<button
    
    onClick={() => this.removeData()}
    >
  - REMOVE
</button>
&nbsp;

</div>
<ApexChart/>


</div>

);
}
}


export default Dashboard