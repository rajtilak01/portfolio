import React from "react";

function Experience() {
  return (
    <div className="w-full h-full bg-neutral-900 my-6 py-10">
      <div className="justify-center flex text-4xl font-bold">Experience</div>
      <div className="justify-center flex">
        <div className="max-w-4xl mx-auto">
          <div>
            <div className="text-2xl font-bold underline">SDE Intern</div>
            <div className="underline">Redwine Digital</div>
            <div>
              <ul className="list-disc pl-5">
                <li>
                  Collaborated on building dynamic web solutions, including
                  real-time chat features and AI-powered user feedback tools.
                </li>
                <li>
                  Optimized API performance for a seamless user experience and
                  streamlined cloud storage to enhance operational efficiency.
                </li>
                <li>
                  Played a key role in improving platform functionality,
                  elevating user engagement, and delivering scalable features
                  for a growing user base.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold underline">
              Teaching Assistant Intern
            </div>
            <div className="underline">CodFeast</div>
            <div>
              <ul className="list-disc pl-5">
                <li>
                  Provided mentorship to aspiring developers, delivering
                  workshops and tutorials to strengthen core data structures and
                  algorithms concepts.
                </li>
                <li>
                  Organized regular coding challenges, fostering a collaborative
                  and engaging learning environment while guiding interns toward
                  achieving their technical goals.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
