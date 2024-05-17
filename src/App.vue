<script setup>

</script>

<template>
     <header class="bg-gray-50 ">
        <ul class="flex indent-10 text-black font-bold">
            <li class="p-3 cursor-pointer hover:text-orange-600 border-b ">Home</li>
            <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Site Map</li>
            <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Installment</li>
            <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Our locations</li>
            <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Support</li>
            <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Instagram</li>
            <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Contact us</li>
        </ul>
    </header>

<!--    Main content-->
    <div class="grid grid-cols-12 gap-6">

<!--        Sidebar-->
        <div class="col-span-2 text-black main-h-screen border-t">
            <ul class="font-bold">
                <li class="p-3 cursor-pointer hover:text-black border-b bg-orange-600 text-white">ALL CATEGORIES</li>
                <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Phones</li>
                <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Tablets</li>
                <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Accessories and gadgets</li>
                <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Phones and Tablets</li>
                <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Home appliances</li>
                <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Computer and office equipment</li>
                <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Auto products</li>
                <li class="p-3 cursor-pointer hover:text-orange-600 border-b">Second-hand products</li>
            </ul>
        </div>

<!--        Products row -->
        <div class="col-span-10 mt-5">
            <div class="grid grid-cols-12 gap-6">

                <div class="col-span-3 bg-orange-600 border rounded overflow-hidden shadow-lg cursor-pointer">
                    <img src="./assets/img/lenovo.webp" alt="#">
                    <h5 class="font-bold text-2xl px-2">600 $</h5>
                    <p class="px-2 pt-2">Lenovo IdePad 3 15ITL682H8005ERK notebook</p>
                </div>

                <div class="col-span-3 bg-orange-600 border rounded overflow-hidden shadow-lg cursor-pointer">
                    <img src="./assets/img/iphone.webp" alt="#">
                    <h5 class="font-bold text-2xl px-2">780 $</h5>
                    <p class="px-2 pt-2">Iphone 11 Black 128 GB</p>
                </div>

                <div class="col-span-3 bg-orange-600 border rounded overflow-hidden shadow-lg cursor-pointer">
                    <img src="./assets/img/watch.webp" alt="#">
                    <h5 class="font-bold text-2xl px-2">350 $</h5>
                    <p class="px-2 pt-2">Samsung Galaxy Watch 5 Pro (45mm) gray</p>
                </div>

                <div class="col-span-3 bg-orange-600 border rounded overflow-hidden shadow-lg cursor-pointer">
                    <img src="./assets/img/ipad.webp" alt="#">
                    <h5 class="font-bold text-2xl px-2">1800 $</h5>
                    <p class="px-2 pt-2">TAB S9 Ultra 256 GB Dark Gray</p>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>
