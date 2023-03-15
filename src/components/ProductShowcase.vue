<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex">

      <v-row class="justify-center">
        <v-col class="v-col-4">

          <div class="font-weight-light text-h3">Our Products</div>

          <div v-for="item in products" class="my-16">
            <ProductCard :item="item"></ProductCard>
          </div>

        </v-col>
      </v-row>

    </v-responsive>
  </v-container>
</template>

<script>
import minecraftLogo from "../assets/minecraft_logo.png"
import ProductCard from "@/components/ProductCard";

export default {
  name: "ProductShowcase",
  components: {ProductCard},
  data() {
    return {
      products: [
        {
          title: "Tensai", desc: "Assist modded MC servers playing experience", avatar: minecraftLogo,
          buttons: [
            {
              link: "https://github.com/phomc/tensai",
              icon: "mdi-github",
              text: "Github"
            },
            {
              link: "https://docs.phomc.dev/tensai/intro",
              icon: "mdi-bookshelf",
              text: "Documentation"
            }
          ]
        },
        {
          title: "Multipacks", desc: "Resources and data packs packager", avatar: minecraftLogo,
          buttons: [
            {
              link: "https://github.com/phomc/multipacks",
              icon: "mdi-github",
              text: "Github"
            },
            {
              link: "https://docs.phomc.dev/multipacks/intro",
              icon: "mdi-bookshelf",
              text: "Documentation"
            }
          ]
        },
        {
          title: "Grimoire", desc: "A Fabric server-side mod to enhance item upgrade mechanism", avatar: minecraftLogo,
          buttons: [
            {
              link: "https://github.com/phomc/grimoire",
              icon: "mdi-github",
              text: "Github"
            },
            {
              link: "https://docs.phomc.dev/grimoire/intro",
              icon: "mdi-bookshelf",
              text: "Documentation"
            }
          ]
        },
      ]
    }
  }
}
</script>
