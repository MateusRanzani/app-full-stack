import type { NextPage } from "next";
import Link from "next/link";
import { useState, useCallback } from "react";
import api from "../../utils/api";

interface Teacher {
  _id: string;
  name: string;
  email: string;
  cellphone: string;
  teacher: boolean;
  coins: number;
  courses: string[];
  available_hours: Record<string, number[]>;
  available_locations: string[];
  reviews: Record<string, unknown>[];
  appointments: Record<string, unknown>[];
}

const SearchPage: NextPage = () => {
  const [textInput, setTextInput] = useState("");
  const [messageError, setMessageError] = useState("");
  const [data, setData] = useState<Teacher[]>([]);

  const handleSearch = (textInput: string) => {
    api(`/api/search/${textInput}`)
      .then((response) => {
        const teachers: Teacher[] = response.data;
        setData(teachers);
        setMessageError("");
      })
      .catch((error) => {
        setMessageError(error.response.data.error);
        setData([]);
      });
  };

  return (
    <div>
      <h1>Bem vindo a página Search.</h1>

      <input
        type="text"
        value={textInput}
        placeholder="Digite a disciplina que você procura..."
        className="text-2xl border-2 border-box w-3/12 m-auto text-center my-12"
        onChange={(e: any) => {
          setTextInput(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => handleSearch(textInput)}
        className=""
      >
        Pesquisar
      </button>
      {messageError !== "" && <div>{messageError}</div>}
      {data.length > 0 &&
        data.map((teacher) => (
          <Link href={`/search/${teacher._id}`} key={teacher._id}>
            <h1 className="text-2xl">{teacher.name}</h1>
          </Link>
        ))}
    </div>
  );
};

export default SearchPage;
