import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface LessonCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color?: string;
}

const LessonCard = ({ title, description, icon: Icon, href, color = "primary" }: LessonCardProps) => {
  const colorClasses = {
    primary: "from-primary to-primary-glow",
    secondary: "from-secondary to-blue-400",
    accent: "from-accent to-yellow-400",
    success: "from-success to-green-400",
  };

  return (
    <Link to={href}>
      <Card className="group relative overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
        <div className="p-6">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
          <Button variant="ghost" size="sm" className="gap-2 group-hover:gap-3 transition-all">
            Ашу
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
      </Card>
    </Link>
  );
};

export default LessonCard;
