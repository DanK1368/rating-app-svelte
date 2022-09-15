<script>
  // import { onDestroy } from "svelte/types/runtime/internal/lifecycle";
  import { FeedbackStore } from "../stores";
  import { fade, scale } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
  // let feedback = [];

  // calling the subscribe method, the callback func takes in the data which we set to our feedback...this actually returns an unsubscribe function which we store in a variable
  // const unsubscribe = FeedbackStore.subscribe(data => (feedback = data));

  // // when component gets destroyed we then call unsubscribe
  // onDestroy(() => {
  //   unsubscribe();
  // });
</script>

{#each $FeedbackStore as item (item.id)}
  <div in:scale out:fade={{ duration: 500 }}>
    <FeedbackItem {item} />
  </div>
{/each}
