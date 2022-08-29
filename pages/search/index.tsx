import type { NextPage } from "next";
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
  const [data, setData] = useState<Teacher[]>([]);

  const handleSearch = (textInput: string) => {
    api(`/api/search/${textInput}`).then((response) => {
      const teachers: Teacher[] = response.data;
      setData(teachers);
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
      {data.length > 0 &&
        data.map((teacher) => (
          <h1 className="text-2xl" key={teacher._id}>
            {teacher.name}
          </h1>
        ))}
    </div>
  );
};

export default SearchPage;
