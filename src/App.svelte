<script>
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";

  let feedback = [
    {
      id: 1,
      rating: 8,
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
  ];

  const deleteFeedback = e => {
    const clickedItemID = e.detail;
    feedback = feedback.filter(item => item.id !== clickedItemID);
    return feedback;
  };

  $: count = feedback.length;
  $: averageRating = feedback.reduce((average, curr) => {
    average += curr.rating / feedback.length;
    return average;
  }, 0);
</script>

<main class="container">
  <FeedbackForm />
  <FeedbackStats {count} {averageRating} />
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>

<style>
</style>
