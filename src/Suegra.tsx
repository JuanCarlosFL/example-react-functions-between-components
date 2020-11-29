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

export const Suegra = () => {
  const [nombre, setNombre] = React.useState("Carlos");

  return <Yerno nombre={nombre} />;
};
