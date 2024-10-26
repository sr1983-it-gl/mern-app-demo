
import Table from 'react-bootstrap/Table';


const ProductItems = ({productItems}) => {

    function productsTable() {
        return (
          <Table striped bordered hover>
                  <thead>
                      <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Amount</th>
                      <th>Items in Stock</th>
                      </tr>
                  </thead>

                  <tbody>
                    {
                        productItems.map( (productItem, index) => {

                            return (

                                    <tr key={productItem.id}>
                                        <td>{index + 1}</td>
                                        <td>{productItem.name}</td>
                                        <td>{productItem.description}</td>
                                        <td>{productItem.price}</td>
                                        <td>{productItem.itemsInStock}</td>
                                        
                                    </tr>                           
                                
                            )
                        })
                    }                
                </tbody>


                  </Table>
        );
      }
      
      return (
        <div>

            <h2> Products </h2>
            {productsTable()}            

        </div>
    );

}
export {ProductItems}
