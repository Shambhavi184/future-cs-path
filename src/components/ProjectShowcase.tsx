import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { projectCategories } from "../data/curriculum";

const statusIcons = {
  completed: CheckCircle,
  "in-progress": Clock,
  planned: AlertCircle
};

const statusColors = {
  completed: "bg-success/10 text-success border-success/20",
  "in-progress": "bg-warning/10 text-warning border-warning/20",
  planned: "bg-muted text-muted-foreground border-muted-foreground/20"
};

export function ProjectShowcase() {
  return (
    <div className="space-y-8">
      {projectCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground flex items-center">
            <span className="gradient-accent bg-clip-text text-transparent">{category.title}</span>
            <div className="ml-3 h-px flex-1 bg-gradient-accent opacity-30"></div>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.projects.map((project, projectIndex) => {
              const StatusIcon = statusIcons[project.status];
              
              return (
                <Card key={projectIndex} className="transition-smooth hover:shadow-lg hover:shadow-accent/10 border-l-4 border-l-accent/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                        <CardDescription className="mt-1">{project.description}</CardDescription>
                      </div>
                      <Badge className={`ml-2 ${statusColors[project.status]} flex items-center space-x-1`}>
                        <StatusIcon className="h-3 w-3" />
                        <span className="capitalize text-xs">{project.status.replace('-', ' ')}</span>
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                        disabled={project.status === 'planned'}
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      
                      {project.status === 'completed' && (
                        <Button
                          variant="default"
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
            
            {/* Add Project placeholder */}
            <Card className="border-2 border-dashed border-muted-foreground/30 hover:border-accent/50 transition-smooth cursor-pointer group">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-3 min-h-[200px]">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-smooth">
                  <span className="text-2xl font-light text-muted-foreground group-hover:text-accent">+</span>
                </div>
                <div>
                  <p className="font-medium text-muted-foreground group-hover:text-foreground">Add New Project</p>
                  <p className="text-xs text-muted-foreground">Showcase your work</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}