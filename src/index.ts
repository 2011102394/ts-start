/** 图形参数 */
type TypeChartParam = {
  /** 宽 */
  width?: number
  /** 高 */
  height?: number
  /** 半径 */
  radiu?: number
}
class Square {
  width?: number
  height?: number
  constructor(width_: number, height_: number)
  constructor(obj: TypeChartParam)
  constructor(widthOrObj: number | TypeChartParam, height_: number = 0) {
    if (typeof widthOrObj === "number") {
      this.width = widthOrObj
      this.height = height_
    } else {
      this.width = widthOrObj.width
      this.height = widthOrObj.height
    }
  }
  getArea() {
    if (this.width && this.height) {
      return this.width * this.height
    }
  }
}

const square = new Square({width:40,height:80})
console.log(square.getArea())