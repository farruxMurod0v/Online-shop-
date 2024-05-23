<script setup>

</script>

<template>
    <header id="return" class="bg-gray-50 ">
        <ul class="flex indent-10 text-black font-bold">
            <router-link to="/" class="p-3 cursor-pointer hover:text-orange-600 border-b ">Home</router-link>
            <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Site Map</li>
            <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Installment</li>
            <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Our locations</li>
            <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Support</li>
            <router-link to="/login" class="p-3 cursor-pointer hover:text-orange-600 border-b">Login in</router-link>
            <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Contact us</li>
            <input  type="search"  class="placeholder  border-b pl-5 text-black" placeholder="    Search..."/>
            <img src="../assets/img/baseSearch.png" alt="search">
        </ul>
    </header>

</template>

<style scoped>

</style>