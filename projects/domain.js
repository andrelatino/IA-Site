async function checkDomainIP(domain, expectedIP) {
    try {
      const response = await fetch(`https://dns.google/resolve?name=${domain}&type=A`);
      const data = await response.json();
      const ips = data.Answer.map(record => record.data);
      return ips.includes(expectedIP);
    } catch (error) {
      console.error('Error al verificar el dominio:', error);
      return false;
    }
  }
  
  // Uso de la función
  checkDomainIP('clic.one', '185.199.111.153').then(isMatching => {
    if (isMatching) {
      console.log('El dominio apunta a la IP específica.');
    } else {
      console.log('El dominio no apunta a la IP específica.');
    }
  });
  