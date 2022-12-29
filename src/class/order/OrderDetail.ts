export default class OrderDetail {
  orderDetailId: number = 0
  productId: string = ""
  productName: string = ""
  price: number = 0
  count: number = 0
  constructor(
    orderDetailId_: number,
    productId_: string,
    productName_: string,
    price_: number,
    count_: number
  ) {
    this.orderDetailId = orderDetailId_
    this.productId = productId_
    this.productName = productName_
    this.price = price_
    this.count = count_
  }
}
