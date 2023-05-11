import ctrl from '../controllers'

const routes = [
    {
      method: 'POST',
      path: '/api/data',
      handler: ctrl.allData
    }
];
  
export default routes