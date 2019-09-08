<script>
  import Content from './components/Content.svelte'
  import Menu from './components/Menu.svelte'
</script>

<style>
  :global(body) {
    color: #374047;
    font-family: "Source Code Pro", monospace;
    font-size: 14px;
  }

  .container {
    display: flex;
  }
  .aside {
    display: flex;
  }
  .content {
    padding: 65px 12px 0 12px;
  }

  /* desktop */
  @media all and (min-width: 800px) {
    .container {
      width: 800px;
      margin: 40px auto 0 auto;
    }

    aside {
      width: 260px;
      flex-direction: column;
    }

    .content {
      width: 540px;
    }
  }

  /* mobile */
  @media all and (max-width: 799px) {
    .container {
      flex-direction: column;
      width: 100%;
    }

    aside {
      width: 100%;
      flex-direction: row;
    }

    .content {
      padding-top: 12px;
    }
  }

</style>

<div class='container'>
  <aside>
    <img src="/logo.png" width="220" height="56" alt="remote.hr" />
    <Menu />
  </aside>
  <div class='content'>
    <Content />
  </div>
</div>
