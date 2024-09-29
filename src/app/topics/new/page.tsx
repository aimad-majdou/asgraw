import TopicCreateForm from "../_components/topic-create-form";

export default function AddTopicForm() {
  return (
    <div className="container mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold mb-4">Add a New Topic</h1>
      <p className="text-muted-foreground mb-6">
        Enter the details to create a new topic.
      </p>

      <TopicCreateForm />
    </div>
  );
}
