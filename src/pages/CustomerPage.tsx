import React, { useEffect, useState } from 'react';
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface Cliente {
  idCliente: number;
  tipoDocumento: string;
  numeroDocumento: string;
  nombreCliente: string;
  direccionCliente?: string;
  telefonoCliente?: string;
  correoCliente?: string;
}

const ClientesPage: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/clientes') // Cambia al URL correcto de tu backend
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar clientes');
        return res.json();
      })
      .then((data) => {
        setClientes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Typography>Cargando clientes...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Gestión de Clientes
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Tipo Documento</TableCell>
              <TableCell>Número Documento</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Correo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map((cliente) => (
              <TableRow key={cliente.idCliente}>
                <TableCell>{cliente.idCliente}</TableCell>
                <TableCell>{cliente.tipoDocumento}</TableCell>
                <TableCell>{cliente.numeroDocumento}</TableCell>
                <TableCell>{cliente.nombreCliente}</TableCell>
                <TableCell>{cliente.direccionCliente || '-'}</TableCell>
                <TableCell>{cliente.telefonoCliente || '-'}</TableCell>
                <TableCell>{cliente.correoCliente || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ClientesPage;
