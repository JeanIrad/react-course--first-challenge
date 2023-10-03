import "./styles.css";

const skills = ["HTML & CSS", "Javascript", "Java", "Git and Github", "React"];

export default function App() {
  return (
    <div className="App">
      <div className="avatar">
        <img
          src="jean.jpg"
          alt="Jean de Dieu Iradukunda"
        />
        <p>
          lorem ipsum this is my description as a developer who is committer to
          changing and shapping the world with massive and intense tech through
          designing and applying different potential programming languages to
          impress the World with amazing and formidable skills.
        </p>
        <div className="languages">
          {skills.map((skill) => (
            <button>{skill}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
