<script setup lang="ts">
import { useMailStore } from '@/stores'

const store = useMailStore()
</script>

<template>
  <div>
    <h1>Inbox</h1>

    <ol>
      <li v-for="email in store.emails" :key="email.id">
        <h2>{{ email.id }}</h2>
        <p>{{ email.subject }}</p>
        <v-btn color="success" @click="store.removeEmail(email.id)"
          >Delete</v-btn
        >
      </li>
    </ol>
  </div>
</template>

<style scoped></style>
