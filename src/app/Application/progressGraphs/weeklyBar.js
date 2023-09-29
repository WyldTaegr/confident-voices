"use client";
import React, {useEffect} from 'react';
import Link from 'next/link';
import Chart from 'chart.js';
import "./graph.css";

function WeeklyBarChart(){
    useEffect(() => {
        var barChartCreation = new Chart('starProgress', {
            type: 'bar',
            data: {
                labels: ['stars'],
                datasets: [{
                    data: [7],
                    label: "Awesome stars",
                    borderColor: "rgb(50, 255, 50)",
                    backgroundColor: "rgb(50, 255, 50, 0.3)",
                    borderWidth: 1,
                    pointStyle: 'star'
                }, {
                    data: [3],
                    label: "Redo stars",
                    borderColor: "rgb(255, 50, 50)",
                    backgroundColor: "rgb(255, 50, 50, 0.3)",
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "Star Exercise Progress"
                },
                scales: {
                    xAxes:[{
                        display: true,
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel:{
                            display: true,
                            labelString: "Type of Stars"
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel:{
                            display: true,
                            labelString: "Number of Star"
                        }
                    }]
                }
            }
        });
        var lineChartCreation = new Chart('weeklyProgress', {
            type: 'line',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    data: [1, 2, 3, 1, 5, 4, 7],
                    label: "Awesome stars",
                    fill: true,
                    borderColor: "rgb(50, 255, 50)",
                    backgroundColor: "rgb(50, 255, 50, 0.3)",
                    pointStyle: 'star',
                    pointRadius: 5,
                    pointBorderColor:"rgb(50, 255, 50)",
                    pointBackgroundColor:"rgb(50, 255, 50, 0.3)"
                }, {
                    data: [3, 2, 1, 4, 5, 2, 1],
                    label: "Redo stars",
                    fill: true,
                    borderColor: "rgb(255, 50, 50)",
                    backgroundColor: "rgb(255, 50, 50, 0.3)",
                    pointStyle: 'star',
                    pointRadius: 5,
                    pointBorderColor: "rgb(255, 50, 50)",
                    pointBackgroundColor:"rgb(255, 50, 50, 0.3)"
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "Star Exercise Weekly Progress"
                },
                scales: {
                    xAxes:[{
                        display: true,
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel:{
                            display: true,
                            labelString: "Day of the Week"
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel:{
                            display: true,
                            labelString: "Stars obtained"
                        }
                    }]
                }
            }
        }); 
        var pieChartCreation = new Chart('totalProgress', {
            type: 'doughnut',
            data: {
                labels: ["Awesome Stars", "BAD Stars"],
                datasets: [{
                    data: [40, 70],
                    backgroundColor: ["rgb(50, 255, 50, 0.3)", "rgb(255, 50, 50, 0.3)"]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "Overall Star Statistics"
                }
                
            }
        }); 
    }, [])
    /* end of creation of bar graph*/
    return (
        <div class = "container">
            <div class= "item-1">
                <canvas id = "starProgress"></canvas>
            </div>
            <div class = "item-3">
                <canvas id= "totalProgress"></canvas>
            </div>
            <div class = "item-2">
                <canvas id = "weeklyProgress"></canvas>
            </div>
        </div>
  );
}
/*end of function*/

export default WeeklyBarChart;