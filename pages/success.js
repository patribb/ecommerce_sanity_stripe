import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    const [order, setOrder] = useState(null);

    useEffect(() => {
      localStorage.clear()
      setCartItems([]);
      setTotalPrice(0)
      setTotalQuantities(0);
      runFireworks();
    }, [])
    

  return (
    <div className='success-wrapper'>
      <div className="success">
          <p className="icon">
              <BsBagCheckFill />
          </p>
          <h2>Gracias por tu pedido.</h2>
          <p className="email-msg">Mira la bandeja de entrada de tu correo electrónico para ver tu pedido.</p>
          <p className="description">Si tienes alguna pregunta, escribe al email
          <a href="mailto:order@example.com" className="email">order@example.com</a>
          </p>
          <Link href='/'>
              <button type='button' width='300px' className='btn'>Seguir comprando</button>
          </Link>
      </div>
    </div>
  )
}

export default Success
