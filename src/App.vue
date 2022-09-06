<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Show first modal</button>
          <modal
            :title="title"
            v-show="modalFirst"
            @close="modalFirst = !modalFirst">
            <div slot="body">
                 <p>Текст</p>
              <button class="btn btnPrimary" @click="modalFirst = !modalFirst">well done</button>
            </div>
          </modal>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import modal from '@/components/Modal.vue'

export default {
  components: { modal },
  data () {
    return {
      modalFirst: false,
      title: 'First modal window'
    }
  }
}
</script>

<style>

</style>
