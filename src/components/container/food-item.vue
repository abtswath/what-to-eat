<template>
    <li class="food" :style="{top: `${food.y}%`, left: `${food.x}%`}">
        {{ food.name }}
    </li>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {Food} from '@/types/food';

export default defineComponent({
    props: {
        food: {
            type: Object as PropType<Food>,
            required: true
        }
    },
    setup(props) {
        return {
            food: props.food
        }
    }
})
</script>

<style scoped>
</style>
