import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import PATHS from "@/paths";
import { TopicService } from "@/services/topic.service";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default async function TopicList() {
  const topics = await TopicService.getAll();
  return (
    <div className="h-full p-4 overflow-hidden">
      <Card className="h-full flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h2 className="font-semibold text-lg">Topics</h2>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost">
                <Link href={PATHS.topic.new()}>
                  <PlusCircle className="h-5 w-5" />
                  <span className="sr-only">Add new topic</span>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add new topic</p>
            </TooltipContent>
          </Tooltip>
        </CardHeader>
        <CardContent className="flex-grow p-0 overflow-hidden">
          <ScrollArea className="h-full overflow-auto">
            <nav className="space-y-1 p-2">
              <div className="flex flex-wrap gap-2">
                {[...topics, ...topics, ...topics].map((topic) => (
                  <Link
                    key={topic.id}
                    className={badgeVariants({ variant: "secondary" })}
                    href={PATHS.topic.show(topic.slug)}
                  >
                    {topic.slug}
                  </Link>
                ))}
              </div>
            </nav>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
