import React ,{useEffect}from "react";
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-buttons-dt";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.print";
function CustomerTable() {

  const data = [
    { customer: "ABC Traders", totalamount: 1200, date: "2026-03-10" },
    { customer: "XYZ Stores", totalamount: 950, date: "2026-03-11" },
    { customer: "Global Mart", totalamount: 1800, date: "2026-03-12" }
  ];

  useEffect(()=>{
   $('#myTable').DataTable({
     destroy:true,
     dom:'Bfrtip',
     buttons:[
       'copy',
       'csv',
       'excel',
       'pdf',
       'print'
     ]
   });
 },[])


  return (
    <div>
      <table id="myTable" border="1">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Total Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.customer}</td>
              <td>{item.totalamount}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default CustomerTable;