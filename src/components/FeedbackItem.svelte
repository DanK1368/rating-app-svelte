<script>
  import { FeedbackStore } from "../stores";
  import Card from "./Card.svelte";
  export let item;

  const handleDelete = id => {
    FeedbackStore.update(currentFeedback => {
      return currentFeedback.filter(item => item.id !== id);
    });
  };
</script>

<Card>
  <div class="rating-display">
    {item.rating}
  </div>
  <button
    class="close"
    aria-label="button to delete the current item"
    on:click={() => handleDelete(item.id)}
  >
    X
  </button>
  <p>
    {item.text}
  </p>
</Card>

<style>
  .rating-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 1.8rem;
    display: grid;
    place-content: center;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }

  .close:hover {
    scale: 120%;
    color: #ff6a95;
  }
</style>
