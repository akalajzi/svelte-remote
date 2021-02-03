<script>
  import { page } from "../store";
  import Exchange from "./Exchange.svelte";
</script>

<div>
  domain: remote.hr<br />
  descr: REMOTE d.o.o<br />
  descr: Četvrt Ž. Dražojevića 15<br />
  descr: 21310 Omiš<br />
  descr: HR<br />
  -----------------------------------<br />
  contact:<br />
  Name: Ante Kalajzic<br />
  Email: ante@remote.hr<br />
  Phone: +385 92 100 3676<br /><br />
  Get in touch.
</div>

<!-- {#if $page === 'who'}
<div>
domain: remote.hr<br />
descr: REMOTE j.d.o.o<br />
descr: Četvrt Ž. Dražojevića 15<br />
descr: 21310 Omiš<br />
descr: HR<br />
-----------------------------------<br />
contact:<br />
Name: Ante Kalajzic<br />
Email: ante@remote.hr<br />
Phone: +385 92 100 3676<br /><br />
Get in touch.
</div>
{:else if $page === 'where'}
<div>
HQ address<br />
street: Četvrt Ž. Dražojevića 15<br />
city: 21310 Omiš<br />
country: HR<br />
<br />
------------------------------------<br />
<br />
Office<br />
street: Velika Luka 1, Stanići<br />
city: 21310 Omiš<br />
country: HR
</div>
{:else if $page === 'exchange'}
  <Exchange />
{/if} -->
