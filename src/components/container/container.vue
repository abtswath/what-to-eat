<template>
    <div class="container">
        <transition-group tag="ul" name="food">
            <FoodItem v-for="food in list" :key="food.name" :food="food"/>
        </transition-group>
    </div>
</template>

<script lang="ts">
import {defineComponent, watch, ref, computed, PropType} from 'vue';
import FoodItem from '@/components/container/food-item.vue';
import {Food} from '@/types/food';

export default defineComponent({
    components: {
        FoodItem
    },
    props: {
        running: {
            type: Boolean,
            default: false
        },
        speed: {
            type: Number,
            default: 1000 / 15
        },
        menu: {
            type: Array as PropType<string[]>,
            required: true
        }
    },
    setup(props: { running: boolean, speed: number, menu: string[] }, context) {
        const randomFood = (): Food => {
            console.log(props.menu)
            return {
                name: props.menu[Math.floor(Math.random() * props.menu.length)],
                x: Math.random() * 70 + 5,
                y: Math.random() * 80 + 10,
            };
        }

        const list = ref<Food[]>([]);
        const remove = () => {
            list.value.shift();
        }
        const add = () => {
            const food = randomFood();
            context.emit('on-change', food);
            list.value.push(food);
        }

        watch(() => props.running, value => {
            if (props.running) {
                run(props.speed);
            }
        });

        const run = (speed: number) => {
            let lastTime = 0;
            const start = (timestamp: number) => {
                if (!props.running) {
                    return;
                }
                window.requestAnimationFrame(start);
                if (timestamp - lastTime < speed) {
                    return;
                }
                add();
                setTimeout(() => {
                    remove()
                }, 300);
                lastTime = timestamp
            };

            window.requestAnimationFrame(start);
        }

        return {
            list,
            remove,
            add,
            run
        };
    }
})
</script>

<style lang="scss" scoped>
.container {
    z-index: 1;
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: .8;
}
</style>
