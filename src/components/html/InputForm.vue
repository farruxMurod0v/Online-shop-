<script setup>

defineProps({
    labelName: {
        type:String,
        default: 'Email or phone number'
    },
    inputType: {
        type:String,
        default: 'email'
    },
    inputId: {
        type:String,
        default: ''
    },
    inputName: {
        type:String,
        default:true
    },
    inputPlaceholder: {
        type:String,
        default: 'user@example.com'
    }
})

defineEmits(['update:modelValue'])
</script>

<template>
    <label :for="inputId" class="text-black font-bold ">{{labelName}}</label>
    <input
    class="border rounded p-2.5 w-full bg-orange-600 border-amber-500 text-black hover:bg-amber-500 text"
    :type="inputType"
    :name="inputName"
    :id="inputId"
    :placeholder="inputPlaceholder"
    @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<style scoped>

</style>