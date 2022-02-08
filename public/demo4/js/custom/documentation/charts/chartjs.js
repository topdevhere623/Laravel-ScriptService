/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/core/js/custom/documentation/charts/chartjs.js":
/*!*************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/charts/chartjs.js ***!
  \*************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralChartJS = function () {\n  // Randomizer function\n  function getRandom() {\n    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n    return Math.floor(Math.random() * (max - min) + min);\n  }\n\n  function generateRandomData() {\n    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n    var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;\n    var arr = [];\n\n    for (var i = 0; i < count; i++) {\n      arr.push(getRandom(min, max));\n    }\n\n    return arr;\n  } // Private functions\n\n\n  var example1 = function example1() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_1'); // Define colors\n\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var dangerColor = KTUtil.getCssVariableValue('--bs-danger');\n    var successColor = KTUtil.getCssVariableValue('--bs-success'); // Define fonts\n\n    var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif'); // Chart labels\n\n    var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // Chart data\n\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(1, 100, 12),\n        backgroundColor: primaryColor,\n        stack: 'Stack 0'\n      }, {\n        label: 'Dataset 2',\n        data: generateRandomData(1, 100, 12),\n        backgroundColor: dangerColor,\n        stack: 'Stack 1'\n      }, {\n        label: 'Dataset 3',\n        data: generateRandomData(1, 100, 12),\n        backgroundColor: successColor,\n        stack: 'Stack 2'\n      }]\n    }; // Chart config\n\n    var config = {\n      type: 'bar',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true,\n        interaction: {\n          intersect: false\n        },\n        scales: {\n          x: {\n            stacked: true\n          },\n          y: {\n            stacked: true\n          }\n        }\n      }\n    }; // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n\n    var myChart = new Chart(ctx, config);\n  };\n\n  var example2 = function example2() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_2'); // Define colors\n\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var dangerColor = KTUtil.getCssVariableValue('--bs-danger');\n    var successColor = KTUtil.getCssVariableValue('--bs-success'); // Define fonts\n\n    var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif'); // Chart labels\n\n    var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; // Chart data\n\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(1, 50, 7),\n        borderColor: primaryColor,\n        backgroundColor: 'transparent'\n      }, {\n        label: 'Dataset 2',\n        data: generateRandomData(1, 50, 7),\n        borderColor: dangerColor,\n        backgroundColor: 'transparent'\n      }]\n    }; // Chart config\n\n    var config = {\n      type: 'line',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true\n      }\n    }; // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n\n    var myChart = new Chart(ctx, config);\n  };\n\n  var example3 = function example3() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_3'); // Define colors\n\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var dangerColor = KTUtil.getCssVariableValue('--bs-danger');\n    var successColor = KTUtil.getCssVariableValue('--bs-success');\n    var warningColor = KTUtil.getCssVariableValue('--bs-warning');\n    var infoColor = KTUtil.getCssVariableValue('--bs-info'); // Chart labels\n\n    var labels = ['January', 'February', 'March', 'April', 'May']; // Chart data\n\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(1, 100, 5),\n        backgroundColor: [primaryColor, dangerColor, successColor, warningColor, infoColor]\n      }]\n    }; // Chart config\n\n    var config = {\n      type: 'pie',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true\n      }\n    }; // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n\n    var myChart = new Chart(ctx, config);\n  };\n\n  var example4 = function example4() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_4'); // Define colors\n\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var dangerColor = KTUtil.getCssVariableValue('--bs-danger');\n    var dangerLightColor = KTUtil.getCssVariableValue('--bs-light-danger'); // Define fonts\n\n    var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif'); // Chart labels\n\n    var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // Chart data\n\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(50, 100, 12),\n        borderColor: primaryColor,\n        backgroundColor: 'transparent',\n        stack: 'combined'\n      }, {\n        label: 'Dataset 2',\n        data: generateRandomData(1, 60, 12),\n        backgroundColor: dangerColor,\n        borderColor: dangerColor,\n        stack: 'combined',\n        type: 'bar'\n      }]\n    }; // Chart config\n\n    var config = {\n      type: 'line',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true,\n        interaction: {\n          intersect: false\n        },\n        scales: {\n          y: {\n            stacked: true\n          }\n        }\n      },\n      defaults: {\n        font: {\n          family: 'inherit'\n        }\n      }\n    }; // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n\n    var myChart = new Chart(ctx, config);\n  };\n\n  var example5 = function example5() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_5'); // Define colors\n\n    var infoColor = KTUtil.getCssVariableValue('--bs-info');\n    var infoLightColor = KTUtil.getCssVariableValue('--bs-light-info');\n    var warningColor = KTUtil.getCssVariableValue('--bs-warning');\n    var warningLightColor = KTUtil.getCssVariableValue('--bs-light-warning');\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var primaryLightColor = KTUtil.getCssVariableValue('--bs-light-primary'); // Define fonts\n\n    var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif'); // Chart labels\n\n    var labels = ['January', 'February', 'March', 'April', 'May', 'June']; // Chart data\n\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(20, 80, 6),\n        borderColor: infoColor,\n        backgroundColor: infoLightColor\n      }, {\n        label: 'Dataset 2',\n        data: generateRandomData(10, 60, 6),\n        backgroundColor: warningLightColor,\n        borderColor: warningColor\n      }, {\n        label: 'Dataset 3',\n        data: generateRandomData(0, 80, 6),\n        backgroundColor: primaryLightColor,\n        borderColor: primaryColor\n      }]\n    }; // Chart config\n\n    var config = {\n      type: 'radar',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true\n      }\n    }; // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n\n    var myChart = new Chart(ctx, config);\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      // Global font settings: https://www.chartjs.org/docs/latest/general/fonts.html\n      Chart.defaults.font.size = 13;\n      Chart.defaults.font.family = KTUtil.getCssVariableValue('--bs-font-sans-serif');\n      example1();\n      example2();\n      example3();\n      example4();\n      example5();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralChartJS.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vY2hhcnRzL2NoYXJ0anMuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsZ0JBQWdCLEdBQUcsWUFBWTtBQUMvQjtBQUNBLFdBQVNDLFNBQVQsR0FBdUM7QUFBQSxRQUFwQkMsR0FBb0IsdUVBQWQsQ0FBYztBQUFBLFFBQVhDLEdBQVcsdUVBQUwsR0FBSztBQUNuQyxXQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCSCxHQUFHLEdBQUdELEdBQXZCLElBQThCQSxHQUF6QyxDQUFQO0FBQ0g7O0FBRUQsV0FBU0ssa0JBQVQsR0FBNEQ7QUFBQSxRQUFoQ0wsR0FBZ0MsdUVBQTFCLENBQTBCO0FBQUEsUUFBdkJDLEdBQXVCLHVFQUFqQixHQUFpQjtBQUFBLFFBQVpLLEtBQVksdUVBQUosRUFBSTtBQUN4RCxRQUFJQyxHQUFHLEdBQUcsRUFBVjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLEtBQXBCLEVBQTJCRSxDQUFDLEVBQTVCLEVBQWdDO0FBQzVCRCxNQUFBQSxHQUFHLENBQUNFLElBQUosQ0FBU1YsU0FBUyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sQ0FBbEI7QUFDSDs7QUFDRCxXQUFPTSxHQUFQO0FBQ0gsR0FaOEIsQ0FjL0I7OztBQUNBLE1BQUlHLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVk7QUFDdkI7QUFDQSxRQUFJQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFWLENBRnVCLENBSXZCOztBQUNBLFFBQUlDLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixjQUEzQixDQUFuQjtBQUNBLFFBQUlDLFdBQVcsR0FBR0YsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixhQUEzQixDQUFsQjtBQUNBLFFBQUlFLFlBQVksR0FBR0gsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixjQUEzQixDQUFuQixDQVB1QixDQVN2Qjs7QUFDQSxRQUFJRyxVQUFVLEdBQUdKLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIsc0JBQTNCLENBQWpCLENBVnVCLENBWXZCOztBQUNBLFFBQU1JLE1BQU0sR0FBRyxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLE9BQXhCLEVBQWlDLE9BQWpDLEVBQTBDLEtBQTFDLEVBQWlELE1BQWpELEVBQXlELE1BQXpELEVBQWlFLFFBQWpFLEVBQTJFLFdBQTNFLEVBQXdGLFNBQXhGLEVBQW1HLFVBQW5HLEVBQStHLFVBQS9HLENBQWYsQ0FidUIsQ0FldkI7O0FBQ0EsUUFBTUMsSUFBSSxHQUFHO0FBQ1RELE1BQUFBLE1BQU0sRUFBRUEsTUFEQztBQUVURSxNQUFBQSxRQUFRLEVBQUUsQ0FDTjtBQUNJQyxRQUFBQSxLQUFLLEVBQUUsV0FEWDtBQUVJRixRQUFBQSxJQUFJLEVBQUVoQixrQkFBa0IsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEVBQVQsQ0FGNUI7QUFHSW1CLFFBQUFBLGVBQWUsRUFBRVYsWUFIckI7QUFJSVcsUUFBQUEsS0FBSyxFQUFFO0FBSlgsT0FETSxFQU9OO0FBQ0lGLFFBQUFBLEtBQUssRUFBRSxXQURYO0FBRUlGLFFBQUFBLElBQUksRUFBRWhCLGtCQUFrQixDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsRUFBVCxDQUY1QjtBQUdJbUIsUUFBQUEsZUFBZSxFQUFFUCxXQUhyQjtBQUlJUSxRQUFBQSxLQUFLLEVBQUU7QUFKWCxPQVBNLEVBYU47QUFDSUYsUUFBQUEsS0FBSyxFQUFFLFdBRFg7QUFFSUYsUUFBQUEsSUFBSSxFQUFFaEIsa0JBQWtCLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxFQUFULENBRjVCO0FBR0ltQixRQUFBQSxlQUFlLEVBQUVOLFlBSHJCO0FBSUlPLFFBQUFBLEtBQUssRUFBRTtBQUpYLE9BYk07QUFGRCxLQUFiLENBaEJ1QixDQXdDdkI7O0FBQ0EsUUFBTUMsTUFBTSxHQUFHO0FBQ1hDLE1BQUFBLElBQUksRUFBRSxLQURLO0FBRVhOLE1BQUFBLElBQUksRUFBRUEsSUFGSztBQUdYTyxNQUFBQSxPQUFPLEVBQUU7QUFDTEMsUUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFVBQUFBLEtBQUssRUFBRTtBQUNIQyxZQUFBQSxPQUFPLEVBQUU7QUFETjtBQURGLFNBREo7QUFNTEMsUUFBQUEsVUFBVSxFQUFFLElBTlA7QUFPTEMsUUFBQUEsV0FBVyxFQUFFO0FBQ1RDLFVBQUFBLFNBQVMsRUFBRTtBQURGLFNBUFI7QUFVTEMsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLENBQUMsRUFBRTtBQUNDQyxZQUFBQSxPQUFPLEVBQUU7QUFEVixXQURDO0FBSUpDLFVBQUFBLENBQUMsRUFBRTtBQUNDRCxZQUFBQSxPQUFPLEVBQUU7QUFEVjtBQUpDO0FBVkg7QUFIRSxLQUFmLENBekN1QixDQWlFdkI7O0FBQ0EsUUFBSUUsT0FBTyxHQUFHLElBQUlDLEtBQUosQ0FBVTdCLEdBQVYsRUFBZWUsTUFBZixDQUFkO0FBQ0gsR0FuRUQ7O0FBcUVBLE1BQUllLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVk7QUFDdkI7QUFDQSxRQUFJOUIsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBVixDQUZ1QixDQUl2Qjs7QUFDQSxRQUFJQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIsY0FBM0IsQ0FBbkI7QUFDQSxRQUFJQyxXQUFXLEdBQUdGLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIsYUFBM0IsQ0FBbEI7QUFDQSxRQUFJRSxZQUFZLEdBQUdILE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIsY0FBM0IsQ0FBbkIsQ0FQdUIsQ0FTdkI7O0FBQ0EsUUFBSUcsVUFBVSxHQUFHSixNQUFNLENBQUNDLG1CQUFQLENBQTJCLHNCQUEzQixDQUFqQixDQVZ1QixDQVl2Qjs7QUFDQSxRQUFNSSxNQUFNLEdBQUcsQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixPQUF4QixFQUFpQyxPQUFqQyxFQUEwQyxLQUExQyxFQUFpRCxNQUFqRCxFQUF5RCxNQUF6RCxDQUFmLENBYnVCLENBZXZCOztBQUNBLFFBQU1DLElBQUksR0FBRztBQUNURCxNQUFBQSxNQUFNLEVBQUVBLE1BREM7QUFFVEUsTUFBQUEsUUFBUSxFQUFFLENBQ047QUFDSUMsUUFBQUEsS0FBSyxFQUFFLFdBRFg7QUFFSUYsUUFBQUEsSUFBSSxFQUFFaEIsa0JBQWtCLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxDQUFSLENBRjVCO0FBR0lxQyxRQUFBQSxXQUFXLEVBQUU1QixZQUhqQjtBQUlJVSxRQUFBQSxlQUFlLEVBQUU7QUFKckIsT0FETSxFQU9OO0FBQ0lELFFBQUFBLEtBQUssRUFBRSxXQURYO0FBRUlGLFFBQUFBLElBQUksRUFBRWhCLGtCQUFrQixDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsQ0FBUixDQUY1QjtBQUdJcUMsUUFBQUEsV0FBVyxFQUFFekIsV0FIakI7QUFJSU8sUUFBQUEsZUFBZSxFQUFFO0FBSnJCLE9BUE07QUFGRCxLQUFiLENBaEJ1QixDQWtDdkI7O0FBQ0EsUUFBTUUsTUFBTSxHQUFHO0FBQ1hDLE1BQUFBLElBQUksRUFBRSxNQURLO0FBRVhOLE1BQUFBLElBQUksRUFBRUEsSUFGSztBQUdYTyxNQUFBQSxPQUFPLEVBQUU7QUFDTEMsUUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFVBQUFBLEtBQUssRUFBRTtBQUNIQyxZQUFBQSxPQUFPLEVBQUU7QUFETjtBQURGLFNBREo7QUFNTEMsUUFBQUEsVUFBVSxFQUFFO0FBTlA7QUFIRSxLQUFmLENBbkN1QixDQWdEdkI7O0FBQ0EsUUFBSU8sT0FBTyxHQUFHLElBQUlDLEtBQUosQ0FBVTdCLEdBQVYsRUFBZWUsTUFBZixDQUFkO0FBQ0gsR0FsREQ7O0FBb0RBLE1BQUlpQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFZO0FBQ3ZCO0FBQ0EsUUFBSWhDLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQVYsQ0FGdUIsQ0FJdkI7O0FBQ0EsUUFBSUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLG1CQUFQLENBQTJCLGNBQTNCLENBQW5CO0FBQ0EsUUFBSUMsV0FBVyxHQUFHRixNQUFNLENBQUNDLG1CQUFQLENBQTJCLGFBQTNCLENBQWxCO0FBQ0EsUUFBSUUsWUFBWSxHQUFHSCxNQUFNLENBQUNDLG1CQUFQLENBQTJCLGNBQTNCLENBQW5CO0FBQ0EsUUFBSTRCLFlBQVksR0FBRzdCLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIsY0FBM0IsQ0FBbkI7QUFDQSxRQUFJNkIsU0FBUyxHQUFHOUIsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixXQUEzQixDQUFoQixDQVR1QixDQVd2Qjs7QUFDQSxRQUFNSSxNQUFNLEdBQUcsQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixPQUF4QixFQUFpQyxPQUFqQyxFQUEwQyxLQUExQyxDQUFmLENBWnVCLENBY3ZCOztBQUNBLFFBQU1DLElBQUksR0FBRztBQUNURCxNQUFBQSxNQUFNLEVBQUVBLE1BREM7QUFFVEUsTUFBQUEsUUFBUSxFQUFFLENBQ047QUFDSUMsUUFBQUEsS0FBSyxFQUFFLFdBRFg7QUFFSUYsUUFBQUEsSUFBSSxFQUFFaEIsa0JBQWtCLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxDQUFULENBRjVCO0FBR0ltQixRQUFBQSxlQUFlLEVBQUUsQ0FBQ1YsWUFBRCxFQUFlRyxXQUFmLEVBQTRCQyxZQUE1QixFQUEwQzBCLFlBQTFDLEVBQXdEQyxTQUF4RDtBQUhyQixPQURNO0FBRkQsS0FBYixDQWZ1QixDQTBCdkI7O0FBQ0EsUUFBTW5CLE1BQU0sR0FBRztBQUNYQyxNQUFBQSxJQUFJLEVBQUUsS0FESztBQUVYTixNQUFBQSxJQUFJLEVBQUVBLElBRks7QUFHWE8sTUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFFBQUFBLE9BQU8sRUFBRTtBQUNMQyxVQUFBQSxLQUFLLEVBQUU7QUFDSEMsWUFBQUEsT0FBTyxFQUFFO0FBRE47QUFERixTQURKO0FBTUxDLFFBQUFBLFVBQVUsRUFBRTtBQU5QO0FBSEUsS0FBZixDQTNCdUIsQ0F3Q3ZCOztBQUNBLFFBQUlPLE9BQU8sR0FBRyxJQUFJQyxLQUFKLENBQVU3QixHQUFWLEVBQWVlLE1BQWYsQ0FBZDtBQUNILEdBMUNEOztBQTRDQSxNQUFJb0IsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBWTtBQUN2QjtBQUNBLFFBQUluQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFWLENBRnVCLENBSXZCOztBQUNBLFFBQUlDLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixjQUEzQixDQUFuQjtBQUNBLFFBQUlDLFdBQVcsR0FBR0YsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixhQUEzQixDQUFsQjtBQUNBLFFBQUkrQixnQkFBZ0IsR0FBR2hDLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIsbUJBQTNCLENBQXZCLENBUHVCLENBU3ZCOztBQUNBLFFBQUlHLFVBQVUsR0FBR0osTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixzQkFBM0IsQ0FBakIsQ0FWdUIsQ0FZdkI7O0FBQ0EsUUFBTUksTUFBTSxHQUFHLENBQUMsU0FBRCxFQUFZLFVBQVosRUFBd0IsT0FBeEIsRUFBaUMsT0FBakMsRUFBMEMsS0FBMUMsRUFBaUQsTUFBakQsRUFBeUQsTUFBekQsRUFBaUUsUUFBakUsRUFBMkUsV0FBM0UsRUFBd0YsU0FBeEYsRUFBbUcsVUFBbkcsRUFBK0csVUFBL0csQ0FBZixDQWJ1QixDQWV2Qjs7QUFDQSxRQUFNQyxJQUFJLEdBQUc7QUFDVEQsTUFBQUEsTUFBTSxFQUFFQSxNQURDO0FBRVRFLE1BQUFBLFFBQVEsRUFBRSxDQUNOO0FBQ0lDLFFBQUFBLEtBQUssRUFBRSxXQURYO0FBRUlGLFFBQUFBLElBQUksRUFBRWhCLGtCQUFrQixDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsRUFBVixDQUY1QjtBQUdJcUMsUUFBQUEsV0FBVyxFQUFFNUIsWUFIakI7QUFJSVUsUUFBQUEsZUFBZSxFQUFFLGFBSnJCO0FBS0lDLFFBQUFBLEtBQUssRUFBRTtBQUxYLE9BRE0sRUFRTjtBQUNJRixRQUFBQSxLQUFLLEVBQUUsV0FEWDtBQUVJRixRQUFBQSxJQUFJLEVBQUVoQixrQkFBa0IsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0FGNUI7QUFHSW1CLFFBQUFBLGVBQWUsRUFBRVAsV0FIckI7QUFJSXlCLFFBQUFBLFdBQVcsRUFBRXpCLFdBSmpCO0FBS0lRLFFBQUFBLEtBQUssRUFBRSxVQUxYO0FBTUlFLFFBQUFBLElBQUksRUFBRTtBQU5WLE9BUk07QUFGRCxLQUFiLENBaEJ1QixDQXNDdkI7O0FBQ0EsUUFBTUQsTUFBTSxHQUFHO0FBQ1hDLE1BQUFBLElBQUksRUFBRSxNQURLO0FBRVhOLE1BQUFBLElBQUksRUFBRUEsSUFGSztBQUdYTyxNQUFBQSxPQUFPLEVBQUU7QUFDTEMsUUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFVBQUFBLEtBQUssRUFBRTtBQUNIQyxZQUFBQSxPQUFPLEVBQUU7QUFETjtBQURGLFNBREo7QUFNTEMsUUFBQUEsVUFBVSxFQUFFLElBTlA7QUFPTEMsUUFBQUEsV0FBVyxFQUFFO0FBQ1RDLFVBQUFBLFNBQVMsRUFBRTtBQURGLFNBUFI7QUFVTEMsUUFBQUEsTUFBTSxFQUFFO0FBQ0pHLFVBQUFBLENBQUMsRUFBRTtBQUNDRCxZQUFBQSxPQUFPLEVBQUU7QUFEVjtBQURDO0FBVkgsT0FIRTtBQW1CWFcsTUFBQUEsUUFBUSxFQUFFO0FBQ05DLFFBQUFBLElBQUksRUFBRTtBQUNGQyxVQUFBQSxNQUFNLEVBQUU7QUFETjtBQURBO0FBbkJDLEtBQWYsQ0F2Q3VCLENBaUV2Qjs7QUFDQSxRQUFJWCxPQUFPLEdBQUcsSUFBSUMsS0FBSixDQUFVN0IsR0FBVixFQUFlZSxNQUFmLENBQWQ7QUFDSCxHQW5FRDs7QUFxRUEsTUFBSXlCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVk7QUFDdkI7QUFDQSxRQUFJeEMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBVixDQUZ1QixDQUl2Qjs7QUFDQSxRQUFJZ0MsU0FBUyxHQUFHOUIsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixXQUEzQixDQUFoQjtBQUNBLFFBQUlvQyxjQUFjLEdBQUdyQyxNQUFNLENBQUNDLG1CQUFQLENBQTJCLGlCQUEzQixDQUFyQjtBQUNBLFFBQUk0QixZQUFZLEdBQUc3QixNQUFNLENBQUNDLG1CQUFQLENBQTJCLGNBQTNCLENBQW5CO0FBQ0EsUUFBSXFDLGlCQUFpQixHQUFHdEMsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixvQkFBM0IsQ0FBeEI7QUFDQSxRQUFJRixZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIsY0FBM0IsQ0FBbkI7QUFDQSxRQUFJc0MsaUJBQWlCLEdBQUd2QyxNQUFNLENBQUNDLG1CQUFQLENBQTJCLG9CQUEzQixDQUF4QixDQVZ1QixDQVl2Qjs7QUFDQSxRQUFJRyxVQUFVLEdBQUdKLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIsc0JBQTNCLENBQWpCLENBYnVCLENBZXZCOztBQUNBLFFBQU1JLE1BQU0sR0FBRyxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLE9BQXhCLEVBQWlDLE9BQWpDLEVBQTBDLEtBQTFDLEVBQWlELE1BQWpELENBQWYsQ0FoQnVCLENBa0J2Qjs7QUFDQSxRQUFNQyxJQUFJLEdBQUc7QUFDVEQsTUFBQUEsTUFBTSxFQUFFQSxNQURDO0FBRVRFLE1BQUFBLFFBQVEsRUFBRSxDQUNOO0FBQ0lDLFFBQUFBLEtBQUssRUFBRSxXQURYO0FBRUlGLFFBQUFBLElBQUksRUFBRWhCLGtCQUFrQixDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsQ0FBVCxDQUY1QjtBQUdJcUMsUUFBQUEsV0FBVyxFQUFFRyxTQUhqQjtBQUlJckIsUUFBQUEsZUFBZSxFQUFFNEI7QUFKckIsT0FETSxFQU9OO0FBQ0k3QixRQUFBQSxLQUFLLEVBQUUsV0FEWDtBQUVJRixRQUFBQSxJQUFJLEVBQUVoQixrQkFBa0IsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLENBQVQsQ0FGNUI7QUFHSW1CLFFBQUFBLGVBQWUsRUFBRTZCLGlCQUhyQjtBQUlJWCxRQUFBQSxXQUFXLEVBQUVFO0FBSmpCLE9BUE0sRUFhTjtBQUNJckIsUUFBQUEsS0FBSyxFQUFFLFdBRFg7QUFFSUYsUUFBQUEsSUFBSSxFQUFFaEIsa0JBQWtCLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxDQUFSLENBRjVCO0FBR0ltQixRQUFBQSxlQUFlLEVBQUU4QixpQkFIckI7QUFJSVosUUFBQUEsV0FBVyxFQUFFNUI7QUFKakIsT0FiTTtBQUZELEtBQWIsQ0FuQnVCLENBMkN2Qjs7QUFDQSxRQUFNWSxNQUFNLEdBQUc7QUFDWEMsTUFBQUEsSUFBSSxFQUFFLE9BREs7QUFFWE4sTUFBQUEsSUFBSSxFQUFFQSxJQUZLO0FBR1hPLE1BQUFBLE9BQU8sRUFBRTtBQUNMQyxRQUFBQSxPQUFPLEVBQUU7QUFDTEMsVUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFlBQUFBLE9BQU8sRUFBRTtBQUROO0FBREYsU0FESjtBQU1MQyxRQUFBQSxVQUFVLEVBQUU7QUFOUDtBQUhFLEtBQWYsQ0E1Q3VCLENBeUR2Qjs7QUFDQSxRQUFJTyxPQUFPLEdBQUcsSUFBSUMsS0FBSixDQUFVN0IsR0FBVixFQUFlZSxNQUFmLENBQWQ7QUFDSCxHQTNERDs7QUE2REEsU0FBTztBQUNIO0FBQ0E2QixJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZDtBQUNBZixNQUFBQSxLQUFLLENBQUNRLFFBQU4sQ0FBZUMsSUFBZixDQUFvQk8sSUFBcEIsR0FBMkIsRUFBM0I7QUFDQWhCLE1BQUFBLEtBQUssQ0FBQ1EsUUFBTixDQUFlQyxJQUFmLENBQW9CQyxNQUFwQixHQUE2Qm5DLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIsc0JBQTNCLENBQTdCO0FBRUFOLE1BQUFBLFFBQVE7QUFDUitCLE1BQUFBLFFBQVE7QUFDUkUsTUFBQUEsUUFBUTtBQUNSRyxNQUFBQSxRQUFRO0FBQ1JLLE1BQUFBLFFBQVE7QUFDWDtBQVpFLEdBQVA7QUFjSCxDQXBVc0IsRUFBdkIsQyxDQXNVQTs7O0FBQ0FwQyxNQUFNLENBQUMwQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDM0QsRUFBQUEsZ0JBQWdCLENBQUN5RCxJQUFqQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vY2hhcnRzL2NoYXJ0anMuanM/ZDI2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUR2VuZXJhbENoYXJ0SlMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmFuZG9taXplciBmdW5jdGlvblxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbShtaW4gPSAxLCBtYXggPSAxMDApIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbURhdGEobWluID0gMSwgbWF4ID0gMTAwLCBjb3VudCA9IDEwKSB7XG4gICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaChnZXRSYW5kb20obWluLCBtYXgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGUxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEZWZpbmUgY2hhcnQgZWxlbWVudFxuICAgICAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2NoYXJ0anNfMScpO1xuXG4gICAgICAgIC8vIERlZmluZSBjb2xvcnNcbiAgICAgICAgdmFyIHByaW1hcnlDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXByaW1hcnknKTtcbiAgICAgICAgdmFyIGRhbmdlckNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZGFuZ2VyJyk7XG4gICAgICAgIHZhciBzdWNjZXNzQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1zdWNjZXNzJyk7XG5cbiAgICAgICAgLy8gRGVmaW5lIGZvbnRzXG4gICAgICAgIHZhciBmb250RmFtaWx5ID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZm9udC1zYW5zLXNlcmlmJyk7XG5cbiAgICAgICAgLy8gQ2hhcnQgbGFiZWxzXG4gICAgICAgIGNvbnN0IGxhYmVscyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuXG4gICAgICAgIC8vIENoYXJ0IGRhdGFcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0YXNldCAxJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2VuZXJhdGVSYW5kb21EYXRhKDEsIDEwMCwgMTIpLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgc3RhY2s6ICdTdGFjayAwJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXRhc2V0IDInLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoMSwgMTAwLCAxMiksXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrOiAnU3RhY2sgMScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0YXNldCAzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2VuZXJhdGVSYW5kb21EYXRhKDEsIDEwMCwgMTIpLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgc3RhY2s6ICdTdGFjayAyJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIENoYXJ0IGNvbmZpZ1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICAgICAgICB4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSW5pdCBDaGFydEpTIC0tIGZvciBtb3JlIGluZm8sIHBsZWFzZSB2aXNpdDogaHR0cHM6Ly93d3cuY2hhcnRqcy5vcmcvZG9jcy9sYXRlc3QvXG4gICAgICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwgY29uZmlnKTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZTIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIERlZmluZSBjaGFydCBlbGVtZW50XG4gICAgICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfY2hhcnRqc18yJyk7XG5cbiAgICAgICAgLy8gRGVmaW5lIGNvbG9yc1xuICAgICAgICB2YXIgcHJpbWFyeUNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtcHJpbWFyeScpO1xuICAgICAgICB2YXIgZGFuZ2VyQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1kYW5nZXInKTtcbiAgICAgICAgdmFyIHN1Y2Nlc3NDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXN1Y2Nlc3MnKTtcblxuICAgICAgICAvLyBEZWZpbmUgZm9udHNcbiAgICAgICAgdmFyIGZvbnRGYW1pbHkgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1mb250LXNhbnMtc2VyaWYnKTtcblxuICAgICAgICAvLyBDaGFydCBsYWJlbHNcbiAgICAgICAgY29uc3QgbGFiZWxzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknXTtcblxuICAgICAgICAvLyBDaGFydCBkYXRhXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdlbmVyYXRlUmFuZG9tRGF0YSgxLCA1MCwgNyksXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdlbmVyYXRlUmFuZG9tRGF0YSgxLCA1MCwgNyksXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBkYW5nZXJDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBDaGFydCBjb25maWdcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJbml0IENoYXJ0SlMgLS0gZm9yIG1vcmUgaW5mbywgcGxlYXNlIHZpc2l0OiBodHRwczovL3d3dy5jaGFydGpzLm9yZy9kb2NzL2xhdGVzdC9cbiAgICAgICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCBjb25maWcpO1xuICAgIH1cblxuICAgIHZhciBleGFtcGxlMyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRGVmaW5lIGNoYXJ0IGVsZW1lbnRcbiAgICAgICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9jaGFydGpzXzMnKTtcblxuICAgICAgICAvLyBEZWZpbmUgY29sb3JzXG4gICAgICAgIHZhciBwcmltYXJ5Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1wcmltYXJ5Jyk7XG4gICAgICAgIHZhciBkYW5nZXJDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWRhbmdlcicpO1xuICAgICAgICB2YXIgc3VjY2Vzc0NvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtc3VjY2VzcycpO1xuICAgICAgICB2YXIgd2FybmluZ0NvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtd2FybmluZycpO1xuICAgICAgICB2YXIgaW5mb0NvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtaW5mbycpO1xuXG4gICAgICAgIC8vIENoYXJ0IGxhYmVsc1xuICAgICAgICBjb25zdCBsYWJlbHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5J107XG5cbiAgICAgICAgLy8gQ2hhcnQgZGF0YVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXRhc2V0IDEnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoMSwgMTAwLCA1KSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbcHJpbWFyeUNvbG9yLCBkYW5nZXJDb2xvciwgc3VjY2Vzc0NvbG9yLCB3YXJuaW5nQ29sb3IsIGluZm9Db2xvcl1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIENoYXJ0IGNvbmZpZ1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSW5pdCBDaGFydEpTIC0tIGZvciBtb3JlIGluZm8sIHBsZWFzZSB2aXNpdDogaHR0cHM6Ly93d3cuY2hhcnRqcy5vcmcvZG9jcy9sYXRlc3QvXG4gICAgICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwgY29uZmlnKTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZTQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIERlZmluZSBjaGFydCBlbGVtZW50XG4gICAgICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfY2hhcnRqc180Jyk7XG5cbiAgICAgICAgLy8gRGVmaW5lIGNvbG9yc1xuICAgICAgICB2YXIgcHJpbWFyeUNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtcHJpbWFyeScpO1xuICAgICAgICB2YXIgZGFuZ2VyQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1kYW5nZXInKTtcbiAgICAgICAgdmFyIGRhbmdlckxpZ2h0Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1saWdodC1kYW5nZXInKTtcblxuICAgICAgICAvLyBEZWZpbmUgZm9udHNcbiAgICAgICAgdmFyIGZvbnRGYW1pbHkgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1mb250LXNhbnMtc2VyaWYnKTtcblxuICAgICAgICAvLyBDaGFydCBsYWJlbHNcbiAgICAgICAgY29uc3QgbGFiZWxzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG5cbiAgICAgICAgLy8gQ2hhcnQgZGF0YVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXRhc2V0IDEnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoNTAsIDEwMCwgMTIpLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogcHJpbWFyeUNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrOiAnY29tYmluZWQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0YXNldCAyJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2VuZXJhdGVSYW5kb21EYXRhKDEsIDYwLCAxMiksXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBkYW5nZXJDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgc3RhY2s6ICdjb21iaW5lZCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBDaGFydCBjb25maWdcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEluaXQgQ2hhcnRKUyAtLSBmb3IgbW9yZSBpbmZvLCBwbGVhc2UgdmlzaXQ6IGh0dHBzOi8vd3d3LmNoYXJ0anMub3JnL2RvY3MvbGF0ZXN0L1xuICAgICAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgdmFyIGV4YW1wbGU1ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEZWZpbmUgY2hhcnQgZWxlbWVudFxuICAgICAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2NoYXJ0anNfNScpO1xuXG4gICAgICAgIC8vIERlZmluZSBjb2xvcnNcbiAgICAgICAgdmFyIGluZm9Db2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWluZm8nKTtcbiAgICAgICAgdmFyIGluZm9MaWdodENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtaW5mbycpO1xuICAgICAgICB2YXIgd2FybmluZ0NvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtd2FybmluZycpO1xuICAgICAgICB2YXIgd2FybmluZ0xpZ2h0Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1saWdodC13YXJuaW5nJyk7XG4gICAgICAgIHZhciBwcmltYXJ5Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1wcmltYXJ5Jyk7XG4gICAgICAgIHZhciBwcmltYXJ5TGlnaHRDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LXByaW1hcnknKTtcblxuICAgICAgICAvLyBEZWZpbmUgZm9udHNcbiAgICAgICAgdmFyIGZvbnRGYW1pbHkgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1mb250LXNhbnMtc2VyaWYnKTtcblxuICAgICAgICAvLyBDaGFydCBsYWJlbHNcbiAgICAgICAgY29uc3QgbGFiZWxzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJ107XG5cbiAgICAgICAgLy8gQ2hhcnQgZGF0YVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXRhc2V0IDEnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoMjAsIDgwLCA2KSxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGluZm9Db2xvcixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpbmZvTGlnaHRDb2xvcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXRhc2V0IDInLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoMTAsIDYwLCA2KSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nTGlnaHRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHdhcm5pbmdDb2xvcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXRhc2V0IDMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoMCwgODAsIDYpLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlMaWdodENvbG9yLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogcHJpbWFyeUNvbG9yLFxuICAgICAgICAgICAgICAgIH0sICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIENoYXJ0IGNvbmZpZ1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICB0eXBlOiAncmFkYXInLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJbml0IENoYXJ0SlMgLS0gZm9yIG1vcmUgaW5mbywgcGxlYXNlIHZpc2l0OiBodHRwczovL3d3dy5jaGFydGpzLm9yZy9kb2NzL2xhdGVzdC9cbiAgICAgICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCBjb25maWcpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gR2xvYmFsIGZvbnQgc2V0dGluZ3M6IGh0dHBzOi8vd3d3LmNoYXJ0anMub3JnL2RvY3MvbGF0ZXN0L2dlbmVyYWwvZm9udHMuaHRtbFxuICAgICAgICAgICAgQ2hhcnQuZGVmYXVsdHMuZm9udC5zaXplID0gMTM7XG4gICAgICAgICAgICBDaGFydC5kZWZhdWx0cy5mb250LmZhbWlseSA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWZvbnQtc2Fucy1zZXJpZicpO1xuXG4gICAgICAgICAgICBleGFtcGxlMSgpO1xuICAgICAgICAgICAgZXhhbXBsZTIoKTtcbiAgICAgICAgICAgIGV4YW1wbGUzKCk7XG4gICAgICAgICAgICBleGFtcGxlNCgpO1xuICAgICAgICAgICAgZXhhbXBsZTUoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICBLVEdlbmVyYWxDaGFydEpTLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUR2VuZXJhbENoYXJ0SlMiLCJnZXRSYW5kb20iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZW5lcmF0ZVJhbmRvbURhdGEiLCJjb3VudCIsImFyciIsImkiLCJwdXNoIiwiZXhhbXBsZTEiLCJjdHgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicHJpbWFyeUNvbG9yIiwiS1RVdGlsIiwiZ2V0Q3NzVmFyaWFibGVWYWx1ZSIsImRhbmdlckNvbG9yIiwic3VjY2Vzc0NvbG9yIiwiZm9udEZhbWlseSIsImxhYmVscyIsImRhdGEiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwic3RhY2siLCJjb25maWciLCJ0eXBlIiwib3B0aW9ucyIsInBsdWdpbnMiLCJ0aXRsZSIsImRpc3BsYXkiLCJyZXNwb25zaXZlIiwiaW50ZXJhY3Rpb24iLCJpbnRlcnNlY3QiLCJzY2FsZXMiLCJ4Iiwic3RhY2tlZCIsInkiLCJteUNoYXJ0IiwiQ2hhcnQiLCJleGFtcGxlMiIsImJvcmRlckNvbG9yIiwiZXhhbXBsZTMiLCJ3YXJuaW5nQ29sb3IiLCJpbmZvQ29sb3IiLCJleGFtcGxlNCIsImRhbmdlckxpZ2h0Q29sb3IiLCJkZWZhdWx0cyIsImZvbnQiLCJmYW1pbHkiLCJleGFtcGxlNSIsImluZm9MaWdodENvbG9yIiwid2FybmluZ0xpZ2h0Q29sb3IiLCJwcmltYXJ5TGlnaHRDb2xvciIsImluaXQiLCJzaXplIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/charts/chartjs.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/charts/chartjs.js"]();
/******/ 	
/******/ })()
;