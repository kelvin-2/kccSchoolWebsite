import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../lib/sanityClient";

export default function Principals() {
  const [principals, setPrincipals] = useState([]);

  useEffect(() => {
    client
      .fetch(`
        *[_type == "principal"][0]{
          primarySchoolPrincipal { name, description, emojiPlaceholder, photo },
          highSchoolPrincipal { name, description, emojiPlaceholder, photo }
        }
      `)
      .then((data) => {
        const formatted = [
          {
            title: data.primarySchoolPrincipal.name,
            role: "Primary School Principal",
            placeholder: data.primarySchoolPrincipal.emojiPlaceholder,
            desc: data.primarySchoolPrincipal.description,
            photo: data.primarySchoolPrincipal.photo,
          },
          {
            title: data.highSchoolPrincipal.name,
            role: "High School Principal",
            placeholder: data.highSchoolPrincipal.emojiPlaceholder,
            desc: data.highSchoolPrincipal.description,
            photo: data.highSchoolPrincipal.photo,
          },
        ];
        setPrincipals(formatted);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Meet Our Principals
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {principals.map(({ title, role, placeholder, desc, photo }) => (
          <div key={title} className="text-center">
            <div className="bg-gray-100 rounded-lg h-80 w-64 mx-auto mb-6 flex items-center justify-center border-2 border-dashed border-gray-300">
              {photo ? (
                <img
                  src={urlFor(photo).url()}
                  alt={title}
                  className="h-full w-full object-cover rounded-lg"
                />
              ) : (
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">{placeholder}</div>
                  <p className="text-sm">Add photo: {role}</p>
                </div>
              )}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-red-600 font-semibold mb-4">{role}</p>
            <p className="text-gray-600 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-center text-red-600 mb-4">
          Our Leadership Philosophy
        </h3>
        <p className="text-gray-700 text-center leading-relaxed">
          Our principals work hand-in-hand to ensure a seamless educational experience from
          pre-primary through matric. Together, they foster an environment where academic excellence
          meets Christian character development, preparing students for success in all areas of life.
        </p>
      </div>
    </div>
  );
}
