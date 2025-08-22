import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Calendar, Target } from "lucide-react";
import { refresherCurriculum } from "../data/curriculum";

export function RefresherTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
      
      <div className="space-y-6">
        {refresherCurriculum.map((month, index) => (
          <div key={month.month} className="relative flex items-start space-x-6">
            {/* Timeline node */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 bg-card border-4 border-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-lg font-bold text-accent">M{month.month}</span>
              </div>
            </div>

            {/* Content card */}
            <Card className="flex-1 transition-smooth hover:shadow-lg border-l-4 border-l-accent/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{month.title}</CardTitle>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                    <Calendar className="h-3 w-3 mr-1" />
                    Month {month.month}
                  </Badge>
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Target className="h-4 w-4 mr-2" />
                  {month.focus}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Topics */}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Key Topics</h4>
                  <div className="space-y-1">
                    {month.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="text-sm bg-muted/50 rounded-md p-2 border-l-2 border-l-primary/30">
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Essential Resources</h4>
                  <div className="space-y-2">
                    {month.resources.map((resource, resourceIndex) => (
                      <a
                        key={resourceIndex}
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
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}