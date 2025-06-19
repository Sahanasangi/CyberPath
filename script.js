const text = "Cyber Path 🌐";
let index = 0;
const speed = 100;
window.onload = function () {
  if (document.getElementById("typewriter")) {
    typeWriter();
  }
};
function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}


// 📄 Career Info Data
const careers = {
  pentester: {
    title: "Penetration Tester (Ethical Hacker)",
    salary: "₹7L–₹15L/year",
    skills: ["Linux", "Networking", "Burp Suite", "Python"],
    certs: ["CEH", "OSCP", "PNPT"],
    roadmap: [
      "Learn networking & Linux basics",
      "Practice on HackTheBox or TryHackMe",
      "Take CEH or OSCP certification",
      "Apply for internships or CTFs"
    ]
  },
  soc: {
    title: "SOC Analyst",
    salary: "₹4L–₹10L/year",
    skills: ["SIEM Tools", "Log Analysis", "Incident Handling"],
    certs: ["Security+", "IBM Cyber Analyst"],
    roadmap: [
      "Understand incident response",
      "Practice with Splunk or Wazuh",
      "Get certified",
      "Join SOC teams or internships"
    ]
  },
  cloud: {
    title: "Cloud Security Engineer",
    salary: "₹10L–₹20L/year",
    skills: ["AWS", "IAM", "Encryption"],
    certs: ["AWS Security Specialty", "Azure SC-900"],
    roadmap: [
      "Learn cloud basics and architecture",
      "Master IAM & policies",
      "Take cloud certs",
      "Apply for cloud security roles"
    ]
  },
  bugbounty: {
    title: "Bug Bounty Hunter",
    salary: "₹0 – ₹∞ (based on reward)",
    skills: ["Recon", "Web Exploits", "OWASP", "Burp"],
    certs: ["Self-taught", "CEH/OSCP (optional)"],
    roadmap: [
      "Learn web security & OWASP",
      "Join platforms like HackerOne",
      "Report bugs with proof of concept",
      "Earn bounties and build your profile"
    ]
  }
  // Add more roles here as needed
};

// 🧠 Career Page Handler
function loadCareerDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const role = urlParams.get("role");

  if (role && careers[role]) {
    const data = careers[role];
    document.getElementById("title").innerText = data.title;
    document.getElementById("salary").innerText = "💰 " + data.salary;

    const skills = document.getElementById("skills");
    skills.innerHTML = "";
    data.skills.forEach(skill => {
      const tag = document.createElement("span");
      tag.className = "list-tag";
      tag.innerText = skill;
      skills.appendChild(tag);
    });

    const certs = document.getElementById("certs");
    certs.innerHTML = "";
    data.certs.forEach(cert => {
      const tag = document.createElement("span");
      tag.className = "list-tag";
      tag.innerText = cert;
      certs.appendChild(tag);
    });

    const roadmap = document.getElementById("roadmap");
    roadmap.innerHTML = "";
    data.roadmap.forEach(step => {
      const li = document.createElement("li");
      li.innerText = step;
      roadmap.appendChild(li);
    });
  } else {
    document.querySelector(".career-container").innerHTML = `
      <h2 style="color: #ff4d4d;">Invalid or missing role!</h2>
      <div class="back-btn">
        <a href="index.html" class="btn-white">🔙 Back to Home</a>
      </div>
    `;
  }
}
