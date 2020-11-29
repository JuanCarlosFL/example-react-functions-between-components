import React from "react";

interface Props {
  nombre: string;
  onNuevoNombre: (nuevoNombre: string) => void;
}

export const Yerno: React.FC<Props> = (props) => {
  return (
    <>
      <h1>{props.nombre}</h1>
      <input
        value={props.nombre}
        onChange={(e) => props.onNuevoNombre(e.target.value)}
      />
    </>
  );
};

//Suegra chunga, le paso una función para restringir el nombre que acepto
export const Suegra = () => {
  const [nombre, setNombre] = React.useState("Carlos");

  const setNombreLoQueYoDiga = (nuevoNombre: string) => {
    if (nuevoNombre === "Carlos" || nuevoNombre === "Carlo") {
      setNombre(nuevoNombre);
    } else {
      alert(`Un carajo ${nuevoNombre}`);
    }
  };

  return <Yerno nombre={nombre} onNuevoNombre={setNombreLoQueYoDiga} />;
};

// Suegra buena, pasa el setNombre al yerno para que le cambie el nombre
// export const Suegra = () => {
//   const [nombre, setNombre] = React.useState("Carlos");

//   return <Yerno nombre={nombre} onNuevoNombre={setNombre}/>;
// };
