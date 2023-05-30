function Card(props) {
  const { name, handle, desc, image } = props;
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p className="handle">
        <i>{handle}</i>
      </p>
      <p className="description">{desc}</p>
    </div>
  );
}

export default Card;
