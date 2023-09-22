function karatsuba(x, y) {
    // Convierte los números a cadenas para obtener la longitud
    const strX = x.toString();
    const strY = y.toString();
  
    // Si alguno de los números es un solo dígito, usa la multiplicación estándar
    if (strX.length === 1 || strY.length === 1) {
      return x * y;
    }
  
    // Calcula el tamaño de los números y el punto medio
    const n = Math.max(strX.length, strY.length);
    const halfN = Math.ceil(n / 2);
  
    // Divide los números en partes más pequeñas
    const a = parseInt(strX.slice(0, -halfN)) || 0;
    const b = parseInt(strX.slice(-halfN)) || 0;
    const c = parseInt(strY.slice(0, -halfN)) || 0;
    const d = parseInt(strY.slice(-halfN)) || 0;
  
    // Calcula los productos intermedios
    const ac = karatsuba(a, c);
    const bd = karatsuba(b, d);
    const adbc = karatsuba(a + b, c + d) - ac - bd;
  
    // Combina los resultados
    return ac * Math.pow(10, 2 * halfN) + adbc * Math.pow(10, halfN) + bd;
  }
  
  // Ejemplo de uso
  const resultado = karatsuba(123, 456);
  console.log(resultado); // Debería mostrar 56088
  