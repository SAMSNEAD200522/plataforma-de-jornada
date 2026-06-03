<template>
  <apexchart type="area" height="100%" :options="chartOptions" :series="series" />
</template>

<script setup>
import VueApexCharts from 'vue3-apexcharts'

const apexchart = VueApexCharts

const series = [
  {
    name: 'Horas trabajadas',
    data: [20, 35, 30, 50, 45, 60, 72],
  },
  {
    name: 'Horas extra',
    data: [5, 10, 8, 15, 12, 18, 24],
  },
]

const chartOptions = {
  chart: {
    type: 'area',

    toolbar: {
      show: false,
    },

    zoom: {
      enabled: false,
    },

    fontFamily: 'Inter, sans-serif',

    background: 'transparent',
  },

  stroke: {
    curve: 'smooth',
    width: 3,
  },

  fill: {
    type: 'gradient',

    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.35,
      opacityTo: 0.04,
      stops: [0, 90, 100],
    },
  },

  colors: ['#2563EB', '#10B981'],

  dataLabels: {
    enabled: false,
  },

  grid: {
    borderColor: '#E2E8F0',
    strokeDashArray: 5,

    padding: {
      left: 20,
      right: 20,
      top: 10,
    },
  },

  legend: {
    position: 'top',
    horizontalAlign: 'left',

    labels: {
      colors: '#64748B',
    },

    markers: {
      radius: 12,
    },
  },

  xaxis: {
    categories: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],

    axisBorder: {
      show: false,
    },

    axisTicks: {
      show: false,
    },

    labels: {
      style: {
        colors: '#64748B',
        fontSize: '13px',
      },
    },
  },

  yaxis: {
    labels: {
      style: {
        colors: '#64748B',
        fontSize: '13px',
      },
    },
  },

  tooltip: {
    theme: 'light',

    style: {
      fontSize: '14px',
      fontFamily: 'Inter, sans-serif',
    },
  },

  markers: {
    size: 5,
    strokeWidth: 0,

    hover: {
      size: 7,
    },
  },

  responsive: [
    {
      breakpoint: 768,

      options: {
        chart: {
          height: 300,
        },

        legend: {
          position: 'bottom',
        },
      },
    },
  ],
}
</script>
