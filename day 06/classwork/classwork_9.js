let posts = [
  { title: "Learn JavaScript" },
  { title: "React Basics" },
  { title: "Advanced JS" },
  { title: "Intro JS" },
];

for (let i = 0; i < posts.length; i++) {
    if (posts[i].title.includes("JS")) {
        console.log(posts[i].title);
    }
}