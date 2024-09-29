import TopicCreateForm from "@/app/topics/_components/topic-create-form";
import Modal from "@/components/modal";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function TopicCreateModal() {
  return (
    <Modal>
      <DialogHeader>
        <DialogTitle>Add a New Topic</DialogTitle>
        <DialogDescription>
          Enter the details to create a new topic.
        </DialogDescription>
      </DialogHeader>
      <TopicCreateForm />
    </Modal>
  );
}
