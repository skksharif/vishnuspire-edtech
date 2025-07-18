import React, { useState, useEffect } from "react";
import {
  ChevronUp,
  Menu,
  X,
  BookOpen,
  Users,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Play,
  CheckCircle,
  Star,
  ArrowRight,
  MessageCircle,
  Code,
  Database,
  Cloud,
  Smartphone,
  Layers,
  Palette,
  FileSpreadsheet,
  BarChart,
  Coffee,
  Zap,
  Globe,
  Shield,
  Sparkles,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollY(scrollTop);
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = [
        "hero",
        "about",
        "courses",
        "approach",
        "why-choose",
        "testimonials",
        "cta",
        "faq",
      ];
      const sectionElements = sections.map((id) => document.getElementById(id));

      let currentSection = "hero";
      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = sections[index];
          }
        }
      });
      setActiveSection(currentSection);
    };

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const animateElements = document.querySelectorAll(".scroll-animate");
    animateElements.forEach((el) => observer.observe(el));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const courses = [
    {
      id: 1,
      title: "Data Analytics",
      icon: <BarChart className="w-6 h-6" />,
      tools: ["Excel", "SQL", "Python", "Power BI"],
      description:
        "Master real-world business analysis and decision-making skills with hands-on projects",
      gradient: "from-emerald-100 to-green-100",
      hoverGradient: "from-emerald-200 to-green-200",
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      icon: <Zap className="w-6 h-6" />,
      tools: ["Python", "Regression", "SVMs", "Neural Networks"],
      description:
        "Build AI models and solve complex problems ethically with cutting-edge techniques",
      gradient: "from-green-100 to-lime-100",
      hoverGradient: "from-green-200 to-lime-200",
    },
    {
      id: 3,
      title: "Cloud Computing",
      icon: <Cloud className="w-6 h-6" />,
      tools: ["AWS", "EC2", "S3", "Lambda"],
      description:
        "Master cloud platforms and DevOps practices for scalable applications",
      gradient: "from-lime-100 to-emerald-100",
      hoverGradient: "from-lime-200 to-emerald-200",
    },
    {
      id: 4,
      title: "Full Stack Development",
      icon: <Code className="w-6 h-6" />,
      tools: ["React", "Node.js", "MongoDB", "JavaScript"],
      description:
        "Build complete web applications from frontend to backend with modern frameworks",
      gradient: "from-emerald-100 to-teal-100",
      hoverGradient: "from-emerald-200 to-teal-200",
    },
    {
      id: 5,
      title: "Mobile App Development",
      icon: <Smartphone className="w-6 h-6" />,
      tools: ["React Native", "Flutter"],
      description:
        "Create cross-platform mobile applications with native performance",
      gradient: "from-teal-100 to-green-100",
      hoverGradient: "from-teal-200 to-green-200",
    },
    {
      id: 6,
      title: "Blockchain Technology",
      icon: <Shield className="w-6 h-6" />,
      tools: ["Ethereum", "Solidity", "Truffle", "Ganache"],
      description:
        "Develop smart contracts and decentralized applications for Web3",
      gradient: "from-green-100 to-emerald-100",
      hoverGradient: "from-green-200 to-emerald-200",
    },
    {
      id: 7,
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      tools: ["Figma", "Adobe XD"],
      description: "Design intuitive user experiences and beautiful interfaces",
      gradient: "from-emerald-100 to-lime-100",
      hoverGradient: "from-emerald-200 to-lime-200",
    },
    {
      id: 8,
      title: "Advanced Excel",
      icon: <FileSpreadsheet className="w-6 h-6" />,
      tools: ["Pivot Tables", "VBA", "Power Query"],
      description:
        "Master advanced Excel techniques for business analytics and automation",
      gradient: "from-lime-100 to-green-100",
      hoverGradient: "from-lime-200 to-green-200",
    },
    {
      id: 9,
      title: "Power BI",
      icon: <BarChart className="w-6 h-6" />,
      tools: ["DAX", "Power Query", "Dashboards"],
      description:
        "Create interactive business intelligence dashboards and reports",
      gradient: "from-green-100 to-teal-100",
      hoverGradient: "from-green-200 to-teal-200",
    },
    {
      id: 10,
      title: "Python Programming",
      icon: <Code className="w-6 h-6" />,
      tools: ["NumPy", "Pandas", "Data Structures"],
      description:
        "Build strong programming foundations with Python for various applications",
      gradient: "from-teal-100 to-emerald-100",
      hoverGradient: "from-teal-200 to-emerald-200",
    },
    {
      id: 11,
      title: "Java Programming",
      icon: <Coffee className="w-6 h-6" />,
      tools: ["OOP", "Multithreading", "DSA"],
      description: "Develop enterprise-ready backend applications with Java",
      gradient: "from-emerald-100 to-green-100",
      hoverGradient: "from-emerald-200 to-green-200",
    },
    {
      id: 12,
      title: "C Language",
      icon: <Database className="w-6 h-6" />,
      tools: ["Arrays", "Pointers", "File Handling"],
      description: "Master low-level system programming foundations with C",
      gradient: "from-green-100 to-lime-100",
      hoverGradient: "from-green-200 to-lime-200",
    },
  ];

  const navigationItems = [
    { id: "hero", label: "Home", icon: <Globe className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <Users className="w-4 h-4" /> },
    { id: "courses", label: "Courses", icon: <BookOpen className="w-4 h-4" /> },
    { id: "approach", label: "Approach", icon: <Target className="w-4 h-4" /> },
    { id: "why-choose", label: "Why Us", icon: <Award className="w-4 h-4" /> },
    {
      id: "testimonials",
      label: "Reviews",
      icon: <Star className="w-4 h-4" />,
    },
    { id: "cta", label: "Join Us", icon: <ArrowRight className="w-4 h-4" /> },
    { id: "faq", label: "FAQ", icon: <MessageCircle className="w-4 h-4" /> },
  ];

  const learningApproach = [
    {
      icon: "🧠",
      title: "Meme-Based Learning",
      description:
        "Complex concepts simplified through relatable memes and visual aids that stick in memory",
    },
    {
      icon: "🎯",
      title: "Interactive Sessions",
      description:
        "Engaging live sessions with real-time problem solving and collaborative learning",
    },
    {
      icon: "🚀",
      title: "Real-World Projects",
      description:
        "Build portfolio-worthy projects with industry mentorship and practical applications",
    },
    {
      icon: "🏆",
      title: "Hackathons",
      description:
        "Compete, collaborate, and showcase your skills in exciting coding challenges",
    },
    {
      icon: "💡",
      title: "Gamified Learning",
      description:
        "Earn points, badges, and rewards as you progress through your learning journey",
    },
    {
      icon: "🎨",
      title: "Creative Challenges",
      description:
        "Think outside the box with innovative problem-solving and creative projects",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "Data Analytics",
      rating: 5,
      comment:
        "The meme-based learning approach made complex SQL queries so much easier to understand. I never thought learning could be this fun and effective!",
      avatar: "👩‍💻",
      company: "Tech Solutions Inc.",
    },
    {
      name: "Rohit Kumar",
      course: "Full Stack Development",
      rating: 5,
      comment:
        "From zero to building my first web app in just 3 months. The project-based approach and mentorship were absolute game-changers for my career.",
      avatar: "👨‍💻",
      company: "StartupXYZ",
    },
    {
      name: "Anjali Patel",
      course: "AI & Machine Learning",
      rating: 5,
      comment:
        "The hands-on projects and hackathons gave me real industry experience. Landed my dream job at a top tech company within weeks of completion!",
      avatar: "👩‍🔬",
      company: "AI Innovations Ltd.",
    },
  ];

  const faqs = [
    {
      question: "Are the courses beginner-friendly?",
      answer:
        "Absolutely! All our courses start from fundamentals and gradually progress to real-world applications. No prior experience required - we'll guide you every step of the way.",
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes, you'll receive an AICTE-approved certificate upon successful completion of the course and projects. This certification is recognized by industry leaders.",
    },
    {
      question: "Is job assistance provided?",
      answer:
        "Definitely! We provide comprehensive placement support including resume review, mock interviews, job alerts, and direct connections with our hiring partners.",
    },
    {
      question: "How are memes and activities used in learning?",
      answer:
        "We use topic-specific memes, interactive quizzes, and fun challenges to make complex concepts memorable and engaging. Learning becomes enjoyable and effective.",
    },
    {
      question: "Can I access content after completion?",
      answer:
        "Yes, you get lifetime access to all course materials, updates, and our exclusive alumni community for continued learning and networking.",
    },
    {
      question: "Do you offer online and offline modes?",
      answer:
        "Yes, we offer hybrid learning with recorded sessions, live classes, and in-person bootcamps for a comprehensive and flexible learning experience.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-green-50 z-50">
        <div
          className="h-full bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 transition-all duration-300 shadow-sm"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Floating Radial Navigation */}
      <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/80 backdrop-blur-md rounded-full py-3 px-2 shadow-xl border border-green-100/50">
          {navigationItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-10 h-10 rounded-full mb-1 transition-all duration-500 flex items-center justify-center group relative transform hover:scale-110 ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg scale-110"
                  : "hover:bg-green-50 text-green-600"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {item.icon}
              <span className="absolute right-12 bg-gray-800/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap transform translate-x-2 group-hover:translate-x-0">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 z-50 lg:hidden bg-gradient-to-r from-green-400 to-emerald-500 text-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
      >
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden">
          <div className="fixed right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-500">
            <div className="p-6 pt-20">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-green-500" />
                Navigation
              </h3>
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center w-full text-left p-3 rounded-xl hover:bg-green-50 transition-all duration-300 mb-2 transform hover:translate-x-2"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <span className="mr-3 text-green-600">{item.icon}</span>
                  <span className="text-gray-700 font-medium">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-emerald-50/20 to-lime-50/30 backdrop-blur-sm" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-emerald-100/20 backdrop-blur-xs"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />

        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-xl"
            style={{
              transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.03}px)`,
            }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-lime-200/20 to-green-200/20 rounded-full blur-xl"
            style={{
              transform: `translate(${-scrollY * 0.03}px, ${
                -scrollY * 0.05
              }px)`,
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-emerald-100/15 to-green-100/15 rounded-full blur-lg"
            style={{
              transform: `translate(-50%, -50%) rotate(${scrollY * 0.02}deg)`,
            }}
          />
        </div>

        <div className="container mx-auto px-2 sm:px-6 text-center relative z-10 max-w-6xl">
          <div className="space-y-2 scroll-animate opacity-0 translate-y-5 transition-all duration-1200 ease-out">
            {/* Company Introduction */}
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/70 backdrop-blur-md px-4 py-2 rounded-full text-green-700 font-semibold shadow-lg border border-green-200/50">
                <Award className="w-4 h-4 mr-2" />
                AICTE Approved EdTech Platform
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-green-600">
                Welcome to
              </h3>
              <div className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-600 to-lime-500 leading-tight">
                VISHNUSPIRE LLP
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Learning That Feels Like{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 relative">
                Play
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your future with meme-based learning, real-world
              projects, and industry-ready skills. Join thousands of students
              who chose fun over boring education.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-green-500 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-all duration-300 flex items-center backdrop-blur-sm">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm text-gray-600 pt-8">
              <div className="flex items-center bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-green-100/50">
                <Award className="w-4 h-4 text-green-500 mr-2" />
                AICTE Approved
              </div>
              <div className="flex items-center bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-green-100/50">
                <Users className="w-4 h-4 text-green-500 mr-2" />
                10,000+ Students
              </div>
              <div className="flex items-center bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-green-100/50">
                <Star className="w-4 h-4 text-green-500 mr-2" />
                4.9/5 Rating
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center backdrop-blur-md bg-white/30">
            <div className="w-1 h-3 bg-green-500 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 relative">
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/25 via-green-50/30 to-lime-50/25 backdrop-blur-sm" />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-green-100/15 to-emerald-100/15 backdrop-blur-xs"
          style={{
            transform: `translateX(${scrollY * 0.02}px)`,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-12 transition-all duration-1200 ease-out">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Vishnuspire LLP
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We are Vishnuspire LLP — a future-ready EdTech platform
              transforming how students learn and grow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-6 scroll-animate opacity-0 translate-x-12 transition-all duration-1200 ease-out delay-300">
              <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-200/30 hover:shadow-xl transition-all duration-500 ease-out">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-green-600" />
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  "Learning should feel like a journey you enjoy." We aim to
                  build a space where students engage, laugh, build, and grow,
                  turning passive learners into confident, curious creators.
                </p>
              </div>
              <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-200/30 hover:shadow-xl transition-all duration-500 ease-out">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-emerald-600" />
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To redefine education through interactive, industry-driven,
                  exciting methods. Blending memes, real-world projects, and
                  mentorship to prepare future-ready professionals.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 scroll-animate opacity-0 translate-x-12 transition-all duration-1200 ease-out delay-500">
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-green-100/30 to-emerald-100/30 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
                  12
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Advanced Courses
                </div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-emerald-100/30 to-lime-100/30 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-2">
                  10K+
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Happy Students
                </div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-lime-100/30 to-green-100/30 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-lime-600 mb-2">
                  95%
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Placement Rate
                </div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-green-100/30 to-emerald-100/30 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 sm:py-20 relative">
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/25 via-emerald-50/30 to-lime-100/25 backdrop-blur-sm" />
        <div
          className="absolute inset-0 bg-gradient-to-tl from-emerald-100/15 to-green-100/15 backdrop-blur-xs"
          style={{
            transform: `translateY(${scrollY * 0.01}px)`,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-12 transition-all duration-1200 ease-out">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Vishnuspire
              </span>{" "}
              Courses
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              12 industry-aligned courses designed to make you job-ready with
              hands-on projects and real-world applications.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-center">
            {courses.map((course, index) => (
              <div key={course.id} className="flex justify-center">
                <div
                  className="flex-shrink-0 w-72 sm:w-80 lg:w-auto bg-white/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-3 border border-green-200/30 group scroll-animate opacity-0 translate-y-12"
                  style={{
                    transitionDelay: `${index * 0.15}s`,
                    transitionDuration: "1200ms",
                  }}
                >
                  <div className="text-green-600 mb-4 group-hover:scale-110 transition-transform duration-500 ease-out bg-white/50 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                    {course.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors duration-500 ease-out">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {course.tools.slice(0, 3).map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-xs bg-white/60 backdrop-blur-sm px-2 py-1 rounded-lg text-green-700 font-medium shadow-sm"
                      >
                        {tool}
                      </span>
                    ))}
                    {course.tools.length > 3 && (
                      <span className="text-xs bg-white/60 backdrop-blur-sm px-2 py-1 rounded-lg text-green-700 font-medium shadow-sm">
                        +{course.tools.length - 3} more
                      </span>
                    )}
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 sm:py-3 rounded-xl hover:shadow-lg transition-all duration-500 ease-out text-sm font-semibold transform group-hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Learning Approach */}
      <section id="approach" className="py-16 sm:py-20 relative">
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50/25 via-green-50/20 to-emerald-50/25 backdrop-blur-sm" />
        <div
          className="absolute inset-0 bg-gradient-to-bl from-green-100/10 to-lime-100/10 backdrop-blur-xs"
          style={{
            transform: `translateX(${-scrollY * 0.02}px)`,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-12 transition-all duration-1200 ease-out">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Vishnuspire
              </span>{" "}
              Approach
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Learning = Fun + Focused + Futuristic
            </p>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4 sm:space-x-6 min-w-max lg:grid lg:grid-cols-3 lg:gap-6 lg:min-w-0">
              {learningApproach.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 sm:w-80 lg:w-auto bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-green-200/50 group scroll-animate opacity-0 translate-y-8"
                  style={{
                    transitionDelay: `${index * 0.2}s`,
                    transitionDuration: "1000ms",
                  }}
                >
                  <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" className="py-16 sm:py-20 relative">
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/25 via-green-50/30 to-lime-100/25 backdrop-blur-sm" />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-lime-100/15 to-emerald-100/15 backdrop-blur-xs"
          style={{
            transform: `translateY(${scrollY * 0.015}px)`,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-12 transition-all duration-1200 ease-out">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Why Thousands Trust{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Vishnuspire
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              "AICTE-approved and industry-aligned programs",
              "Learning via Memes + Activities + Mentoring",
              "Projects + Hackathons in every course",
              "Expert-led training with modern tools",
              "12 future-focused courses",
              "Placement support, certifications, soft skills training",
              "Emphasis on practical, hands-on experience",
              "24/7 learner assistance",
              "Hybrid (online/offline) learning",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 sm:p-6 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-1 border border-green-200/30 group scroll-animate opacity-0 translate-y-12"
                style={{
                  transitionDelay: `${index * 0.12}s`,
                  transitionDuration: "1200ms",
                }}
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-500 ease-out" />
                <span className="text-gray-700 text-sm sm:text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-500 ease-out">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 sm:py-20 relative">
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/25 via-emerald-50/30 to-lime-50/25 backdrop-blur-sm" />
        <div
          className="absolute inset-0 bg-gradient-to-bl from-emerald-100/15 to-green-100/15 backdrop-blur-xs"
          style={{
            transform: `translateX(${scrollY * 0.01}px)`,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-12 transition-all duration-1200 ease-out">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              What Our Students Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from students who transformed their careers with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-2 border border-green-200/30 group scroll-animate opacity-0 translate-y-12"
                style={{
                  transitionDelay: `${index * 0.25}s`,
                  transitionDuration: "1200ms",
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl sm:text-3xl mr-4 bg-green-100/60 backdrop-blur-sm p-3 rounded-full group-hover:scale-110 transition-transform duration-500 ease-out">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-green-600 font-medium">
                      {testimonial.course}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="py-16 sm:py-20 relative overflow-hidden">
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/80 to-emerald-600/80 backdrop-blur-sm" />
        <div
          className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20 backdrop-blur-xs"
          style={{
            transform: `translateY(${scrollY * 0.02}px)`,
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"
            style={{
              transform: `translate(${scrollY * 0.01}px, ${scrollY * 0.008}px)`,
            }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-xl"
            style={{
              transform: `translate(${-scrollY * 0.008}px, ${
                -scrollY * 0.01
              }px)`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 scroll-animate opacity-0 translate-y-12 transition-all duration-1200 ease-out">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
            Ready to Start Your{" "}
            <span className="text-lime-200">Vishnuspire</span> Journey?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-green-50 leading-relaxed">
            Join thousands of students who chose Vishnuspire to learn
            differently. Start your transformation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-green-50 transition-all duration-500 ease-out transform hover:scale-105 shadow-lg flex items-center justify-center">
              Enroll Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-500 ease-out" />
            </button>
            <button className="group border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-500 ease-out backdrop-blur-sm flex items-center justify-center">
              <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-500 ease-out" />
              View All Courses
            </button>
            <button className="group border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-500 ease-out backdrop-blur-sm flex items-center justify-center">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-500 ease-out" />
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-20 relative">
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50/25 via-green-50/30 to-emerald-50/25 backdrop-blur-sm" />
        <div
          className="absolute inset-0 bg-gradient-to-tl from-green-100/15 to-lime-100/15 backdrop-blur-xs"
          style={{
            transform: `translateX(${scrollY * 0.005}px)`,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-12 transition-all duration-1200 ease-out">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions? We've got answers!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 scroll-animate opacity-0 translate-y-12 transition-all duration-1200 ease-out"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-4 sm:p-6 bg-white/40 backdrop-blur-sm rounded-2xl hover:shadow-lg transition-all duration-500 ease-out flex justify-between items-center border border-green-200/30 group"
                >
                  <span className="font-semibold text-gray-800 text-sm sm:text-base pr-4 group-hover:text-green-700 transition-colors duration-500 ease-out">
                    {faq.question}
                  </span>
                  <ChevronUp
                    className={`w-5 h-5 text-green-600 transition-transform duration-500 ease-out flex-shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="mt-2 p-4 sm:p-6 bg-green-100/40 backdrop-blur-sm border border-green-200/30 rounded-2xl animate-fade-in">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-green-800/95 to-emerald-900/95 backdrop-blur-sm text-white py-12 sm:py-16 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-40 h-40 bg-green-400/10 rounded-full blur-xl"
            style={{
              transform: `translate(${scrollY * 0.005}px, ${
                scrollY * 0.003
              }px)`,
            }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-60 h-60 bg-emerald-400/10 rounded-full blur-xl"
            style={{
              transform: `translate(${-scrollY * 0.003}px, ${
                -scrollY * 0.005
              }px)`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 scroll-animate opacity-0 translate-y-12 transition-all duration-1200 ease-out">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center">
                <Sparkles className="w-6 h-6 mr-2 text-green-400" />
                Vishnuspire LLP
              </h3>
              <p className="text-green-200 mb-4 text-sm sm:text-base leading-relaxed">
                Transforming education through meme-based learning and
                real-world projects.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6 hover:text-green-300 cursor-pointer transition-colors transform hover:scale-110" />
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6 hover:text-green-300 cursor-pointer transition-colors transform hover:scale-110" />
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 hover:text-green-300 cursor-pointer transition-colors transform hover:scale-110" />
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 hover:text-green-300 cursor-pointer transition-colors transform hover:scale-110" />
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Admissions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Placements
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">
                Support
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">
                Contact Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-300 flex-shrink-0" />
                  <span className="text-green-200 text-sm sm:text-base">
                    +91 12345 67890
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-300 flex-shrink-0" />
                  <span className="text-green-200 text-sm sm:text-base">
                    info@vishnuspire.com
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-300 flex-shrink-0" />
                  <span className="text-green-200 text-sm sm:text-base">
                    Bangalore, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-green-700/50 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-green-200 text-sm sm:text-base">
              © 2024 Vishnuspire LLP. All rights reserved. | AICTE Approved
              Institution
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
