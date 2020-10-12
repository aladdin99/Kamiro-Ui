<template>
    <div class="uni-form">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "UniForm",
    props: {
        value: {
            type: Object,
            required: true
        },
        labelWidth: {
            type: String,
            default: ""
        },
    },
    provide(){
        return {
            form: this
        }
    }
}
</script>

<style lang="sass">

</style>