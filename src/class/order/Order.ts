import OrderDetail from "./OrderDetail"

class Order {
  orderId: number = 0
  date: Date = new Date()
  custName: string = ""
  phone: string = ""
  orderDetail: Array<OrderDetail> = []

  constructor(
    orderId_: number,
    date_: Date,
    custName_: string,
    orderDetail_: Array<OrderDetail>
  ) {
    this.orderId = orderId_
    this.date = date_
    this.custName = custName_
    this.orderDetail = orderDetail_
  }
}
