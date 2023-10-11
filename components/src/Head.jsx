// eslint-disable-next-line react/prop-types
const Head = ({name1,name2,name3,name4}) => {
  return (
    <>
      <div className="my-10 mx-10">
        <h1 className="bg-slate-500 text-center text-lg">{name1}</h1>
        <h1 className="bg-red-500 text-center text-lg">{name2}</h1>
        <h1 className="bg-yellow-500 text-center text-lg">{name3}</h1>
        <h1 className="bg-lime-500 text-center text-lg">{name4}</h1>
      </div>
    </>
  );
};

export default Head;
