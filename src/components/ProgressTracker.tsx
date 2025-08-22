import { useEffect, useState } from "react";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { curriculum } from "../data/curriculum";

interface ProgressData {
  completedCourses: string[];
  totalCourses: number;
}

interface ProgressTrackerProps {
  onCourseToggle?: (courseCode: string, isCompleted: boolean) => void;
}

export function ProgressTracker({ onCourseToggle }: ProgressTrackerProps) {
  const [progress, setProgress] = useState<ProgressData>({ completedCourses: [], totalCourses: 0 });

  useEffect(() => {
    const totalCourses = curriculum.reduce((acc, semester) => acc + semester.courses.length, 0);
    const completedCourses = JSON.parse(localStorage.getItem("completedCourses") || "[]");
    setProgress({ completedCourses, totalCourses });
  }, []);

  const completionPercentage = progress.totalCourses > 0 ? (progress.completedCourses.length / progress.totalCourses) * 100 : 0;

  return (
    <div className="glass rounded-xl p-6 border transition-smooth hover:shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-foreground">Learning Progress</h3>
        <Badge variant="secondary" className="bg-accent/10 text-accent font-medium">
          {progress.completedCourses.length}/{progress.totalCourses} Courses
        </Badge>
      </div>
      
      <div className="space-y-3">
        <Progress value={completionPercentage} className="h-3" />
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>{completionPercentage.toFixed(1)}% Complete</span>
          <span>Target: 2026-2028</span>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-muted-foreground">
          Click on course cards to mark them as completed and track your progress.
        </p>
      </div>
    </div>
  );
}