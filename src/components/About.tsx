import React from 'react';
import { MapPin, Mail, Briefcase, GraduationCap } from 'lucide-react';
import Profilepic from '../assets/profile-pic.png';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-100 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 gradient-text text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src = {Profilepic}
              alt="Profile"
              className="relative rounded-lg shadow-2xl w-full transform group-hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a second-year Bachelor of Engineering student at Fr. Conceicao Rodrigues College 
              of Engineering, passionate about technology and innovation. 
              I like to collaborate with teams to drive innovative tech projects and solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              My journey in technology spans across web development, IoT, and AI/ML, constantly learning 
              and building projects that solve real-world problems. I thrive in collaborative environments 
              and am always eager to take on new challenges.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-gray-200">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Mumbai, Maharashtra</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-gray-200">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">B.E. in  Electronics & CS </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-gray-200">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">ecs.crce.10127@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-gray-200">Role</h3>
                  <p className="text-gray-600 dark:text-gray-400">Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}