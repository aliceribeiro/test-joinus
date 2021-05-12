import CardPizza from "../CardPizza/CardPizza";

function List({ loading, pizzas }) {
  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <p className="ml-4">Escolha seu sabor</p>
      <div className="row">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default List;
