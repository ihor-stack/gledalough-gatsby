import ctrl from "../controllers"

const routes = [
  {
    method: "POST",
    path: "/api/data",
    handler: ctrl.allData,
  },
  {
    method: "POST",
    path: "/api/contact",
    handler: ctrl.contact,
  },
]

export default routes
