import React from "react";
import { Link } from "react-router-dom";

import "./orders.css";

const Orders = () => {
  //states and events
  /*  const [order, setOrder] = useState(null);
  const [orderDetail, setOrderDetail] = useState([]);
  const [user, setUser] = useState(null);

  const changeStatus = (newStatus) => {
    let datas = {
      orderId: props.params.id,
      status: newStatus,
    };
    updateOrder(datas)
      .then((res) => {
        if (res.status === 200) {
          recupOrder();
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  }; */

  return (
    <>
      <section>
        <h2>Order List</h2>

        <div>
          <h3>Détails de la commande</h3>
          <table className="tableBeer first">
            <thead>
              <tr>
                <th>Nom</th>
                <th>id Reservation ou annonce</th>
                <th>Quantité</th>
                <th>Prix total</th>
                <th>Date de la reservation</th>
                <th>Status de la reservation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lasagnes végé</td>
                <td>ID000DDQ011DK112R</td>
                <td>1</td>
                <td>3€</td>
                <td>12/08/2023</td>
                <td>Terminé</td>
              </tr>
              <tr>
                <td>Pizza</td>
                <td>00Z00164DF236112R</td>
                <td>1</td>
                <td>2€</td>
                <td>16/08/2023</td>
                <td>Terminé</td>
              </tr>
              <tr>
                <td>Moelleux Chocolat</td>
                <td>000GEJKS01111JDJ2R</td>
                <td>1</td>
                <td>2.50€</td>
                <td>28/08/2023</td>
                <td>Terminé</td>
              </tr>
            </tbody>

            <tfoot>
              {/* tr c'est une ligne et td est une cellule  */}
              <tr>
                <td>b</td>
                <td>b</td>
                <td>Date</td>
                <td>Order date here = variable </td>
                <td>b</td>
                <td>b</td>
              </tr>
              <tr>
                <td>a</td>
                <td>a</td>
                <td>Total de la commande</td>
                <td>Total amount = variable</td>
                <td>a</td>
                <td>a</td>
              </tr>
              <tr>
                <td>c</td>
                <td>c</td>
                <td>Statut</td>
                <td>Order statut here = variable </td>
                <td>c</td>
                <td>c</td>
              </tr>
            </tfoot>
          </table>

          <Link to="/dashboard" className="returnBtn">
            Return to dashboard
          </Link>
        </div>
      </section>
    </>
  );
};

export default Orders;
