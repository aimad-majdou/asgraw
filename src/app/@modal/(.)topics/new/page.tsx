import TopicCreateForm from "@/app/topics/_components/topic-create-form";
import Modal from "@/components/modal";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function TopicCreateModal() {
  return (
    <Modal>
      <DialogHeader>
        <DialogTitle>Create a topic</DialogTitle>
      </DialogHeader>
      <TopicCreateForm />
    </Modal>
  );
}
