var typed = new Typed(".text", {
  strings: ["Coder", "Developer", "Programmer"," Problem Solver"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});



  document.getElementById("downloadResume").addEventListener("click", function () {
    const resumeUrl = "./durgesh_resume.pdf"; // your resume file path or URL

    // 1. Open resume in a new tab
    window.open(resumeUrl, "_blank");

    // 2. Trigger download automatically
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Durgesh_Kumar_Gupta_Resume.pdf";  // name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });



