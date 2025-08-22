import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown, ChevronRight, Check, Clock, ExternalLink, BookOpen } from "lucide-react";
import { Course } from "../data/curriculum";

interface CourseCardProps {
  course: Course;
  isCompleted: boolean;
  onToggleComplete: (courseCode: string) => void;
}

export function CourseCard({ course, isCompleted, onToggleComplete }: CourseCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="transition-smooth hover:shadow-md border-l-4 border-l-accent/50">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader className="pb-3">
          <CollapsibleTrigger className="flex items-center justify-between w-full text-left hover:bg-muted/50 rounded-md p-2 -m-2">
            <div className="flex items-center space-x-3 flex-1">
              <div className="flex items-center space-x-2">
                {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                <Badge variant="outline" className="font-mono text-xs">
                  {course.code}
                </Badge>
              </div>
              <div className="flex-1">
                <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                <CardDescription className="flex items-center space-x-4 mt-1">
                  <span>{course.credits} credits</span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {course.weeklyTopics.length} weeks
                  </span>
                </CardDescription>
              </div>
            </div>
            <Button
              variant={isCompleted ? "default" : "outline"}
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onToggleComplete(course.code);
              }}
              className={isCompleted ? "bg-success hover:bg-success/90 text-success-foreground" : ""}
            >
              <Check className="h-4 w-4" />
              {isCompleted ? "Completed" : "Mark Done"}
            </Button>
          </CollapsibleTrigger>
        </CardHeader>

        <CollapsibleContent>
          <CardContent className="pt-0 space-y-4">
            {/* Weekly Topics */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2 flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Weekly Topics
              </h4>
              <div className="space-y-1">
                {course.weeklyTopics.map((topic, index) => (
                  <div key={index} className="text-sm bg-muted/50 rounded-md p-2">
                    Week {index + 1}: {topic}
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            {course.prerequisites.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Prerequisites</h4>
                <div className="flex flex-wrap gap-1">
                  {course.prerequisites.map((prereq, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {prereq}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Assessment */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Assessment</h4>
              <p className="text-sm bg-accent/10 border border-accent/20 rounded-md p-3">
                {course.assessment}
              </p>
            </div>

            {/* Project */}
            {course.project && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Project</h4>
                <p className="text-sm bg-purple/10 border border-purple/20 rounded-md p-3">
                  {course.project}
                </p>
              </div>
            )}

            {/* Resources */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Resources</h4>
              <div className="space-y-2">
                {course.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm bg-card border rounded-md p-3 hover:bg-muted/50 transition-smooth group"
                  >
                    <div>
                      <div className="font-medium group-hover:text-accent animated-underline">
                        {resource.title}
                      </div>
                      {resource.author && (
                        <div className="text-muted-foreground text-xs">by {resource.author}</div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {resource.type}
                      </Badge>
                      <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-accent" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}