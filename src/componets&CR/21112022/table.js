import { tab } from "@testing-library/user-event/dist/tab";
import { useState } from "react";

const Table=()=>{
    return(

        <main>
            <table>
                <tr>

                    <th>company</th>

                    <th>address</th>
                    
                    <th>totalemp</th>
                    <th>clientname</th>
                    <th>address</th>
                    <th>clientnum</th>
                </tr>
                <tbody>{
                <tr>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                    </tr>}
                </tbody>




            </table>


        </main>
    )


}
export default Table;
