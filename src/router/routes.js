const Address = ()=> import('@/views/address/address.vue')

const routes = [
  {
    path: '/address',
    name: 'address',
    meta: {
    },
    component: Address
  }
  
]

export default routes