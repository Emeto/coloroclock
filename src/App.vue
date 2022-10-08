<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { DateTime } from "luxon";
import { IClock } from "./interfaces/IClock";

export default defineComponent({
  setup() {
    const clocks: Ref<IClock[]> = ref([
      {
        color: '',
        now: DateTime.now(),
        time: '',
        date: '',
        zone: 'Europe/Paris'
      },
      {
        color: '',
        now: DateTime.now().setZone('America/Bogota'),
        time: '',
        date: '',
        zone: 'America/Bogota'
      },
      {
        color: '',
        now: DateTime.now().setZone('America/New_York'),
        time: '',
        date: '',
        zone: 'America/New_York'
      },
      {
        color: '',
        now: DateTime.now().setZone('Asia/Tokyo'),
        time: '',
        date: '',
        zone: 'Asia/Tokyo'
      },
      {
        color: '',
        now: DateTime.now().setZone('America/Los_Angeles'),
        time: '',
        date: '',
        zone: 'America/Los_Angeles'
      },
      {
        color: '',
        now: DateTime.now().setZone('Europe/London'),
        time: '',
        date: '',
        zone: 'Europe/London'
      }
    ]);

    return {
      clocks
    }
  },
  mounted() {
    setInterval(() => {
      this.clocks.forEach(clock => {
        clock.now = DateTime.now().setZone(clock.zone);
        clock.time = DateTime.now().setZone(clock.zone).toLocaleString(DateTime.TIME_24_WITH_SECONDS);
        clock.date = DateTime.now().setZone(clock.zone).toLocaleString(DateTime.DATE_MED);
        clock.color = this.timeToHex(clock.time);
      });
    }, 1000);
  },
  methods: {
    timeToHex(time: string): string {
      const elements: string[] = time.split(':');
      let hours: string = parseInt(elements[0]).toString(16);
      let minutes: string = parseInt(elements[1]).toString(16);
      let seconds: string = parseInt(elements[2]).toString(16);

      if (this.isLetter(hours) || this.isSingleDigit(hours)) {
        hours = hours + hours;
      }
      if (this.isLetter(minutes) || this.isSingleDigit(minutes)) {
        minutes = minutes + minutes;
      }
      if (this.isLetter(seconds) || this.isSingleDigit(seconds)) {
        seconds = seconds + seconds;
      }

      return '#' + hours + minutes + seconds;
    },
    isLetter(hex: string): boolean {
      return ['a','b','c','d','e','f'].includes(hex);
    },
    isSingleDigit(hex: string): boolean {
      return hex.length === 1 && !this.isLetter(hex);
    }
  }
});
</script>

<template>
  <div class="h-screen">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 h-screen">
      <div v-for="clock in clocks" class="w-full flex items-center justify-items-center transition-colors p-10 md:pl-10 lg:pl-10" :style="'background: ' + clock.color + ';'">
        <div class="text-white">
          <span>{{ clock.zone }}</span><br />
          <span>{{ clock.date }}</span>
          <h3 class="text-6xl font-bold my-5">{{ clock.time }}</h3>
          <span class="text-2xl">{{ clock.color }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
