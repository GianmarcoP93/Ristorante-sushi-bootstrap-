const Card = ({
  img,
  title,
  price,
  onDelete,
  cardId,
  quantità,
  onIncrement,
  onDecrement,
}) => {
  return (
    <>
      <div className="col">
        <div
          className="card"
          style={{
            width: "18rem",
            margin: "16px 0",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <button
              className="btn bg-success text-white"
              style={{ borderRadius: " 0px" }}
              onClick={() => onIncrement(cardId)}
            >
              Aggiungi
            </button>

            <span className="badge badge-light text-dark">{quantità}</span>

            <button
              className="btn bg-danger text-white"
              style={{ borderRadius: " 0px" }}
              onClick={() => onDecrement(cardId)}
            >
              Rimuovi
            </button>
          </div>
          <img
            src={img}
            className="card-img-top"
            style={{
              width: "100%",
              maxHeight: "160px",
              objectFit: "cover",
              borderRadius: "0px",
            }}
          />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{price} €</p>
            <button
              className="btn btn-outline-danger"
              onClick={() => onDelete(cardId)}
            >
              Elimina
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
