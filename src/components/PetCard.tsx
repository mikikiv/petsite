import React from "react";
import Link from "@docusaurus/Link";

/* children is where the content of the body goes */
export default function PetCard({
  name,
  children,
  breed,
  birthday,
  href,
  image,
  footer,
  death,
  ...rest
}: {
  name: string;
  children: React.ReactNode;
  breed?: string;
  birthday?: string;
  href?: string;
  image?: string;
  footer?: React.ReactNode;
  death?: string;
}) {
  const age = () => {
    var today = new Date();
    var birthDate = new Date(birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age;
    }
    if (death != undefined) {
      var birthYear = new Date(birthday).getFullYear();
      var deathAge =
        new Date(death).getFullYear() - birthDate.getFullYear() - 1;
      var deathYear = new Date(death).getFullYear();

      return (
        <>
          {`${deathAge} years`}
          <br />
          {`(${birthYear} - ${deathYear})`}
        </>
      );
    }
    return age + " years";
  };

  return (
    <Link
      className="group/petCard m-4 text-gray-200 hover:text-blue-200 hover:no-underline"
      href={href}
    >
      <div className="h-full min-w-80 rounded-lg border border-solid border-gray-800 group-hover/petCard:bg-gray-800">
        <div className="grid grid-cols-1">
          {image ? (
            <img
              className={`h-48 w-full rounded-t-md object-cover group-hover/petCard:opacity-70`}
              src={image}
            />
          ) : null}
          <h2
            className={`${!image && "rounded-t-lg"} bg-gray-800 p-4 text-center text-xl font-extrabold uppercase group-hover/petCard:bg-slate-200 group-hover/petCard:text-gray-800`}
          >
            {name}
          </h2>
          <div className="mx-4 mb-4">
            <div className="grid grid-cols-2">
              <p className="">{breed && breed}</p>
              <p className="text-right">{birthday && age()}</p>
            </div>
            <div className="">{children}</div>
            {footer && (
              <>
                <hr />
                <div className="">{footer}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
