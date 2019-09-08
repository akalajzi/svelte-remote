<script>
  import MenuItem from './MenuItem.svelte'
</script>

<style>

  /* desktop */
  @media all and (min-width: 800px) {
    .menu-list {
      margin: 8px 0 0 60px;
    }
    .divider {
      margin-left: 12px;
    }
    hr {
      display: none;
    }
  }

  /* mobile */
  @media all and (max-width: 799px) {
    .menu-list {
      display: flex;
      margin: 0 0 8px 12px;
    }
    .divider {
      display: none;
    }
  }
</style>

<div class="menu-list">
  <MenuItem value='who' tabindex="1" />
  <MenuItem value='where' tabindex="2" />
  <div class='divider'>---</div>
  <MenuItem value='exchange' tabindex="3"/>
</div>
<hr />
