import { data } from '../assets/clients.json'
import Table from 'react-bootstrap/Table';

function ClientsTable() {


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th>Cidade</th>
        </tr>
      </thead>
      <tbody>
          {data.map((client) => (
        <tr>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.email}</td>
          <td>{client.contact}</td>
          <td>{client.location}</td>
        </tr>
          ))}
      </tbody>
    </Table>
  )
}

export default ClientsTable