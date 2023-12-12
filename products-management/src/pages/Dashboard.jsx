import TableDashBoard from "../components/Table";
import useProductList from "../hooks/useProductList";
import ModalButton from "../components/Modal";

const Dashboard = () => {
  const productList = useProductList();

  return (
    <div>
      <ModalButton/>
      <TableDashBoard dataSource={productList} />
    </div>
  )
}

export default Dashboard;