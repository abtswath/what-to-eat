<template>
    <Container v-model:running="running" :menu="menu" ref="containerRef" @on-change="handleChange"/>
    <div class="control">
        <p>{{ selection === undefined ? '吃神马。。、？' : selection.name }}</p>
        <div class="btn-group">
            <NButton :style="{width: '120px'}" type="primary" @click="toggleRunning">
                {{ running ? '停' : '开始' }}
            </NButton>
        </div>
    </div>
    <Menu v-model:menu="menu"/>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from 'vue';
import Container from '@/components/container/container.vue';
import {Food} from '@/types/food';
import Menu from '@/components/menu/index.vue';
import {NButton} from 'naive-ui';
import defaultMenu from '@/config/menu';

export default defineComponent({
    components: {
        Container,
        Menu,
        NButton,
    },
    setup() {

        const computedMenu = computed({
            get: () => {
                try {
                    let menu = localStorage.getItem('menu');
                    if (menu == '' || menu == null) {
                        menu = defaultMenu;
                        localStorage.setItem('menu', menu);
                    }
                    return JSON.parse(menu);
                } catch (e) {
                    localStorage.setItem('menu', defaultMenu);
                    return JSON.parse(defaultMenu);
                }
            },
            set: (value) => {
                localStorage.setItem('menu', JSON.stringify(value));
            }
        });

        const menu = ref(computedMenu.value);

        watch(() => menu.value, value => {
            computedMenu.value = value;
        });

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
            selection,
            menu
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
}
</style>
