import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="" style={{ height: "calc(100vh - 61.33px)" }}>
      <div
        style={{
          backgroundColor: "yellow",
          height: "10rem",
          backgroundSize: "100%",
          backgroundPosition: " right 0 bottom -650px",
          background:
            "url(https://braziliando.com/wp-content/uploads/2021/09/DESTAQUE-Amazonia_DSC2357-scaled.jpg)",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "22rem",
            width: "17rem",
            backgroundColor: "#04D361",
            display: "flex",
            position: "absolute",
            top: "1.5rem",
            left: "1.5rem",
            borderRadius: "3rem",
            padding: "1rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
