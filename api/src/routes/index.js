import ctrl from '../controllers'

const routes = [
    {
      method: 'GET',
      path: '/api/data',
      handler: ctrl.allData
    }
];
  
export default routes