<template>
  <v-card class="pa-10">
    <v-row>
      <v-col class="v-col-2">
        <v-img :src="item.avatar" width="64"></v-img>
      </v-col>

      <v-col>
        <div class="text-h5">{{ item.title }}</div>
        <p class="text-body-1 py-5">{{ item.desc }}</p>

        <div v-if="item.hasOwnProperty('buttons')" class="d-flex flex-row" style="gap: 1rem">
          <div v-for="btn in item.buttons">
            <a :href="btn.link" target="_blank" class="text-decoration-none">
              <v-btn :prepend-icon="btn.icon" size="small">{{ btn.text }}</v-btn>
            </a>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    item: {
      title: String,
      desc: String,
      avatar: Object,
      buttons: Array
    }
  }
}
</script>
