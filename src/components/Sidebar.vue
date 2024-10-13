<script setup lang="ts">
import {
  VList,
  VListItem,
  VNavigationDrawer,
  VDivider,
} from 'vuetify/components'
</script>

<template>
  <v-navigation-drawer permanent fixed>
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
      title="John Leider"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-forum"
        title="Inbox"
        value="inbox"
        to="/inbox"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>
