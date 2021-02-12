<template>
  <div class="app-layout">
    <app-header class="header bg-blue-light" />
    <app-nav class="nav bg-blue-dark" />
    <Nuxt class="content text-blue-dark" />
  </div>
</template>

<style>
body {
  overflow: hidden;
  font-weight: 500;
  color: white;
  font-size: 0.875rem;
}

.app-layout {
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-areas: "header"
                       "content"
                       "nav";
  grid-template-rows: 55px 1fr 64px;
  grid-template-columns: 1fr;
}

.header {
  grid-area: header;
}
.nav {
  grid-area: nav;
}
.content {
  grid-area: content;
  overflow: auto;
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
