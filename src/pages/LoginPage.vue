<script setup>
import InputForm from "@/components/html/InputForm.vue";
import { reactive } from "vue";

let data = reactive({email: '', password: ''});
</script>

<template>
    <a href="#" onclick="window.history.back();" class="p-5 font-bold text-xl text-orange-600">Online Store</a>
    <section class="bg-white">
        <div class="flex items-center justify-center min-h-screen px-1 py-8">
            <div class="w-1/3 bg-white border border-amber-500 rounded-lg">
                <div class="p-6 space-y-4">
                    <h1 class="text-black font-bold text-xl">Log in</h1>
                    <form>
                        <div class="mb-5">
                            <InputForm v-model="data.email" input-name="email" :modelValue="data.email"/>
                        </div>

                        <div class="mb-7">
                            <InputForm v-model="data.password"  label-name="Password" input-name="password" input-id="password"
                                       input-type="password" input-placeholder="***********"
                                       :modelValue="data.password"/>
                        </div>

                        <button type="submit"
                                class="text-black font-bold bg-orange-300 w-full py-2 rounded hover:bg-amber-500 focus:ring-2">
                            Enter
                        </button>
                    </form>
                    {{ data }}
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
