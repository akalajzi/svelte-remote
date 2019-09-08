<script>
  export let data;

  import { onMount } from 'svelte';
  import { createChart } from 'lightweight-charts';

  onMount(() => {
    const chartContainer = document.getElementById('chart')

    const toUsableNumber = (tecaj) => {
      const num = tecaj.split(",")
      return Number(num[0] + "." + num[1])
    }

    const lwData = data ? data.map(x => ({
      time: x.datum_primjene,
      value: toUsableNumber(x.srednji_tecaj),
    })) : [];

    const width = chartContainer.clientWidth;
    const height = 220;

    const lwChart = createChart(chartContainer, {
      width: width,
      height: height,
      priceScale: {
        autoScale: true,
        scaleMargins: {
          top: 0.1,
          bottom: 0.1,
        },
        position: 'left',
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
      },
      grid: {
        horzLines: {
          color: '#eee',
        },
        vertLines: {
          color: '#ffffff',
        },
      },
      crosshair: {
        horzLine: {
          visible: false,
          labelVisible: false
        },
        vertLine: {
          visible: true,
          style: 0,
          width: 2,
          color: 'rgba(32, 38, 46, 0.1)',
          labelVisible: false,
        }
      },
    });

    let areaSeries = lwChart.addAreaSeries({
      topColor: 'rgba(0, 162, 67, 0.2)',
      bottomColor: 'rgba(0, 120, 255, 0.0)',
      lineColor: 'rgb(0, 162, 67)',
      lineWidth: 1,
    });

    areaSeries.setData(lwData);

    const toolTipWidth = 96;
    const toolTipHeight = 80;
    const toolTipMargin = 15;
    const priceScaleWidth = 50;

    var toolTip = document.createElement('div');
    toolTip.className = 'floating-tooltip';
    chartContainer.appendChild(toolTip);

    // update tooltip
    lwChart.subscribeCrosshairMove(function(param) {
      if (!param.time || param.point.x < 0 || param.point.x > width || param.point.y < 0 || param.point.y > height) {
        toolTip.style.display = 'none';
        return;
      }

      toolTip.style.display = 'block';
      const price = param.seriesPrices.get(areaSeries);
      toolTip.innerHTML = '<div style="color: rgba(0, 162, 67, 0.9)">HRK / USD</div>' +
        '<div style="font-size: 18px; margin: 4px 0px; color: #20262E">' + (Math.round(price * 10000) / 10000).toFixed(4) + '</div>' +
        '<div>' + `${param.time.day}.${param.time.month}.${param.time.year}.` + '</div>';

      let left = param.point.x;


       if (left > width - toolTipWidth - toolTipMargin) {
        left = width - toolTipWidth;
      } else if (left < toolTipWidth / 2) {
        left = priceScaleWidth;
      }

      toolTip.style.left = left + 'px';
      toolTip.style.top = 0 + 'px';
    });
  })

</script>

<style>
  :global(.floating-tooltip) {
    width: 96px;
    height: 220px;
    position: absolute;
    display: none;
    padding: 8px;
    box-sizing: border-box;
    font-size: 12px;
    color: '#20262E';
    background-color: rgba(255, 255, 255, 0.23);
    text-align: left;
    z-index: 1000;
    top: 0px;
    left: 12px;
    pointer-events: none;
    border-radius: 4px 4px 0px 0px;
    border-bottom: none;
    box-shadow: 0 2px 5px 0 rgba(117, 134, 150, 0.45);
  }
</style>
