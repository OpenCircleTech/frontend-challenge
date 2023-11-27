import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import Produtos from "../../Components/Produtos";


export default function Products() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/401');
    }
  }, []);

  return (
    <Produtos />
  );
}
