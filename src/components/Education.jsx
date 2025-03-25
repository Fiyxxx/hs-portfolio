const dummySchools = [
  { name: "National University of Singapore", years: "2025-2029", focus: "BComp, Business AI Systems", score: "" },
  { name: "Temasek Junior College", years: "2021-2022", focus: "4H2 Comp, Math, Chem, Econs", score: "RP: 87.5" },
  { name: "Anglican High School", years: "2017-2020", focus: "8 Subjects, 6 Distinctions", score: "L1R5: 7 Nett"},
];

const dummyCerts = [
  "CS50x [harvard]",
  "CS50p [harvard]",
  "Machine Learning Specialisation [deeplearning.ai]",
  "The Odin Project Foundation Course [top]",
  "Fundamentals of Quantitative Modelling [upenn]",
];

const dummyAchievements = [
  "CSIT Computing Scholarship [jc]",
  "TJC ACE Award [jc]",
  "TJC Talent Development Programme [jc]",
  "NSG Taekwondo Overall - 🥈 [jc]",
  "NSG Taekwondo Team Event- 🥉 [jc]"
];

const Education = () => {
  return (
    <section
      id="education"
      className="scroll-mt-20 w-full min-h-screen px-6 py-10 flex justify-center relative"
    >
      <div className="max-w-2xl w-full flex flex-col gap-12 relative">
        {/* Section Title */}
        <div className="absolute top-6 left-0 w-full flex justify-center">
          <div className="max-w-screen-md w-full">
            <h2 className="text-3xl sm:text-7xl text-white font-bold tracking-wider">
              education.
            </h2>
          </div>
        </div>

        {/* Schooling Subsection */}
        <div className="pt-30 flex flex-col gap-8">
          <h3 className="text-xl font-semibold text-white">schooling</h3>
          {dummySchools.map((school, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="bg-white/10 text-white px-6 py-4 rounded-lg max-w-md w-fit">
                <h4 className="text-lg font-bold">{school.name}</h4>
                <p className="text-sm opacity-70">{school.years}</p>
                <p className="text-sm">{school.focus}</p>
                <p className="text-sm">{school.score}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center text-white">
            <h3 className="text-xl font-semibold">certifications</h3>
            <h3 className="text-xl font-semibold">achievements</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 text-white text-sm">
            {/* Certifications List */}
            <ul className="list-disc list-inside space-y-1">
              {dummyCerts.map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>

            {/* Achievements List */}
            <ul className="list-disc list-inside space-y-1 text-right">
              {dummyAchievements.map((achieve, i) => (
                <li key={i}>{achieve}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;