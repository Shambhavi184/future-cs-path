import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown, ChevronRight, Calendar, GraduationCap } from "lucide-react";
import { Semester } from "../data/curriculum";
import { CourseCard } from "./CourseCard";

interface SemesterCardProps {
  semester: Semester;
  completedCourses: string[];
  onCourseToggle: (courseCode: string) => void;
}

export function SemesterCard({ semester, completedCourses, onCourseToggle }: SemesterCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const completedCount = semester.courses.filter(course => completedCourses.includes(course.code)).length;
  const totalCourses = semester.courses.length;
  const isCompleted = completedCount === totalCourses;

  return (
    <Card className="overflow-hidden border-2 transition-smooth hover:shadow-xl">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader className="gradient-subtle border-b">
          <CollapsibleTrigger className="flex items-center justify-between w-full text-left hover:bg-white/50 dark:hover:bg-black/20 rounded-md p-3 -m-3">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                <Badge 
                  variant={isCompleted ? "default" : "secondary"} 
                  className={`text-sm font-semibold ${isCompleted ? 'bg-success text-success-foreground' : ''}`}
                >
                  Semester {semester.number}
                </Badge>
              </div>
              <div>
                <CardTitle className="text-xl">{semester.title}</CardTitle>
                <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {semester.duration}
                  </span>
                  <span className="flex items-center">
                    <GraduationCap className="h-4 w-4 mr-1" />
                    {totalCourses} courses
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-accent">
                {completedCount}/{totalCourses}
              </div>
              <div className="text-xs text-muted-foreground">
                {Math.round((completedCount / totalCourses) * 100)}% Complete
              </div>
            </div>
          </CollapsibleTrigger>
        </CardHeader>

        <CollapsibleContent>
          <CardContent className="p-6 space-y-4">
            {semester.courses.map((course) => (
              <CourseCard
                key={course.code}
                course={course}
                isCompleted={completedCourses.includes(course.code)}
                onToggleComplete={onCourseToggle}
              />
            ))}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}