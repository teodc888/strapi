export default  {
    routes: [
      {
        method: 'GET',
        path: '/custom',
        handler: 'pelicula.custom',
        config:{
            auth:false
        }
      },
      {
        method: 'GET',
        path: '/prueba1',
        handler: 'pelicula.prueba1',
        config:{
            auth:false
        }
      },
      {
        method: 'GET',
        path: '/prueba2',
        handler: 'pelicula.prueba2',
        config:{
            auth:false
        }
      },
    ],
  };
   