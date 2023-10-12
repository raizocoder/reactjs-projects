// eslint-disable-next-line react/prop-types
const Card = ({ name, classes }) => {
  return (
    <>
      <div style={{fontSize:"30px",border:"2px solid",textAlign:"center"}}>
        <p>{name}</p>
        <p>{classes}</p>
      </div>
    </>
  );
};

export default Card;
