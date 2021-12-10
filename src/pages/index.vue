<template>
    <Container v-model:running="running" ref="containerRef" @on-change="handleChange"/>
    <div class="control">
        <p>{{ selection === undefined ? '吃神马。。、？' : selection.name }}</p>
        <button @click="toggleRunning">
            {{ running ? '停' : '开始' }}
        </button>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Container from '@/components/container/container.vue';
import {Food} from '@/types/food';

export default defineComponent({
    components: {
        Container
    },
    setup() {

        const selection = ref<Food>();

        const running = ref(false);

        const toggleRunning = () => {
            running.value = !running.value;
        }

        const handleChange = (food: Food) => {
            selection.value = food;
        }

        return {
            running,
            toggleRunning,
            handleChange,
            selection
        }
    }
})
</script>

<style lang="scss" scoped>
.control {
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;

    p {
        font-weight: bold;
        font-size: 1.4em;
    }

    button {
        -webkit-tap-highlight-color: transparent;
        width: 120px;
        background: #18a058;
        color: #fff;
        font-size: 1em;
        outline: none;
        border: none;
        padding: 12px 0;
        line-height: 1;
        font-family: inherit;
        border-radius: .2em;
        white-space: nowrap;
        position: relative;
        z-index: auto;
        display: inline-flex;
        flex-wrap: nowrap;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        user-select: none;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        transition: color .3s cubic-bezier(0.4, 0, 0.2, 1), background-color .3s cubic-bezier(0.4, 0, 0.2, 1), opacity .3s cubic-bezier(0.4, 0, 0.2, 1), border-color .3s cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
            background-color: #18a058;
            color: #ffffff;
        }

        &:focus {
            background-color: #36ad6a;
            color: #ffffff;
        }

        &:active {
            background-color: #0c7a43;
            color: #ffffff;
        }
    }
}
</style>
