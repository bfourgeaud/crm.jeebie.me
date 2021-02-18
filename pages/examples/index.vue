<template>
  <div class="container">
    <BaseCard :elevation="6" rounded>
      <BaseCardTitle>Card title</BaseCardTitle>
      <BaseCardSubtitle>Subtitle</BaseCardSubtitle>
      <BaseCardText> Greyhound divisively hello coldly wonderfully marginally far upon excluding. </BaseCardText>
      <BaseCardActions>
        <BaseBtn>
          <div>
            <EditIcon class="SvgIcon--24" />
          </div>
          Action 1
        </BaseBtn>
        <BaseSpacer />
        <BaseBtn outlined class="text-blue-light">
          Action 2
        </BaseBtn>
      </BaseCardActions>
    </BaseCard>

    <div class="flex items-center justify-center bg-red-dark font-sans leading-normal">
      <div class="bg-red-light">
        <div class="group hover:bg-blue-light">
          <p class="text-dark group-hover:text-white">New Project</p>
          <p class="text-dark group-hover:text-white">Create a new project from a variety of starting templates.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Examples',
  methods: {
    editItem (item) {
      alert('Edit !')
    },
    deleteItem (item) {
      alert('Delete !')
    }
  }
}
</script>

<style>

</style>
