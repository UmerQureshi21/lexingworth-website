import { ExecutiveBoardCard } from "../components/ExecutiveBoardSection";

export default function Analysts() {
  const coverageTeams = [
    {
      team: "Industrials / Infrastructure",
      people: [
        { name: "Alex", position: "", bio: "", image: "/analysts/alex.jpeg", linkedinUrl: "" },
        { name: "Noah", position: "", bio: "", image: "/analysts/noah.jpeg", linkedinUrl: "https://urldefense.com/v3/__http:/www.linkedin.com/in/noah-patel-821849221__;!!PxNGlQK5RbneE5k!VaLwXv01POPwrPD6BJctWboLqpxZcAfbyqWJtSe3X_vPt4zpoGnQJYeMqWvAKlmvv4u86P0E9MZL1kk0rn4gIRk$" },
        { name: "Veer", position: "", bio: "", image: "/analysts/veer.jpeg", linkedinUrl: "https://www.linkedin.com/in/veersarin/" },
        { name: "Nabeel", position: "", bio: "", image: "/analysts/nabeel.jpeg", linkedinUrl: "https://www.linkedin.com/in/nabeelbaigmirza/" },
        { name: "James", position: "", bio: "", image: "/analysts/james.jpeg", linkedinUrl: "https://www.linkedin.com/in/jaabraham/" },
      ],
    },
    {
      team: "TMT (Tech, Media & Telecom)",
      people: [
        { name: "Louise", position: "", bio: "", image: "/analysts/louise.jpeg", linkedinUrl: "" },
        { name: "Alina", position: "", bio: "", image: "/analysts/alina.jpeg", linkedinUrl: "" },
        { name: "Angelo", position: "", bio: "", image: "/analysts/angelo.jpeg", linkedinUrl: "https://www.linkedin.com/in/angelovalentini/" },
        { name: "Gayathri", position: "", bio: "", image: "/analysts/gayathri.jpeg", linkedinUrl: "https://www.linkedin.com/in/gayathri-nunna/" },
      ],
    },
    {
      team: "Healthcare",
      people: [
        { name: "Viyashan", position: "", bio: "", image: "/analysts/viyashan.jpeg", linkedinUrl: "" },
        { name: "Ammar", position: "", bio: "", image: "/analysts/ammar.jpeg", linkedinUrl: "" },
        { name: "Viraj", position: "", bio: "", image: "/analysts/viraj.jpeg", linkedinUrl: "https://www.linkedin.com/in/virajgulati06/" },
        { name: "Ayden", position: "", bio: "", image: "/analysts/ayden.jpeg", linkedinUrl: "https://www.linkedin.com/in/aydenbhanwadia/" },
        { name: "Evan", position: "", bio: "", image: "/analysts/evan.jpeg", linkedinUrl: "https://www.linkedin.com/in/evan-kwan05/" },
      ],
    },
    {
      team: "Energy / Oil & Gas",
      people: [
        { name: "Joshua", position: "", bio: "", image: "/analysts/joshua.jpeg", linkedinUrl: "https://www.linkedin.com/in/joshua-rebello/" },
        { name: "Jelani", position: "", bio: "", image: "/analysts/jelani.jpeg", linkedinUrl: "www.linkedin.com/in/jelani-mossanda" },
        { name: "Arpit", position: "", bio: "", image: "/analysts/arpit.jpeg", linkedinUrl: "" },
        { name: "Rienell", position: "", bio: "", image: "/analysts/rienell.jpeg", linkedinUrl: "" },
      ],
    },
    {
      team: "Diversified",
      people: [
        { name: "Laraib", position: "", bio: "", image: "/analysts/laraib.jpeg", linkedinUrl: "www.linkedin.com/in/laraib-saleem/" },
        { name: "Lara", position: "", bio: "", image: "/analysts/lara.jpeg", linkedinUrl: "" },
        { name: "Shrey", position: "", bio: "", image: "/analysts/shrey.jpeg", linkedinUrl: "http://linkedin.com/in/goelshrey" },
        { name: "Tylor", position: "", bio: "", image: "/analysts/tylor.jpeg", linkedinUrl: "https://www.linkedin.com/in/tylor-lu/" },
        { name: "Yaiyin", position: "", bio: "", image: "/analysts/yaiyin.jpeg", linkedinUrl: "" },
      ],
    },
  ];

  return (
    <div className="w-full pb-[100px] relative top-[75px] flex flex-col justify-center items-center">
      {coverageTeams.map((coverage, idx) => (
        <div key={idx} className="w-full mb-12 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-center px-6">
            {coverage.team}
          </h2>
          <div className="w-full md:w-auto px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {coverage.people.map((person, personIdx) => (
                <div key={personIdx} className="w-[70%] md:w-auto">
                  <ExecutiveBoardCard
                    name={person.name}
                    position={person.position}
                    bio={person.bio}
                    image={person.image}
                    linkedinUrl={person.linkedinUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
