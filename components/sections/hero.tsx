"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion"
// import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ParticleField } from "@/components/particle-field"
import { ArrowRight, Play } from "lucide-react"
import { count } from "console"

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref=useRef(null)
  const isInView=useInView(ref,{once:true})

  useEffect(() => {
    if(isInView){
      const timeout=setTimeout(()=>{
        let start=0
        const end=target
        const speed = target < 10 ? 150 : 30
        const duration=1000
        // const incrementTime=duration/end

        const timer=setInterval(()=>{
          start+=1
          setCount(start)
          if(start>=end)clearInterval(timer)
          },speed)
        return()=>clearInterval(timer)
        },100);
        return()=>clearTimeout(timeout)
      }
    },[isInView,target])
    return<span ref={ref}>{count}{suffix}</span>
  }
    

export function HeroSection() {

  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const START_DATE = new Date("2026-03-11"); // The date your "50" count starts from
    const INITIAL_PROJECTS = 50;
    const INCREMENT_PER_WEEK = 1; // Increase by 1 every 7 days

    const today = new Date();
    const diffInMs = today.getTime() - START_DATE.getTime();
    const diffInWeeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
    
    setProjectCount(INITIAL_PROJECTS + (diffInWeeks * INCREMENT_PER_WEEK));
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Video Overlay Placeholder */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder-video-poster.jpg"
        >
          <source src="/digital-marketing-hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Particle Effect */}
      <ParticleField />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Creative Digital Agency</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance"
          >
            <span className="text-foreground">Fueling </span>
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Brands 
            </span>
            <span className="text-foreground">with</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Digital Wings</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            Transform your brand with cutting-edge digital solutions. From advertising to 
            videography, PR to social media-We bring your vision to life across India.
          </motion.p>


          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground group px-8"
            >
              View Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-border text-foreground hover:bg-muted/50 group px-8"
            >
              <Play className="mr-2 w-4 h-4" />
              Contact Us
            </Button>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-8 pt-12 max-w-lg mx-auto"
          >
            {[
              { value: "3+", label: "Cities" },
              { value: `${projectCount}+`, label: "Projects" },
              { value: "100%", label: "Dedication" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div> */}
        </motion.div>
        <div className="grid grid-cols-3 gap-8 pt-12 max-w-lg mx-auto">
          {/* Cities */}
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              <Counter target={3} suffix="+" />
            </div>
            <div className="text-sm text-muted-foreground">Cities</div>
          </div>

          {/* Projects (Your Dynamic Logic) */}
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {/* Only render once projectCount is ready */}
              {projectCount > 0 && (
                <Counter target={projectCount} suffix="+" />
              )}
            </div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>

          {/* Dedication */}
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              <Counter target={100} suffix="%" />
            </div>
            <div className="text-sm text-muted-foreground">Dedication</div>
          </div>
        </div>
      </div>

    </section>
  )
}
