import AmountForm from "../../components/AmountForm";
import Header from "../../components/Header/index";
import { MovementsList } from "../../components/MovementsList";

function Home() {
  return (
    <div className="container">
      <Header name="Víctor" />
      <AmountForm />
      <hr />
      <MovementsList />
    </div>
  );
}

export default Home;
