import React from "react";
import { ReactDOM } from "react";

const myelement = (
  <table>
    <tr>
      <td>Colorpicker</td>
    </tr>
  </table>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myelement);
