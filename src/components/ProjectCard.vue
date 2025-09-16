<template>
    <div class="border rounded-lg p-4 shadow-md">
        <!-- Carrossel de imagens -->
        <div class="carousel overflow-hidden relative h-48">
            <img v-for="(img, index) in projeto.imagens" :key="index" :src="img"
                class="absolute w-full h-full object-cover transition-opacity duration-500"
                :class="{ 'opacity-100': index === imagemAtual, 'opacity-0': index !== imagemAtual }" />
        </div>

        <!-- Título e descrição -->
        <h2 class="text-xl font-bold mt-4">{{ projeto.titulo }}</h2>
        <p class="text-gray-700">{{ projeto.descricao }}</p>

        <!-- Tecnologias -->
        <div class="flex gap-2 mt-2">
            <img v-for="(tech, index) in projeto.tecnologias" :key="index" :src="tech.icone" :alt="tech.nome"
                class="w-6 h-6" />
        </div>

        <!-- Botão de acesso -->
        <a :href="projeto.link" target="_blank"
            class="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Acessar Projeto
        </a>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import type { Projeto } from '../types/types.ts'

const props = defineProps<{
    projeto: Projeto
}>()

const imagemAtual = ref(0)

onMounted(() => {
    setInterval(() => {
        imagemAtual.value = (imagemAtual.value + 1) % props.projeto.imagens.length
    }, 3000)
})
</script>

<style scoped>
.carousel img {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
