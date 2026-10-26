<script setup lang="ts">
export type IconName =
  | "arrow-up-right"
  | "arrow-right"
  | "arrow-down"
  | "github"
  | "linkedin"
  | "mail"
  | "copy"
  | "check"
  | "menu"
  | "close"
  | "chevron-left"
  | "chevron-right"
  | "code"
  | "database"
  | "server"
  | "layers"
  | "pin";

withDefaults(defineProps<{ name: IconName; size?: number }>(), { size: 20 });

const paths: Record<IconName, string[]> = {
  "arrow-up-right": ["M7 17 17 7M7 7h10v10"],
  "arrow-right": ["M4 12h16m-7-7 7 7-7 7"],
  "arrow-down": ["M12 4v16m-7-7 7 7 7-7"],
  github: [
    "M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.7-1.6 6.7-7.3a5.7 5.7 0 0 0-1.5-4c.2-.8.3-2.3-.2-3-1.3-.2-2.9.7-3.5 1.2a12 12 0 0 0-7 0C7.4 1.7 5.8.8 4.5 1a6 6 0 0 0-.2 3A5.7 5.7 0 0 0 2.8 8c0 5.7 3.4 6.9 6.7 7.3A3.5 3.5 0 0 0 8.5 18v4",
  ],
  linkedin: ["M5 9v11M5 4v.1M10 20V9h4v2c1-3 6-3 6 2v7M14 20v-7"],
  mail: [
    "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM3 6l9 7 9-7",
  ],
  copy: ["M9 8h11v13H9zM15 8V3H4v13h5"],
  check: ["m5 12 4 4L19 6"],
  menu: ["M4 6h16M4 12h16M4 18h16"],
  close: ["m6 6 12 12M6 18 18 6"],
  "chevron-left": ["m14 6-6 6 6 6"],
  "chevron-right": ["m10 6 6 6-6 6"],
  code: ["m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18"],
  database: [
    "M20 6c0 2.2-3.6 4-8 4S4 8.2 4 6s3.6-4 8-4 8 1.8 8 4ZM4 6v12c0 2.2 3.6 4 8 4s8-1.8 8-4V6M4 12c0 2.2 3.6 4 8 4s8-1.8 8-4",
  ],
  server: ["M3 3h18v7H3zM3 14h18v7H3zM7 6.5h.1M7 17.5h.1M11 6.5h6m-6 11h6"],
  layers: ["m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5"],
  pin: [
    "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  ],
};
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    class="icon"
  >
    <path v-for="(path, i) in paths[name]" :key="i" :d="path" />
  </svg>
</template>
