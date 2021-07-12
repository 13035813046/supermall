var Mock = require('mockjs')
var Random = Mock.Random
const Data = Mock.mock({
  "data": {
    "swipe|5": [Random.image('360*137', '#7DD088', 'MockImg')],
    "iconTabbar|5": [
      {
        "iconTabbarImg": Random.image('44*44', '#7DD088', 'MockImg'),
        "name": Random.ctitle(4)
      }
    ],
    "productDisplay|2": [
      {
        "name": Random.ctitle(4),
        "productItem|6":[{
          "productItemImg": Random.image('112*112', '#7DD088', 'MockImg'),
          "name": Random.ctitle(10),
          "price": Random.float(0,500,3,2),
          "count": Random.integer(0,1000)
        }
          
        ]
      }
    ]
  }
})
console.log(JSON.stringify(Data.data));

Mock.mock(/test/,Data)
