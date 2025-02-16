// import React from "react";

// export default function Team() {
//   const team = [
//     {
//       name: "Prateek Gupta",
//       rollNo: 230350320051,
//       quote: "You are the creator of your own destiny.",
//       linkedin: "https://www.linkedin.com/in/kanandvardhan/",
//       roll: "",
//       image: "Anand",
//     },
//     {
//       name: "Subodh Shrivastava",
//       rollNo: 230350320050,
//       quote: "Believe in yourself and you'll be unstoppable.",
//       linkedin: "https://www.linkedin.com/in/sagar-kottagattu-01827345/",
//       roll: "",
//       image: "Sagar",
//     },
//     {
//       name: "Yash Kushwah",
//       rollNo: 230350320054,
//       quote: "Direction and consistency are of utmost importance.",
//       linkedin: "https://www.linkedin.com/in/leola-lopes-lobo-a51390239/",
//       roll: "",
//       image: "Leola",
//     },
//     {
//       name: "Khushi Pandey",
//       rollNo: 230350320045,
//       quote: "Success is a journey, not a destination.",
//       linkedin: "https://www.linkedin.com/in/vivek-khairnar-10449626b",
//       roll: "",
//       image: "Vivek",
//     },
//     {
//       name: "Ruma Kumari",
//       rollNo: 230350320046,
//       quote: "The only way to do great work is to love what you do.",
//       linkedin: "https://www.linkedin.com/in/khalid-siddiqui-b1b4a057",
//       roll: "",
//       image: "Khalid",
//     },
//   ];
//   return (
//     <main className="container-container">
//       <section id="inner-headline">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <h2 className="pageTitle">Team - Employee Management System</h2>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section id="content">
//         <section class="py-5 text-center container">
//           <div class="row justify-content-lg-center">
//             <div class="col-lg-12 col-md-8">
//               <h1 class="fw-light">Us, Who made this possible</h1>
//               <p class="lead text-muted">
//                 {/* Something short and leading about the collection below—its
//                 contents, the creator, etc. Make it short and sweet, but not too
//                 short so folks don’t simply skip over it entirely. */}
//                 Dive into the remarkable collection below, a tribute to 'Us' –
//                 the ingenious minds that brought forth the extraordinary.
//               </p>
//               {/* <p>
//                 <a href="#" class="btn btn-primary my-2">
//                   Main call to action
//                 </a>
//                 <a href="#" class="btn btn-secondary my-2">
//                   Secondary action
//                 </a>
//               </p> */}
//             </div>
//           </div>
//         </section>
//         <hr />

//         <div class="album py-5 bg-light">
//           {/* container */}
//           <div class="">
//             <div class="row team">
//               {team.map((item, idx) => (
//                 // col-md-5
//                 <div class="col-md-4 team-card">
//                   <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
//                     <div class="col p-4 d-flex flex-column position-static">
//                       <strong class="d-inline-block mb-2 text-primary">
//                         Team
//                       </strong>
//                       <h3 class="mb-0">{item.name}</h3>
//                       <p>({item.rollNo})</p>
//                       {/* <div class="mb-1 text-muted">230350320051</div> */}
//                       <p class="card-text mb-auto">"{item.quote}"</p>
//                       <a
//                         href={item.linkedin}
//                         target="_blank"
//                         class="stretched-link"
//                       >
//                         Profile
//                       </a>
//                     </div>
//                     <div class="col-auto d-none d-lg-block">
//                       <img
//                         className="thumbnail"
//                         width="200"
//                         height="250"
//                         alt={item.name}
//                         src={require(`../../img/${item.image}.webp`)}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


import React from "react";
import "./Team.css"; // Import CSS file

export default function Team() {
  const team = [
    {
      name: "Khushi Pandey",
      rollNo: 240850120069,
      quote: "B.Tech CSE student passionate about technology, problem-solving, and creating impactful web applications, with experience in development, collaboration, and project execution.",
      linkedin: "http://www.linkedin.com/in/khushi9555",
      role: "Full Stack Developer",
      image: "khushi",
    },
    {
      name: "Prateek Gupta",
      rollNo: 240850120108,
      quote: "Highly skilled Full Stack Software Engineer seeking to leverage web development and problem-solving expertise to contribute to an innovative team.",
      linkedin: "https://www.linkedin.com/in/prateek-btech-cse/",
      role: "Software Developer",
      image: "Prateek",
    },
    {
      name: "Ruma Kumari",
      rollNo: 240850120119,
      quote: "B.Tech CSE student passionate about frontend development, building user interfaces using HTML, CSS, JavaScript, and React.js for seamless web experiences.",
      linkedin: "https://www.linkedin.com/in/ruma-lion-b7285320b/",
      role: "Frontend Developer",
      image: "Ruma",
    },
    {
      name: "Subodh Shrivastava",
      rollNo: 240850120142,
      quote: "A software developer designs, builds, and maintains applications, solving complex problems with coding, algorithms, and innovative technology solutions.",
      linkedin: "https://www.linkedin.com/in/subodh-shrivastava-7947b1201/",
      role: "Frontend Engineer",
      image: "subodh",
    },
    {
      name: "Yash Kushwah",
      rollNo: 240850120167,
      quote: "A software developer designs, builds, and maintains applications, solving complex problems with coding, algorithms, and innovative technology solutions.",
      linkedin: "https://www.linkedin.com/in/yash-kushwah-mar1103/",
      role: "Frontend Developer",
      image: "yash",
    }
  ];

  return (
    <main className="team-container">
      <section className="team-header">
        <h2>Teams and People</h2>
        <p>Meet the brilliant minds behind our Employee Management System.</p>
      </section>

      {/* First Row - 3 Members */}
      <div className="team-row">
        {team.slice(0, 3).map((member, index) => (
          <div key={index} className="team-card">
            <img
              src={require(`../../img/${member.image}.webp`)}
              alt={member.name}
              className="team-image"
            />
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-quote">"{member.quote}"</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-link">
              LinkedIn
            </a>
          </div>
        ))}
      </div>

      {/* Second Row - 2 Members (Always Centered) */}
      <div className="team-row team-row-centered">
        {team.slice(3, 5).map((member, index) => (
          <div key={index} className="team-card">
            <img
              src={require(`../../img/${member.image}.webp`)}
              alt={member.name}
              className="team-image"
            />
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-quote">"{member.quote}"</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-link">
              LinkedIn
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
