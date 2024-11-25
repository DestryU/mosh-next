import React from "react";

interface Cultists {
  id: number;
  name: string;
}

const NewUserPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  // {next: {revalidate: 10} });
  const cultists: Cultists[] = await response.json();

  return (
    <>
      <h1>Cultists: </h1>

      <p>{new Date().toLocaleTimeString()}</p>

      <ul>
        {cultists.map((cultists) => (
          <li key={cultists.id}>{cultists.name}</li>
        ))}
      </ul>
      <div>Oh gods, my brain is burning with visions! *Begin cackle*</div>
    </>
  );
};

export default NewUserPage;
