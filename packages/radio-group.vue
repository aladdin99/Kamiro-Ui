<template>
    <div class="uni-radio-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "UniRadioGroup",
    provide(){
         return{
            RadioGroup: this
         }
    },
    props: {
        value: null
    }
}
</script>

<style lang="scss">

</style>