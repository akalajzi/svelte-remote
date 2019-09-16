<script>
  export let data;

  import { getDay, isWeekend, getWeekdayMinIndex } from '../utils'

  const weekdayMinIndex = getWeekdayMinIndex(data);
</script>

<style>

  .row {
    line-height: 1.4;
  }

  span {
    margin-right: 16px;
  }

  .weekend {
    color: #acb4b9;
  }
  .min {
    color: #008638;
    font-weight: 700;
  }
</style>

<div class='exchange-table'>
HRK/USD rate (last 14 days)<br />
-----------------------------<br />
{#each data as item, index}
  <div class="row" class:weekend={isWeekend(item.datum_primjene)} class:min={weekdayMinIndex === index}>
    <span>{getDay(item.datum_primjene)}</span><span>{item.datum_primjene}</span><span>{item.srednji_tecaj}</span>
  </div>
{/each}
</div>
