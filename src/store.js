import { writable } from 'svelte/store';

const page = writable('who');
const rates = writable({
  loading: false,
  error: null,
  results: null,
});

export {
  page,
  rates,
}
