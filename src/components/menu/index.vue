<template>
    <div class="menu-button">
        <NButton secondary type="default" @click="show = true">
            <template #icon>
                <NIcon>
                    <svg t="1640066261033" class="icon" viewBox="0 0 1027 1024"
                         xmlns="http://www.w3.org/2000/svg" p-id="24789" xmlns:xlink="http://www.w3.org/1999/xlink"
                         width="200.5859375" height="200">
                        <path
                            d="M989.781546 1024H41.368579c-15.321696 0-28.089776-12.76808-28.089776-28.089776V40.857855c0-15.321696 12.76808-28.089776 28.089776-28.089775h948.412967c15.321696 0 28.089776 12.76808 28.089776 28.089775v955.052369c0 15.321696-12.76808 28.089776-28.089776 28.089776z m-920.323192-56.179551h892.233417v-898.872818H69.458354v898.872818z"
                            p-id="24790"></path>
                        <path
                            d="M803.878304 260.979551h-474.972568c-15.321696 0-28.089776-12.76808-28.089776-28.089775s12.76808-28.089776 28.089776-28.089776h474.972568c15.321696 0 28.089776 12.76808 28.089776 28.089776s-12.76808 28.089776-28.089776 28.089775zM803.878304 433.60399h-474.972568c-15.321696 0-28.089776-12.76808-28.089776-28.089776s12.76808-28.089776 28.089776-28.089775h474.972568c15.321696 0 28.089776 12.76808 28.089776 28.089775s-12.76808 28.089776-28.089776 28.089776zM803.878304 899.383541h-474.972568c-15.321696 0-28.089776-12.76808-28.089776-28.089775s12.76808-28.089776 28.089776-28.089776h474.972568c15.321696 0 28.089776 12.76808 28.089776 28.089776s-12.76808 28.089776-28.089776 28.089775zM981.099252 772.72419H49.54015c-15.321696 0-28.089776-12.76808-28.089776-28.089776s12.76808-28.089776 28.089776-28.089776h931.559102c15.321696 0 28.089776 12.76808 28.089775 28.089776s-12.76808 28.089776-28.089775 28.089776z"
                            p-id="24791"></path>
                        <path
                            d="M219.610973 229.825436m-30.643392 0a30.643392 30.643392 0 1 0 61.286783 0 30.643392 30.643392 0 1 0-61.286783 0Z"
                            p-id="24792"></path>
                        <path
                            d="M219.610973 405.514214m-30.643392 0a30.643392 30.643392 0 1 0 61.286783 0 30.643392 30.643392 0 1 0-61.286783 0Z"
                            p-id="24793"></path>
                        <path
                            d="M219.610973 871.293766m-30.643392 0a30.643392 30.643392 0 1 0 61.286783 0 30.643392 30.643392 0 1 0-61.286783 0Z"
                            p-id="24794"></path>
                    </svg>
                </NIcon>
            </template>
        </NButton>
    </div>
    <NModal v-model:show="show" preset="card" closable size="small" title="菜单" style="width: 90%;"
            :content-style="{minHeight: '40vh', maxHeight: '40vh', overflow: 'auto'}">
        <NDynamicTags closable v-model:value="foods"/>
    </NModal>
</template>

<script lang="ts">
import {defineComponent, PropType, ref, watchEffect} from 'vue';
import {NButton, NIcon, NModal, NCard, NDynamicTags} from 'naive-ui';

export default defineComponent({
    components: {
        NButton,
        NIcon,
        NModal,
        NCard,
        NDynamicTags
    },
    modal: ['menu'],
    props: {
        menu: {
            type: Array as PropType<string[]>,
        }
    },
    emits: ['update:menu'],
    setup(props, ctx) {

        const foods = ref(props.menu);

        watchEffect(() => {
            ctx.emit('update:menu', foods.value);
        });

        return {
            show: ref(false),
            foods
        }
    }
})
</script>

<style scoped lang="scss">
.menu-button {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    padding: 16px 20px 0 0;
}
</style>
