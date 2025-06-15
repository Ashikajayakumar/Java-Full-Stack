💬 Question No-1 :
Create a resume object in JavaScript that includes personal details, education, experience, skills, and hobbies. Add a function inside the object to display this information using console.log(). Then call that function.

✅ script:

const resume = {
  personalInfo: {
    name: "Ashika",
    email: "Ashika.@example.com",
    phone: "123-456-7890",
    address: {
      street: "123 Main St",
      city: "Perambalur",
      state: "Tamil Nadu",
      zip: "621109"
    },
    linkedIn: "linkedin.com/in/ashika",
    github: "github.com/ashika-dev"
  },

  education: {
    school: {
      name: "Anna University",
      degree: "B.Tech in Computer Science",
      year: 2023
    },
    additionalCertifications: {
      course1: {
        title: "Web Development",
        platform: "Coursera",
        year: 2022
      },
      course2: {
        title: "AWS Cloud Practitioner",
        platform: "Udemy",
        year: 2023
      },
      course3: {
        title: "Data Structures in Java",
        platform: "Coding Ninjas",
        year: 2022
      }
    }
  },

  experience: {
    job1: {
      company: "Zoho Tech",
      role: "Frontend Developer",
      duration: "Jan 2023 - Present",
      details: {
        project: "E-commerce Website",
        techStack: ["HTML", "CSS", "JavaScript", "React"]
      }
    },
    internship: {
      company: "Macberries Pvt Ltd",
      role: "Web Developer Intern",
      duration: "Jun 2022 - Dec 2022",
      details: {
        project: "Portfolio Builder App",
        techStack: ["Bootstrap", "JavaScript", "Firebase"]
      }
    }
  },

  projects: {
    project1: {
      title: "AI Chatbot",
      description: "A simple chatbot using Python and NLTK to handle FAQs for college admissions.",
      techStack: ["Python", "NLTK"]
    },
    project2: {
      title: "Weather App",
      description: "Web app to show current weather using OpenWeatherMap API.",
      techStack: ["JavaScript", "HTML", "CSS", "API"]
    }
  },

  skills: {
    programmingLanguages: ["JavaScript", "Python", "Java"],
    tools: {
      frontend: ["React", "Tailwind CSS", "Bootstrap"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB", "MySQL"],
      cloud: ["AWS", "Firebase"]
    },
    softSkills: ["Teamwork", "Communication", "Problem-Solving"]
  },

  languagesKnown: ["English", "Tamil", "Hindi"],

  achievements: [
    "Winner of Hackathon at Anna University (2023)",
    "Received Coursera Scholarship for Web Dev Course",
    "Top Performer Award in Internship"
  ],

  hobbies: ["Reading", "Coding", "Gaming", "Blogging"],

  displayResume: function () {
    console.log("----- Resume Summary -----");
    console.log("👤 Name:", this.personalInfo.name);
    console.log("📧 Email:", this.personalInfo.email);
    console.log("📞 Phone:", this.personalInfo.phone);
    console.log("🌐 LinkedIn:", this.personalInfo.linkedIn);
    console.log("💻 GitHub:", this.personalInfo.github);
    console.log("📍 Address:", `${this.personalInfo.address.street}, ${this.personalInfo.address.city}, ${this.personalInfo.address.state} - ${this.personalInfo.address.zip}`);
    console.log("\n🎓 Education:");
    console.log("-", this.education.school.degree, "from", this.education.school.name, "(", this.education.school.year, ")");
    for (let key in this.education.additionalCertifications) {
      let course = this.education.additionalCertifications[key];
      console.log(`- ${course.title} (${course.platform}, ${course.year})`);
    }

    console.log("\n💼 Experience:");
    console.log("-", this.experience.job1.role, "at", this.experience.job1.company, `(${this.experience.job1.duration})`);
    console.log("  Project:", this.experience.job1.details.project);
    console.log("  Stack:", this.experience.job1.details.techStack.join(", "));
    console.log("-", this.experience.internship.role, "at", this.experience.internship.company, `(${this.experience.internship.duration})`);
    console.log("  Project:", this.experience.internship.details.project);
    console.log("  Stack:", this.experience.internship.details.techStack.join(", "));

    console.log("\n📁 Projects:");
    for (let key in this.projects) {
      let proj = this.projects[key];
      console.log(`- ${proj.title}: ${proj.description} [${proj.techStack.join(", ")}]`);
    }

    console.log("\n🛠️ Skills:");
    console.log("  Languages:", this.skills.programmingLanguages.join(", "));
    console.log("  Frontend:", this.skills.tools.frontend.join(", "));
    console.log("  Backend:", this.skills.tools.backend.join(", "));
    console.log("  Database:", this.skills.tools.database.join(", "));
    console.log("  Cloud:", this.skills.tools.cloud.join(", "));
    console.log("  Soft Skills:", this.skills.softSkills.join(", "));

    console.log("\n🗣️ Languages Known:", this.languagesKnown.join(", "));
    console.log("\n🏆 Achievements:");
    this.achievements.forEach((ach, i) => {
      console.log(`  ${i + 1}. ${ach}`);
    });

    console.log("\n🎯 Hobbies:", this.hobbies.join(", "));
    console.log("--------------------------");
  }
};

resume.displayResume();

