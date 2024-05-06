import './BooksList.css';
import React from 'react';
  
function BooksList() {
    return (
      <table>
        <thead>
          <tr>
            <th>Titel</th>
            <th>Autor</th>
            <th>ISBN</th>
            <th>Bewertung</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JavaScript - Das umfassende Handbuch</td>
            <td>Philip Ackermann</td>
            <td>978-3836286299</td>
            <td>*****</td>
          </tr>
          <tr>
            <td>Clean Code</td>
            <td>Robert Martin</td>
            <td>978-0132350884</td>
            <td>****</td>
          </tr>
          <tr>
            <td>Design Patterns</td>
            <td>Erich Gamma</td>
            <td>978-0201633610</td>
            <td>*****</td>
          </tr>
          <tr>

          </tr>
        </tbody>
      </table>
    );
  }
   
  export default BooksList;