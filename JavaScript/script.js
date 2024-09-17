document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('loginForm').classList.remove('hidden');
  });
  
  document.getElementById('loginForm').addEventListener('click', function(event) {
    if (event.target === this) {
      this.classList.add('hidden');
    }
  });


  // JavaScript to handle sidebar toggle
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const overlay=document.getElementById("overlay")
  const closeSidebar = document.getElementById("close-sidebar");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-open");
    overlay.classList.remove("hidden")
  });

  closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-open");
    overlay.classList.add("hidden")
  });

    overlay.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-open");
    overlay.classList.add("hidden")
  });

  document
    .getElementById("loginButton")
    .addEventListener("click", function () {
      document.getElementById("loginForm").classList.remove("hidden");
      overlay.classList.remove("hidden")
    });

  document
    .getElementById("loginForm")
    .addEventListener("click", function (event) {
      if (event.target === this) {
        this.classList.add("hidden");
      }
      overlay.classList.add("hidden")
    });



    //Testimonial 

const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");
const defaultParagraph = document.querySelector(".default-paragraph"); // Select the default paragraph

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text:
      "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to these guys. They are an amazing developers. They stress on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. They go over and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "Azlan group is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire them, you will not be disappointed by the work delivered. They will go the extra mile to make sure that you are happy with your project. I will surely work again with them!",
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text:
      "These guys are hard workers. Communication was also very good with them and they were very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with them.",
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text:
      "These guys do everything they can to get the job done and done right. This is the second time I've hired them, and I'll hire them again in the future.",
  },
  {
    name: "Jonathan Nunfiez",
    position: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text:
      "I had my concerns that due to a tight deadline this project can't be done. But Azlan proved me wrong not only they delivered an outstanding work but they managed to deliver 1 day prior to the deadline. And when I asked for some revisions they made them in MINUTES. I'm looking forward to work with Azlan again and I totally recommend them. Thanks again!",
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text:
      "Azlan is a top notch designer and front end developer. They communicates well, works fast and produces quality work. We have been lucky to work with Them!",
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text:
      "Your tutorials are actually helpful, after university i couldn't get a job but with the help of your tutorials and advice and mentors i am now a proud worker who knows better at work.",
  },
];

let index = 1;

const updateTestimonial = () => {
  const { name, position, photo, text } = testimonials[index];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  index++;
  if (index > testimonials.length - 1) index = 0;
};

setInterval(updateTestimonial, 10000);


// Hide the default paragraph when the script runs
if (defaultParagraph) {
  defaultParagraph.style.display = "none";
}

// Update testimonial content dynamically
testimonial.textContent = testimonials[0].text;
userImage.src = testimonials[0].photo;
username.textContent = testimonials[0].name;
role.textContent = testimonials[0].position;