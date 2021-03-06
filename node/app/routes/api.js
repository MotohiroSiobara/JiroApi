var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/list/shop', function(req, res, next) {
  res.json({
    kind: "list#shop",
    shops: [
      {id: 0, name: "三田本店"},
      {id: 1, name: "目黒店"},
      {id: 2, name: "仙川店"},
      {id: 3, name: "歌舞伎町店"},
      {id: 4, name: "品川店"},
      {id: 5, name: "新宿小滝橋通り店"},
      {id: 6, name: "環七新代田店"},
      {id: 7, name: "八王子野猿街道店2"},
      {id: 8, name: "池袋東口店"},
      {id: 9, name: "新小金井街道店"},
      {id: 10, name: "亀戸店"},
      {id: 11, name: "京急川崎店"},
      {id: 12, name: "府中店"},
      {id: 13, name: "松戸駅前店"},
      {id: 14, name: "めじろ台法政大学前店"},
      {id: 15, name: "荻窪店"},
      {id: 16, name: "上野毛店"},
      {id: 17, name: "京成大久保店"},
      {id: 18, name: "環七一之江店"},
      {id: 19, name: "相模大野店"},
      {id: 20, name: "横浜関内店"},
      {id: 21, name: "神田神保町店"},
      {id: 22, name: "小岩店"},
      {id: 23, name: "ひばりヶ丘駅前店"},
      {id: 24, name: "桜台駅前店"},
      {id: 25, name: "栃木街道店"},
      {id: 26, name: "立川店"},
      {id: 27, name: "大宮店　-閉店-"},
      {id: 28, name: "千住大橋駅前店"},
      {id: 29, name: "茨城守谷店"},
      {id: 30, name: "湘南藤沢店"},
      {id: 31, name: "西台駅前店"},
      {id: 32, name: "中山駅前店"},
      {id: 33, name: "新橋店"},
      {id: 34, name: "仙台店"},
      {id: 35, name: "赤羽店　-閉店-"},
      {id: 36, name: "札幌店"},
      {id: 37, name: "会津若松駅前店"},
      {id: 38, name: "JR西口蒲田店"},
      {id: 39, name: "新潟店"},
      {id: 40, name: "川越店"},
      {id: 41, name: "京都店"}
    ]
  });
});

module.exports = router;
