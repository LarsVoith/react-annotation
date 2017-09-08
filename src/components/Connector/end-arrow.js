import { lineBuilder } from "../Builder"

// export default ({ annotation, start, end }) => {

export default ({ x, y, dx, dy, start, end }) => {
  // const offset = annotation.position
  if (!start) {
    start = [dx, dy]
  } else {
    start = [-end[0] + start[0], -end[1] + start[1]]
  }
  if (!end) {
    end = [0, 0]
  }

  let x1 = end[0],
    y1 = end[1]

  // let dx = start[0]
  // let dy = start[1]

  let size = 10
  let angleOffset = 16 / 180 * Math.PI
  let angle = Math.atan(start[1] / start[0])

  if (start[0] < 0) {
    angle += Math.PI
  }

  const data = [
    [x1, y1],
    [
      Math.cos(angle + angleOffset) * size + x1,
      Math.sin(angle + angleOffset) * size + y1
    ],
    [
      Math.cos(angle - angleOffset) * size + x1,
      Math.sin(angle - angleOffset) * size + y1
    ],
    [x1, y1]
  ]

  //TODO add in reverse
  // if (canvasContext.arrowReverse){
  //   data = [[x1, y1],
  //   [Math.cos(angle + angleOffset)*size, Math.sin(angle + angleOffset)*size],
  //   [Math.cos(angle - angleOffset)*size, Math.sin(angle - angleOffset)*size],
  //   [x1, y1]
  //   ]
  // } else {
  //   data = [[x1, y1],
  //   [Math.cos(angle + angleOffset)*size, Math.sin(angle + angleOffset)*size],
  //   [Math.cos(angle - angleOffset)*size, Math.sin(angle - angleOffset)*size],
  //   [x1, y1]
  //   ]
  // }

  return {
    components: [
      lineBuilder({
        data,
        className: "connector-end connector-arrow",
        classID: "connector-end"
      })
    ]
  }
}
