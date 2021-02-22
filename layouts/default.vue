<template>
  <div class="app-layout">
    <app-header class="header bg-blue-light" />
    <Nuxt class="content text-blue-dark" />
    <AppCover />
    <app-nav class="nav bg-blue-dark" />
  </div>
</template>

<style scoped>
.app-layout {
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-areas: "header"
                       "content"
                       "nav";
  grid-template-rows: 55px 1fr 64px;
  grid-template-columns: 1fr;
  overflow-y: auto;
  overflow-x: hidden;
}

.header {
  grid-area: header;
}
.nav {
  grid-area: nav;
}
.content {
  grid-area: content;
}

/*
* Change Layout on larger screens
*/
@screen md {
  .app-layout {
    grid-template-areas: "header header"
                         "nav content"
                         "nav content";
    grid-template-rows: 70px 1fr;
    grid-template-columns: 220px 1fr;
  }
}
</style>
