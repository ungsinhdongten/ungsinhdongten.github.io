<template>
    <!-- <p class="go-right" aria-label="go-right">
        <i class="arrow"></i>
    </p> -->
    <div class="gallery">
        <div class="gallery__wrapper">
            <div v-for="image in props.images" class="gallery__item">
                <template v-if="image.srcset">
                    <img
                        :srcset="image.srcset"
                        :sizes="image.sizes"
                        :src="image.src"
                        :alt="image.alt"
                    >
                </template>
                <template v-else>
                    <img :src="image.src" :alt="image.alt">
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Image {
    src: string,
    srcset?: string
    alt?: string,
    sizes?: string
}

const props = defineProps<{
    images: Image[]
}>();

</script>

<style>
/* 
* Gallery styles. Galleries are responsive, horizontally scrolling
* areas suitable for showing images (which do not all have to be
* the same aspect ratio). This layout is adapted from:
* https://ryanmulligan.dev/blog/x-scrolling-centered-max-width-container/
*/
.gallery {
    grid-column: bleed;
    display: grid;
    grid-template-columns: inherit;
    padding-block: var(--grid-space);
    overflow-x: scroll;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
}

.gallery::-webkit-scrollbar {
    inline-size: 0 !important;
    display: none;
}

.gallery__wrapper {
    grid-column: feature;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.gallery__wrapper::after {
    content: "";
    align-self: stretch;
    padding-inline-end: max(
        (100vw - var(--content-max-width)) / 2 - var(--grid-space)
    );
}

.gallery__item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-snap-align: center;
    /* max-block-size: 100vh; */
    border-radius: 4px;
    overflow: hidden;
    object-fit: none;
    padding-left: var(--grid-space);
    padding-right: var(--grid-space);
}

/* @media screen and (min-width: 600px) {
    .gallery__item {
    }
} */

/* @media screen {
    .gallery__item {
    }
} */
.go-right {
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 1rem;
    z-index: 999;
    animation: float 2s ease-in-out infinite;
    font-size: 2.5rem;
    margin: 0;
    position: absolute;
    top: 50%;
    pointer-events: none;
    cursor: default;
}
.arrow {
    border: solid black;
    opacity: 0.5;
    border-width: 0 10px 10px 0;
    display: inline-block;
    padding: 10px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
}
</style>
