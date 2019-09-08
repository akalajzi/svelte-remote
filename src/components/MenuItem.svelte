<script>
  export let value;
  export let tabindex;

  import { page } from '../store'

  $: isActive = value === $page;

  const handleClick = (e) => {
    page.set(value);
    e.target.blur();
  };
  const handleKeyDown = (e) => {
    if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
      e.preventDefault();
      handleClick(e);
    }
  }

</script>

<style>
  .item-container {
    display: flex;
    height: 22px;
    cursor: pointer;
    align-items: center;
    max-width: 120px;
  }
  .item-container:focus {
    outline: 1px solid #00cc55;
  }

  div:hover {
    color: #00a243;
  }

  .active {
    color: #008638;
  }

  .icon-container {
    display: inline-block;
    width: 12px;
    margin-top: 4px;
  }

  /* desktop */
  @media all and (min-width: 800px) {

  }

  /* mobile */
  @media all and (max-width: 799px) {
    .item-container {
      margin-right: 12px;
    }
  }
</style>

<buttton
  class='item-container'
  tabindex={tabindex}
  class:active={isActive}
  on:click={handleClick}
  on:keydown={handleKeyDown}
>
  <div class='icon-container'>
    {#if isActive}
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#008638" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polyline points="9 18 15 12 9 6"></polyline></svg>
    {/if}
  </div>
 {value}
</buttton>
