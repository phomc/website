<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex">

      <v-row class="justify-space-between">
        <v-col class="align-self-center v-col-4">
          <div class="text-h3 font-weight-light mb-n1">We are</div>
          <h1 class="text-h1 mt-5">PhoMC</h1>

          <p class="text-h4 font-weight-thin mt-16">We build awesome products for the Minecraft ecosystem.</p>
        </v-col>

        <v-col class="v-col-5">
          <canvas ref="pho-bowl" width="600" height="450"></canvas>
          <p class="text-body-2 font-italic text-center">Photo by <a href="https://unsplash.com/@markuswinkler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Winkler</a> on <a href="https://unsplash.com/photos/08aic3qPcag?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        </v-col>
      </v-row>

    </v-responsive>
  </v-container>
</template>

<script>
import phoImg from "../assets/pho-bowl.jpg"
import watercolorMask from "../assets/watercolormask.png"

export default {
  name: "HomeIntroduction",
  mounted() {
    // cre: https://codepen.io/marksunming/pen/MWJWzGj
    const canvas = this.$refs["pho-bowl"];
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = phoImg;
    const mask = new Image();
    mask.src = watercolorMask;
    function draw() {
      let width = 700;
      let height = (width * canvas.height) / canvas.width;
      let x = canvas.width / 2 - width / 2;
      let y = canvas.height / 2 - height / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(mask, x, y, width, height);
      ctx.globalCompositeOperation = "source-in";
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      window.requestAnimationFrame(draw);
    }
    draw();
  }
}
</script>
