import type { NextPage } from "next";
// import teste from './dataNews';

// const NewsComponent: NextPage = ({props}) => {
//   return (
//     <div className="pageNewsComponent">
//         {teste.map(animal => (
//         <div key={animal.name}>{animal.titulo}</div>
//       ))}
//     </div>
//   );
// };

interface NewsPropsInterface {
  news: any[];
}

function NewsComponent({ news }: NewsPropsInterface) {
  const isEmptyObj = (obj: any) => {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return true;
  };

  return (
    <div className="pageNewsComponent">
      {!isEmptyObj(news) ? (
        <>
          {news.map((news: any) => (

            <div>{news.titulo}</div>
          ))}
        </>
      ) : (
        <>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</>
      )}
    </div>
  );
}

export default NewsComponent;
