import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestiae deserunt odio quaerat non adipisci.",
  },
  {
    id: 2,
    rating: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestiae deserunt odio quaerat non adipisci.",
  },
  {
    id: 3,
    rating: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestiae deserunt odio quaerat non adipisci.",
  },
  {
    id: 4,
    rating: 7,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestiae deserunt odio quaerat non adipisci.",
  },
]);
