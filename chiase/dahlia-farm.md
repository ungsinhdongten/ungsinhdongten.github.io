---
title: At the Dahlia Farm
date: 2021-09-04 00:00:00 -8
category: personal
preview_image: DSCF3626.jpg
prev:
  text: Wynoochee Lake
  link: /chiase/wynoochee-lake
next:
  text: Hello World
  link: /chiase/hello-world
---
<script setup>
import image1 from '/images/dongten/founding.jpeg?w=900';

const images = [ {
    src: image1,
    alt: 'Laurel at the dahlia farm'
} ];
</script>

<Figure 
    src="https://images.squarespace-cdn.com/content/v1/58432eece4fcb5ef4d12dd18/1498241339211-DGLLJSCB5TB99MHC1543/sellon_hc-9792.jpg?format=1000w"
    caption="Half Court Studio"
/>

Laurel and I visited a dahlia farm outside of Portland this weekend. Here are a
few photos. All pictures taken with the Fuji X-T4, 23mm ƒ1.4 lens, and a Glimmerglass 1
filter.

<div v-for="image in images">
    <Figure :src="image.src" :alt="image.alt" />
</div>