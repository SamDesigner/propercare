<script setup lang="ts">
const video = ref(null);
// video.value.play();
// document.getElementById('vid').play();
onMounted(() => {
  // console.log(video.value)
  video.value.play();
});
</script>
<template>
  <div
    class="flex flex-col items-center mb-[40px] lg:mb-[80px] mt-6 mx-auto w-full max-w-[1240px] "
  >
    <!-- <video class="video-js" controls playsinline autoplay muted loop data-setup='{
      autoplay: muted
    }'>
      <source src="/assets/tgpc-media.mp4" type="video/mp4">
      <p class="vjs-no-js"></p>
    </video> -->
    <video ref="video" controls playsinline autoplay muted loop class="mt-10">
      <source src="/assets/tgpc-media.mp4" type="video/mp4">
      <p>Your browser does not support HTML video, here's a <a href="/assets/tgpc-media.mp4">link </a> to watch the video</p>
    </video>
    <div id="services" />
  </div>
</template>

<style scoped></style>
