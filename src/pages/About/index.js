import Content from "./fragments/About";
import Sidebar from "./fragments/sidebar/sidebar";
import "./styles.css";

function About() {
  let data = "Tentang Saya";

  return (
    <div>
      <section className="content-container">
        <Content data={data} />
        <Sidebar />
      </section>
    </div>
  );
}

export default About;
