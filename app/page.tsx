"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dumbbell,
  Users,
  Clock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Flame,
  Zap,
  Heart,
  Target,
  Trophy,
  Calendar,
  Star,
  Check,
  Menu,
  X,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  MapPin,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      initials: "MR",
      name: "Member",
      role: "Training for 2 years",
      text: "Iron Peak completely transformed my approach to fitness. The trainers push you to your limits while keeping you safe. Best decision I ever made.",
      color: "bg-[#FF6B2C]",
    },
    {
      initials: "JT",
      name: "Member",
      role: "Training for 8 months",
      text: "The HIIT classes are intense but addictive. I've lost weight and gained so much strength. The community here is incredibly supportive.",
      color: "bg-emerald-600",
    },
    {
      initials: "SK",
      name: "Member",
      role: "Training for 3 years",
      text: "As a competitive athlete, I needed a gym that could keep up with my demands. Iron Peak delivers world-class equipment and expertise.",
      color: "bg-blue-600",
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      {/* 1. STICKY NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-8 h-8 text-[#FF6B2C]" />
              <span className="font-[family-name:var(--font-bebas)] text-2xl lg:text-3xl tracking-wide">
                IRON PEAK
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#classes" className="text-[#737373] hover:text-white transition-colors">
                Classes
              </a>
              <a href="#trainers" className="text-[#737373] hover:text-white transition-colors">
                Trainers
              </a>
              <a href="#pricing" className="text-[#737373] hover:text-white transition-colors">
                Membership
              </a>
              <a href="#contact" className="text-[#737373] hover:text-white transition-colors">
                Contact
              </a>
              <Button className="bg-[#FF6B2C] hover:bg-[#E55A1F] text-white font-semibold">
                Join Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1A1A1A] border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              <a href="#classes" className="block text-[#737373] hover:text-white transition-colors">
                Classes
              </a>
              <a href="#trainers" className="block text-[#737373] hover:text-white transition-colors">
                Trainers
              </a>
              <a href="#pricing" className="block text-[#737373] hover:text-white transition-colors">
                Membership
              </a>
              <a href="#contact" className="block text-[#737373] hover:text-white transition-colors">
                Contact
              </a>
              <Button className="w-full bg-[#FF6B2C] hover:bg-[#E55A1F] text-white font-semibold">
                Join Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION - Full Viewport */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Iron Peak Gym - Premium fitness facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="w-fit mb-6 bg-[#FF6B2C]/20 text-[#FF6B2C] border-[#FF6B2C]/30 hover:bg-[#FF6B2C]/20">
            <Flame className="w-3 h-3 mr-1" />
            FORGE YOUR STRENGTH
          </Badge>

          <h1 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-7xl lg:text-9xl leading-none tracking-tight mb-6">
            PUSH BEYOND
            <br />
            <span className="text-[#FF6B2C]">YOUR LIMITS</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#737373] max-w-xl mb-8">
            State-of-the-art equipment, expert trainers, and a community that pushes you to achieve
            what you never thought possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#FF6B2C] hover:bg-[#E55A1F] text-white font-semibold text-lg px-8"
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8"
            >
              View Classes
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#FF6B2C]" />
        </div>

        {/* Diagonal Lines Decoration */}
        <div className="absolute bottom-0 right-0 w-1/3 h-32 overflow-hidden opacity-20">
          <div className="absolute inset-0 flex gap-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-64 bg-[#FF6B2C] -rotate-45 transform origin-bottom-left"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. STATS BANNER */}
      <section className="bg-[#FF6B2C] py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-[family-name:var(--font-bebas)] text-4xl lg:text-6xl text-white">
                5000+
              </div>
              <div className="text-white/80 text-sm lg:text-base mt-1">Active Members</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-bebas)] text-4xl lg:text-6xl text-white">
                50+
              </div>
              <div className="text-white/80 text-sm lg:text-base mt-1">Weekly Classes</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-bebas)] text-4xl lg:text-6xl text-white">
                15+
              </div>
              <div className="text-white/80 text-sm lg:text-base mt-1">Expert Trainers</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-bebas)] text-4xl lg:text-6xl text-white">
                10K+
              </div>
              <div className="text-white/80 text-sm lg:text-base mt-1">Goals Achieved</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES/CLASSES SECTION */}
      <section id="classes" className="py-20 lg:py-32 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Badge className="mb-4 bg-[#FF6B2C]/20 text-[#FF6B2C] border-[#FF6B2C]/30 hover:bg-[#FF6B2C]/20">
                <Zap className="w-3 h-3 mr-1" />
                OUR CLASSES
              </Badge>
              <h2 className="font-[family-name:var(--font-bebas)] text-4xl lg:text-6xl mb-6">
                TRAIN WITH
                <br />
                <span className="text-[#FF6B2C]">PURPOSE</span>
              </h2>
              <p className="text-[#737373] text-lg mb-8">
                From high-intensity interval training to mindful yoga sessions, our diverse class
                schedule ensures there&apos;s something for every fitness level and goal.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Flame,
                    name: "HIIT & Conditioning",
                    desc: "High-intensity workouts that torch calories",
                  },
                  {
                    icon: Dumbbell,
                    name: "Strength Training",
                    desc: "Build muscle and increase power",
                  },
                  {
                    icon: Heart,
                    name: "Cardio Boxing",
                    desc: "Punch your way to peak fitness",
                  },
                  {
                    icon: Target,
                    name: "Functional Fitness",
                    desc: "Train movements, not just muscles",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-[#1A1A1A] rounded-lg border border-white/5 hover:border-[#FF6B2C]/30 transition-colors"
                  >
                    <div className="p-2 bg-[#FF6B2C]/20 rounded-lg">
                      <item.icon className="w-5 h-5 text-[#FF6B2C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.name}</h3>
                      <p className="text-[#737373] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#FF6B2C]/20 to-transparent rounded-2xl" />
              <Image
                src="/images/feature.png"
                alt="Iron Peak Gym training classes"
                width={600}
                height={700}
                className="relative rounded-xl object-cover w-full"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0D0D0D]/90 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#FF6B2C]" />
                  <div>
                    <p className="text-white font-semibold">Classes Daily</p>
                    <p className="text-[#737373] text-sm">Morning, Afternoon & Evening Sessions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRAINERS SECTION */}
      <section id="trainers" className="py-20 lg:py-32 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#FF6B2C]/20 text-[#FF6B2C] border-[#FF6B2C]/30 hover:bg-[#FF6B2C]/20">
              <Users className="w-3 h-3 mr-1" />
              MEET THE TEAM
            </Badge>
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl lg:text-6xl mb-4">
              EXPERT <span className="text-[#FF6B2C]">TRAINERS</span>
            </h2>
            <p className="text-[#737373] text-lg max-w-2xl mx-auto">
              Our certified trainers bring years of experience and passion to help you achieve your
              fitness goals safely and effectively.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                initials: "HC",
                role: "Head Coach",
                specialty: "Strength & Conditioning",
                color: "bg-[#FF6B2C]",
              },
              {
                initials: "YI",
                role: "Yoga Instructor",
                specialty: "Flexibility & Mindfulness",
                color: "bg-emerald-600",
              },
              {
                initials: "BT",
                role: "Boxing Trainer",
                specialty: "Combat Fitness",
                color: "bg-blue-600",
              },
              {
                initials: "NC",
                role: "Nutrition Coach",
                specialty: "Diet & Performance",
                color: "bg-purple-600",
              },
            ].map((trainer, index) => (
              <Card
                key={index}
                className="bg-[#0D0D0D] border-white/5 hover:border-[#FF6B2C]/30 transition-all group"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-24 h-24 ${trainer.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform`}
                  >
                    <span className="font-[family-name:var(--font-bebas)] text-3xl text-white">
                      {trainer.initials}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white text-lg">{trainer.role}</h3>
                  <p className="text-[#737373] text-sm mt-1">{trainer.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRICING SECTION */}
      <section id="pricing" className="py-20 lg:py-32 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#FF6B2C]/20 text-[#FF6B2C] border-[#FF6B2C]/30 hover:bg-[#FF6B2C]/20">
              <Trophy className="w-3 h-3 mr-1" />
              MEMBERSHIP
            </Badge>
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl lg:text-6xl mb-4">
              CHOOSE YOUR <span className="text-[#FF6B2C]">PLAN</span>
            </h2>
            <p className="text-[#737373] text-lg max-w-2xl mx-auto">
              Flexible membership options designed to fit your lifestyle and fitness goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Basic Plan */}
            <Card className="bg-[#1A1A1A] border-white/5 hover:border-white/10 transition-all">
              <CardHeader className="pb-4">
                <CardTitle className="text-white">
                  <span className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide">
                    STARTER
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-[#737373] text-sm">Starting from</p>
                  <p className="text-[#737373] mt-1">Contact for pricing</p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Full gym access",
                    "Locker room access",
                    "Basic equipment training",
                    "Fitness assessment",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#737373]">
                      <Check className="w-4 h-4 text-[#FF6B2C]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan - Featured */}
            <Card className="bg-[#1A1A1A] border-[#FF6B2C] relative overflow-hidden lg:scale-105">
              <div className="absolute top-0 right-0 bg-[#FF6B2C] text-white text-xs font-bold px-3 py-1">
                POPULAR
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-white">
                  <span className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide">
                    PEAK PERFORMER
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-[#737373] text-sm">Starting from</p>
                  <p className="text-[#737373] mt-1">Contact for pricing</p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Everything in Starter",
                    "Unlimited group classes",
                    "Personal training sessions",
                    "Nutrition guidance",
                    "Priority booking",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                      <Check className="w-4 h-4 text-[#FF6B2C]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#FF6B2C] hover:bg-[#E55A1F] text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Elite Plan */}
            <Card className="bg-[#1A1A1A] border-white/5 hover:border-white/10 transition-all">
              <CardHeader className="pb-4">
                <CardTitle className="text-white">
                  <span className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide">
                    ELITE
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-[#737373] text-sm">Starting from</p>
                  <p className="text-[#737373] mt-1">Contact for pricing</p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Everything in Peak Performer",
                    "Unlimited personal training",
                    "Recovery & spa access",
                    "Guest passes included",
                    "Exclusive member events",
                    "24/7 facility access",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#737373]">
                      <Check className="w-4 h-4 text-[#FF6B2C]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. GALLERY SECTION */}
      <section className="py-20 lg:py-32 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl lg:text-6xl mb-4">
              THE IRON PEAK <span className="text-[#FF6B2C]">EXPERIENCE</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                gradient: "from-[#FF6B2C] to-[#E55A1F]",
                icon: Dumbbell,
                label: "Free Weights",
              },
              {
                gradient: "from-[#0D0D0D] to-[#1A1A1A]",
                icon: Zap,
                label: "Cardio Zone",
              },
              {
                gradient: "from-blue-900 to-blue-700",
                icon: Users,
                label: "Group Classes",
              },
              {
                gradient: "from-[#1A1A1A] to-[#2A2A2A]",
                icon: Heart,
                label: "Recovery Area",
              },
              {
                gradient: "from-purple-900 to-purple-700",
                icon: Target,
                label: "Functional Zone",
              },
              {
                gradient: "from-[#FF6B2C]/80 to-[#FF6B2C]",
                icon: Flame,
                label: "HIIT Studio",
              },
              {
                gradient: "from-emerald-900 to-emerald-700",
                icon: Clock,
                label: "Open Daily",
              },
              {
                gradient: "from-[#2A2A2A] to-[#0D0D0D]",
                icon: Trophy,
                label: "Results",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`aspect-square bg-gradient-to-br ${item.gradient} rounded-xl flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform cursor-pointer border border-white/5`}
              >
                <item.icon className="w-8 h-8 lg:w-12 lg:h-12 text-white mb-2" />
                <span className="font-[family-name:var(--font-bebas)] text-lg lg:text-xl text-white text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS CAROUSEL */}
      <section className="py-20 lg:py-32 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#FF6B2C]/20 text-[#FF6B2C] border-[#FF6B2C]/30 hover:bg-[#FF6B2C]/20">
              <Star className="w-3 h-3 mr-1" />
              TESTIMONIALS
            </Badge>
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl lg:text-6xl">
              MEMBER <span className="text-[#FF6B2C]">STORIES</span>
            </h2>
          </div>

          <div className="relative">
            <Card className="bg-[#1A1A1A] border-white/5 p-8 lg:p-12">
              <CardContent className="p-0 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FF6B2C] fill-current" />
                  ))}
                </div>
                <p className="text-xl lg:text-2xl text-white mb-8 leading-relaxed">
                  &quot;{testimonials[activeTestimonial].text}&quot;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div
                    className={`w-14 h-14 ${testimonials[activeTestimonial].color} rounded-full flex items-center justify-center`}
                  >
                    <span className="font-[family-name:var(--font-bebas)] text-xl text-white">
                      {testimonials[activeTestimonial].initials}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-[#737373] text-sm">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-[#1A1A1A] rounded-full border border-white/10 hover:border-[#FF6B2C] transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeTestimonial ? "w-6 bg-[#FF6B2C]" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-[#1A1A1A] rounded-full border border-white/10 hover:border-[#FF6B2C] transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONTACT FORM */}
      <section id="contact" className="py-20 lg:py-32 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <Badge className="mb-4 bg-[#FF6B2C]/20 text-[#FF6B2C] border-[#FF6B2C]/30 hover:bg-[#FF6B2C]/20">
                <Mail className="w-3 h-3 mr-1" />
                GET IN TOUCH
              </Badge>
              <h2 className="font-[family-name:var(--font-bebas)] text-4xl lg:text-6xl mb-6">
                READY TO <span className="text-[#FF6B2C]">START?</span>
              </h2>
              <p className="text-[#737373] text-lg mb-8">
                Have questions about our memberships, classes, or facilities? Fill out the form and
                our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF6B2C]/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#FF6B2C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Visit Us</h3>
                    <p className="text-[#737373]">Contact us for gym location</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF6B2C]/20 rounded-lg">
                    <Clock className="w-5 h-5 text-[#FF6B2C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Open Hours</h3>
                    <p className="text-[#737373]">Contact us for schedule</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-[#0D0D0D] border-white/5">
              <CardContent className="p-6 lg:p-8">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-[#737373] mb-2">First Name</label>
                      <Input
                        className="bg-[#1A1A1A] border-white/10 text-white placeholder:text-[#737373] focus:border-[#FF6B2C]"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#737373] mb-2">Last Name</label>
                      <Input
                        className="bg-[#1A1A1A] border-white/10 text-white placeholder:text-[#737373] focus:border-[#FF6B2C]"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-[#737373] mb-2">Email</label>
                    <Input
                      type="email"
                      className="bg-[#1A1A1A] border-white/10 text-white placeholder:text-[#737373] focus:border-[#FF6B2C]"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#737373] mb-2">Inquiry Type</label>
                    <select className="w-full bg-[#1A1A1A] border border-white/10 text-white rounded-md px-3 py-2 focus:border-[#FF6B2C] focus:outline-none">
                      <option value="">Select an option</option>
                      <option value="membership">Membership Information</option>
                      <option value="classes">Class Schedule</option>
                      <option value="personal-training">Personal Training</option>
                      <option value="corporate">Corporate Memberships</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-[#737373] mb-2">Message</label>
                    <Textarea
                      className="bg-[#1A1A1A] border-white/10 text-white placeholder:text-[#737373] focus:border-[#FF6B2C] min-h-[120px]"
                      placeholder="Tell us about your fitness goals..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#FF6B2C] hover:bg-[#E55A1F] text-white font-semibold py-6"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-[#0D0D0D] border-t border-white/10 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="w-8 h-8 text-[#FF6B2C]" />
                <span className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide">
                  IRON PEAK
                </span>
              </div>
              <p className="text-[#737373] mb-6">
                Forge your strength. Transform your life. Join the Iron Peak community today.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 bg-[#1A1A1A] rounded-full hover:bg-[#FF6B2C] transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-[#1A1A1A] rounded-full hover:bg-[#FF6B2C] transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-[#1A1A1A] rounded-full hover:bg-[#FF6B2C] transition-colors"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-bebas)] text-lg tracking-wide mb-4">
                QUICK LINKS
              </h3>
              <ul className="space-y-2">
                {["Classes", "Membership", "Trainers", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#737373] hover:text-[#FF6B2C] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-bebas)] text-lg tracking-wide mb-4">
                CLASSES
              </h3>
              <ul className="space-y-2">
                {["HIIT Training", "Strength", "Yoga", "Boxing", "Cardio"].map((cls) => (
                  <li key={cls}>
                    <a href="#" className="text-[#737373] hover:text-[#FF6B2C] transition-colors">
                      {cls}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-bebas)] text-lg tracking-wide mb-4">
                NEWSLETTER
              </h3>
              <p className="text-[#737373] mb-4">Get fitness tips and exclusive offers.</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-[#1A1A1A] border-white/10 text-white placeholder:text-[#737373]"
                />
                <Button className="bg-[#FF6B2C] hover:bg-[#E55A1F] text-white px-4">
                  Join
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#737373] text-sm">
              © {new Date().getFullYear()} Iron Peak Gym. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#737373] hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#737373] hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
