<script>
  import FeedbackList from "./components/FeedbackList.svelte";

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
</script>

<main class="container">
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>

<style>
</style>
