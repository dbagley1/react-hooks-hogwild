function Hog(props) {
  const { hog } = props;

  return (
    <div className="pigTile">
      <img src={hog.image} alt={hog.name} />
      <h3>{hog.name}</h3>
      <p>{hog.weight}</p>
      <p>{hog.specialty}</p>
    </div>
  );
}

export default Hog;
