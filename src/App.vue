<template>
    <NConfigProvider>
        <router-view></router-view>
    </NConfigProvider>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {NConfigProvider} from 'naive-ui';

export default defineComponent({
    components: {
        NConfigProvider
    },
    setup() {
    }
});
</script>