<script>
  import { FeedbackStore } from "../stores";

  $: count = $FeedbackStore.length;
  $: averageRating = $FeedbackStore.reduce((average, curr) => {
    average += curr.rating / $FeedbackStore.length;
    return average;
  }, 0);
</script>

<div class="feedback-stats">
  <h4>
    {count} Reviews
  </h4>
  <h4>
    Ratings Average: {averageRating}
  </h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }
</style>
