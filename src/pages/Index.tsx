import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { 
  BookOpen, 
  Target, 
  Trophy, 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown,
  Sparkles,
  Brain,
  Rocket,
  Users
} from "lucide-react";
import { DarkModeToggle } from "../components/DarkModeToggle";
import { ProgressTracker } from "../components/ProgressTracker";
import { SemesterCard } from "../components/SemesterCard";
import { RefresherTimeline } from "../components/RefresherTimeline";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { curriculum } from "../data/curriculum";
import heroImage from "../assets/hero-bg.jpg";

const Index = () => {
  const [completedCourses, setCompletedCourses] = useState<string[]>([]);

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem("completedCourses") || "[]");
    setCompletedCourses(completed);
  }, []);

  const handleCourseToggle = (courseCode: string) => {
    const newCompleted = completedCourses.includes(courseCode)
      ? completedCourses.filter(code => code !== courseCode)
      : [...completedCourses, courseCode];
    
    localStorage.setItem("completedCourses", JSON.stringify(newCompleted));
    setCompletedCourses(newCompleted);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-accent" />
            <span className="font-bold text-lg">AI-First CS</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <button onClick={() => scrollToSection('about')} className="animated-underline hover:text-accent">About</button>
            <button onClick={() => scrollToSection('curriculum')} className="animated-underline hover:text-accent">Curriculum</button>
            <button onClick={() => scrollToSection('projects')} className="animated-underline hover:text-accent">Projects</button>
            <button onClick={() => scrollToSection('resources')} className="animated-underline hover:text-accent">Resources</button>
          </div>

          <DarkModeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        
        <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
          <div className="space-y-4">
            <Badge className="bg-accent/20 text-accent border-accent/30 text-sm px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2" />
              Starting 2026
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Future-Proof
              <span className="block gradient-accent bg-clip-text text-transparent">
                AI-First CS Master's
              </span>
              Curriculum
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              A self-taught Master's program in Computer Science, designed for the AI-driven future of technology
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('curriculum')}
              className="bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-3"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              View Curriculum
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('about')}
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-3"
            >
              <Target className="h-5 w-5 mr-2" />
              Learn More
            </Button>
          </div>

          <div className="animate-bounce text-white/60 mt-12">
            <ChevronDown className="h-6 w-6 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Build This <span className="gradient-accent bg-clip-text text-transparent">Curriculum?</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The technology landscape is evolving at unprecedented speed, with AI reshaping every aspect of computer science. 
                  Traditional education often lags behind industry needs, so I'm creating a future-focused, self-directed Master's 
                  program that bridges this gap.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-accent/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Brain className="h-5 w-5 mr-2 text-accent" />
                      AI-First Approach
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Every course integrates modern AI techniques and tools, preparing for an AI-driven future.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <Rocket className="h-5 w-5 mr-2 text-purple" />
                      Industry Relevance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Curriculum designed around real industry needs and cutting-edge technologies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full gradient-primary flex items-center justify-center shadow-2xl glow">
                <div className="w-56 h-56 rounded-full bg-background flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-12 w-12 text-accent mx-auto mb-2" />
                    <p className="font-semibold">Self-Learner</p>
                    <p className="text-sm text-muted-foreground">Future-Ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <ProgressTracker />
        </div>
      </section>

      {/* Refresher Section */}
      <section id="refresher" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Semester 0
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              BE CS Refresher <span className="gradient-accent bg-clip-text text-transparent">(3 Months)</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strengthen foundational knowledge before diving into advanced AI and systems topics
            </p>
          </div>
          
          <RefresherTimeline />
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Master's <span className="gradient-accent bg-clip-text text-transparent">Curriculum</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six comprehensive semesters covering AI, systems, and cutting-edge computer science
            </p>
          </div>

          <div className="space-y-8">
            {curriculum.map((semester) => (
              <SemesterCard
                key={semester.number}
                semester={semester}
                completedCourses={completedCourses}
                onCourseToggle={handleCourseToggle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project <span className="gradient-accent bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hands-on projects that demonstrate practical application of learned concepts
            </p>
          </div>

          <ProjectShowcase />
        </div>
      </section>

      {/* Capstone Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-accent/30 glow">
            <CardHeader className="text-center pb-6">
              <Badge className="bg-accent/20 text-accent border-accent/30 mb-4 mx-auto">
                <Trophy className="h-4 w-4 mr-2" />
                Final Capstone
              </Badge>
              <CardTitle className="text-2xl md:text-3xl">
                Production-Ready <span className="gradient-accent bg-clip-text text-transparent">AI SaaS</span>
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                The ultimate demonstration of mastery: building and launching a complete AI-powered SaaS product
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                This capstone project will integrate everything learned throughout the program, from machine learning 
                and system design to product development and deployment at scale.
              </p>
              <Badge variant="outline" className="text-accent border-accent/20">
                Coming in Semester 6 • 2028
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learning <span className="gradient-accent bg-clip-text text-transparent">Resources</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Curated books, courses, and materials organized by semester
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-primary/50">
              <CardHeader>
                <CardTitle className="text-lg">Essential Textbooks</CardTitle>
                <CardDescription>Core academic references</CardDescription>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p>• CLRS: Introduction to Algorithms</p>
                <p>• Deep Learning (Goodfellow et al.)</p>
                <p>• Designing Data-Intensive Applications</p>
                <p>• The Elements of Statistical Learning</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent/50">
              <CardHeader>
                <CardTitle className="text-lg">Online Courses</CardTitle>
                <CardDescription>Structured learning paths</CardDescription>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p>• MIT OpenCourseWare</p>
                <p>• Stanford CS229/CS231n</p>
                <p>• Fast.ai Practical Deep Learning</p>
                <p>• AWS/GCP Cloud Certifications</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple/50">
              <CardHeader>
                <CardTitle className="text-lg">Tools & Platforms</CardTitle>
                <CardDescription>Development environment</CardDescription>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p>• Python, PyTorch, TensorFlow</p>
                <p>• Docker, Kubernetes</p>
                <p>• AWS, GCP, Azure</p>
                <p>• Git, MLflow, Weights & Biases</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-accent" />
                <span className="font-bold text-lg">AI-First CS</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Building the future of computer science education, one semester at a time.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Connect</h3>
              <div className="space-y-2">
                <a href="https://github.com" className="flex items-center text-sm text-muted-foreground hover:text-accent animated-underline">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
                <a href="https://linkedin.com" className="flex items-center text-sm text-muted-foreground hover:text-accent animated-underline">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
                <a href="mailto:contact@example.com" className="flex items-center text-sm text-muted-foreground hover:text-accent animated-underline">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
              </div>
            </div>

            <div className="md:text-right">
              <blockquote className="text-sm italic text-muted-foreground border-l-2 border-accent/30 pl-4 md:border-l-0 md:border-r-2 md:pr-4 md:pl-0">
                "The best time to plant a tree was 20 years ago. The second best time is now."
              </blockquote>
              <p className="text-xs text-muted-foreground mt-2">— Chinese Proverb</p>
            </div>
          </div>

          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2024 AI-First CS Curriculum. Self-directed learning journey.</p>
            <p>Last updated: December 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;