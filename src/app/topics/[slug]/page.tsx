import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TopicService } from "@/services/topic.service";
import { PlusCircle } from "lucide-react";
import { notFound } from "next/navigation";

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

export default async function TopicShowPage({ params }: TopicShowPageProps) {
  const posts = [
    {
      id: 1,
      title: "First Post",
      excerpt: "This is a brief excerpt of the first post...",
    },
    {
      id: 2,
      title: "Second Post",
      excerpt: "Here's a short summary of the second post...",
    },
    {
      id: 3,
      title: "Third Post",
      excerpt: "And this is a quick overview of the third post...",
    },
  ];

  const topic = await TopicService.getOne(params.slug);

  if (!topic) {
    return notFound();
  }

  const { slug, description } = topic;

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-[1fr_auto] gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-4">{slug}</h1>
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Post
            </Button>
          </div>
          <Card>
            <CardContent className="pt-4">
              <p>{description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
