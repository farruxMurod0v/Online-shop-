<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheCategory from "@/components/TheCategory.vue";
import TheFooter from "@/components/TheFooter.vue";

</script>

<template>
    <TheHeader />

    <!--    Main content \-->
    <div class="grid grid-cols-12 gap-6">

        <TheCategory />

<!--       Products row -->
        <div class="col-span-10 mt-5">
            <router-view />
        </div>
    </div>

    <TheFooter />
</template>

<style scoped>

</style>