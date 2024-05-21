<script setup>

</script>

<template>
    <section class="bg-amber-50">
        <div class="flex items-center justify-center pt-5 pb-12">
            <div class="w-1/3 bg-orange-600 border-amber-500 rounded-lg">
                <div class="p-6 space-y-4">
                    <h1 class="text-black font-bold text-xl">Log in</h1>
                    <form>
                        <div class="mb-5">
                            <label for="email" class="text-black">Email or phone number</label>
                            <input
                                class="border-rounded p-2.5 w-full bg-orange-300 border-amber-500 text-black"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="user@example.com"
                            />
                        </div>

                        <div class="mb-7">
                            <label for="password" class="text-black">Password</label>
                            <input
                            class="border rounded p-2.5 w-full bg-orange-300 border-amber-500 text-black"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="******"
                            />
                        </div>

                        <button
                            type="button"
                            class="text-black font-bold bg-orange-300 w-full py-2 rounded hover:bg-amber-500 focus:ring-2">

                            Enter
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>