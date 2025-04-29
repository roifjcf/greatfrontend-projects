import Link from "next/link";

const nav = [
  {name: "GreatFrontEnd", url: "https://www.greatfrontend.com/projects/u/roifjcf"},
  {name: "Github", url: "https://github.com/roifjcf"}
];

const starter = [
  "/testimonial-card"
];

export default function Home() {
  return (
  <main className="main-container">
    <h1>greatfrontend-projects</h1>
    {/* <p>by roifjcf</p> */}
    <ul>
      {nav.map((url, i)=>
      <li key={i}><Link href={url["url"]} target="_blank">{url["name"]+" ↗"}</Link></li>)}
    </ul>
    <h2>Starter</h2>
    <ul>
      {starter.map((url, i)=>
      <li key={i}><Link href={url} target="_blank">{url.substring(1)+" ↗"}</Link></li>)}
    </ul>
  </main>
  );
}
