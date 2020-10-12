<template>
    <div class="uni-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "UniCheckboxGroup",
    provide() {
        return {
            CheckboxGroup: this
        }
    },
    props: {
        value: {
            type: Array
        }
    }
}
</script>

<style lang="sass">

</style>