<template>
  <div class="auth-layout">
    <app-header class="header bg-blue-light lg:hidden" />
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

.auth-layout {
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-areas: "header"
                       "content";
  grid-template-rows: 55px 1fr;
  grid-template-columns: 1fr;
}

.header {
  grid-area: header;
}
.content {
  grid-area: content;
  overflow: auto;
}

/*
* Change Layout on larger screens
*/
@screen lg {
  .auth-layout {
    grid-template-areas: "content";
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
}
</style>
