<script>
  import { onMount } from 'svelte';

  import ExchangeChart from './ExchangeChart.svelte';
  import ExchangeTable from './ExchangeTable.svelte';
  import { rates } from '../store';
  import { subDays, toHnbDateFormat } from '../utils';

  function fetchRates(from, to) {
    if (!$rates.results) {
      rates.set({
        ...$rates,
        loading: true,
      })

      fetch(`https://cors-anywhere.herokuapp.com/api.hnb.hr/tecajn/v2?valuta=USD&datum-primjene-od=${from}&datum-primjene-do=${to}`)
      .then(res => res.json())
      .then(res => {
        rates.set({
          loading: false,
          error: null,
          results: res,
        })
      })
      .catch(err => {
        rates.set({
          loading: false,
          error: err,
          results: null,
        })
      })
    }
  }

  onMount(() => {
    const now = new Date().getTime();

    const from = toHnbDateFormat(subDays(now, 90));
    const to = toHnbDateFormat(now);

    fetchRates(from, to);
  })
</script>

<style>
  #chart {
    margin-bottom: 20px;
  }
</style>

<div id='chart' style="position: relative"></div>

{#if $rates.loading }
<div>calling HNB...</div>
{:else if $rates.error}
<div>{$rates.error}</div>
{:else if $rates.results}
<ExchangeTable data={$rates.results} />
<ExchangeChart data={$rates.results} />
{/if}
