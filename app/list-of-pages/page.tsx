import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Users, 
  BookOpen, 
  Trophy, 
  HelpCircle, 
  Building2, 
  GraduationCap,
  ArrowRight,
  ExternalLink
} from "lucide-react";

interface RouteItem {
  path: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const routes: RouteItem[] = [
  {
    path: "/",
    title: "Home",
    description: "Main landing page with NAC 2025 information and hero sections",
    icon: <Home className="w-6 h-6" />,
    category: "Main"
  },
  {
    path: "/direct-registration",
    title: "Student Participation",
    description: "Individual student registration and participation portal",
    icon: <Users className="w-6 h-6" />,
    category: "Registration"
  },
  {
    path: "/school-registration",
    title: "School Registration",
    description: "School registration portal for NAC 2025 competition",
    icon: <Building2 className="w-6 h-6" />,
    category: "Registration"
  },
  {
    path: "/st/reg",
    title: "Student Registration",
    description: "Alternative student registration page",
    icon: <GraduationCap className="w-6 h-6" />,
    category: "Registration"
  },
  {
    path: "/sr",
    title: "Student Registration (SR)",
    description: "Student registration page with SR prefix",
    icon: <GraduationCap className="w-6 h-6" />,
    category: "Registration"
  },
  {
    path: "/legacy",
    title: "NAC Legacy",
    description: "Information about previous NAC competitions and achievements",
    icon: <Trophy className="w-6 h-6" />,
    category: "Information"
  },
  {
    path: "/study-material",
    title: "Study Material",
    description: "Educational resources and study materials for NAC preparation",
    icon: <BookOpen className="w-6 h-6" />,
    category: "Resources"
  },
  {
    path: "/awards",
    title: "Awards",
    description: "Information about prizes, recognition, and awards ceremony",
    icon: <Trophy className="w-6 h-6" />,
    category: "Information"
  },
  {
    path: "/faqs",
    title: "FAQs",
    description: "Frequently asked questions and answers about NAC",
    icon: <HelpCircle className="w-6 h-6" />,
    category: "Support"
  }
];

const categories = ["Main", "Registration", "Information", "Resources", "Support"];

export default function ListOfPages() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            All Available Routes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete list of all pages and routes available in the NAC (National Astronomy Challenge) application
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <div
                key={category}
                className="px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-700 font-medium hover:border-orange-300 hover:text-orange-600 transition-colors cursor-pointer"
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route) => (
            <div
              key={route.path}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                  {route.icon}
                </div>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {route.category}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {route.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {route.description}
              </p>
              
              <div className="flex items-center justify-between">
                <code className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-mono">
                  {route.path}
                </code>
                
                <Link href={route.path}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600"
                  >
                    Visit
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-16 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Route Summary
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const categoryRoutes = routes.filter(route => route.category === category);
              return (
                <div key={category} className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {categoryRoutes.length}
                  </div>
                  <div className="text-gray-600 font-medium">{category}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {categoryRoutes.length === 1 ? 'route' : 'routes'}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {routes.length}
            </div>
            <div className="text-gray-600 font-medium">Total Routes Available</div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link href="/">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
