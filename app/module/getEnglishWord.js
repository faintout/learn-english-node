const Result = require('./result')
const petsData = require('../assets/PETS3-2023.json');

petsData.sort((a, b) => a.name.localeCompare(b.name));

function printPetsData(startIndex, endIndex) {
  try {
    // 使用slice方法获取指定范围的数据
    const selectedPets = petsData.slice(startIndex - 1, endIndex);
    selectedPets.forEach((pet, index) => {
      console.log(`Name: ${pet.name}, Trans: ${pet.trans}`);
    });
    return new Result(selectedPets)
  } catch (e) {
    return new Result(null, 500, `获取数据失败：${e.message}`)
  }

}

printPetsData(1160,1210)
module.exports = printPetsData

// Name: draft, Trans: n.草稿，草图，汇票，徵兵，vt.起草，征兵，选秀，adj.酝酿中的
// Name: drag, Trans: vt.拖，拉，拖曳，拖累，拖拉(动)，vi.拖拉(动)，缓慢地行走，n.用来拖拉的东西，拖，拖累
// Name: dramatic, Trans: adj.引人注目的，戏剧的，给人深刻印象的，n.(pl.)戏剧作品，戏曲
// Name: draw, Trans: vt.(drew，drawn)，拉，拖，挨近，提取，画，绘制，划，拨出，n.平局抽签，拉，拽，吸引人的事物
// Name: drawer, Trans: n.抽屉
// Name: drawing, Trans: n.图画，素描，绘图，绘图技巧
// Name: dream, Trans: n.梦，梦想，vt.，&，vi.做梦，想象
// Name: dress, Trans: n.女服，童装，服装，vt.，&，vi.穿著，adj.正式的(衣服)
// Name: drift, Trans: vi.漂流，漂泊，吹积，n.漂流，漂移，漂流物，观望，吹积物，趋势，vt.使漂流，把...吹积
// Name: drink, Trans: vt.，&，vi.饮，喝，喝酒，n.饮料
// Name: drip, Trans: vi.滴下，漏水，n.水滴，滴，点滴，乏味的人
// Name: drive, Trans: vt.，&，vi.驾驶，驱，驱使，驾进力，打入，n.驾车，快车道，推进力驱使，路，街，[计算机]，驱动器
// Name: driver, Trans: n.驾驶员，司机
// Name: drop, Trans: vt.使落下，降低，减少，vi.落下，减少，减弱，n.滴，微量，落下
// Name: drown, Trans: vi.淹死，溺死，vt.淹死，沉浸于
// Name: drug, Trans: n.药，药物，药材，毒品，vt.下药，使...服麻醉药，vi.吸毒
// Name: drum, Trans: n.鼓，鼓声，鼓状物，圆桶，冰丘，vi.击鼓，作鼓声，引起兴趣，vt.召集入伍，逐出，(经过努力)推动...，连续击打
// Name: dry, Trans: adj.干的，干燥的，干旱的，不行于色的，枯燥无味的，无酒的，口渴的，vt.把...弄干，vi.(使)变干
// Name: duck, Trans: n.，鸭，雌鸭，鸭肉，板球零分，vt.，把…按入水中，低头弯身(以免被打中或看见)，躲避，vi.，迅速行进，飞快行走(以免被看见)，推委责任
// Name: due, Trans: adj.预期的，应给的，到期的，应有的，预定的，n.应得物
// Name: dull, Trans: adj.枯燥的，不鲜明的，呆滞的，迟钝的，无趣的，钝的，暗的，vt.使变钝，vi.变钝
// Name: dumb, Trans: adj.哑的，无言的，沉默的，愚蠢的vt.使人沉默
// Name: during, Trans: prep.在...期间
// Name: dusk, Trans: n.薄暮，黄昏，幽暗，vi.(天)变黑，变暗，vt.把…变黑变暗，adj.颜色暗沉的，昏暗的
// Name: dust, Trans: n.尘土，灰尘，无价值之物，屈辱状态，vt.拂去灰尘，撒上粉状物体，大胜，vi.擦拭灰尘
// Name: duty, Trans: n.职责，责任，义务，税，adj.值班的，作为一种义务的
// Name: dye, Trans: vt.染，vi.染色，n.染料，染色

// Name: each, Trans: pron.各，各自，adj.每个，每，每一，adv.每个，int.每个，个人，个自
// Name: eager, Trans: adj.渴望的，热切的
// Name: eagle, Trans: n.鹰，vt.(高尔夫)鹰击
// Name: ear, Trans: n.耳朵，听力，听觉，倾听，麦穗，vi.长出麦穗
// Name: early, Trans: adv.早，adj.早的，早期的
// Name: earn, Trans: vt.赚得，挣得，获得，赚得，赢得，生利
// Name: earnest, Trans: adj.认真的，诚恳的，重要的，n.真诚，重要的东西，定金，保证
// Name: earth, Trans: n.地球，陆地，地面，泥土，世间，大地，地球人，vt.赶入洞中，提取土壤，vi.躲入洞穴
// Name: earthquake, Trans: n.地震，大震荡
// Name: ease, Trans: n.容易，舒适，安乐，n.安逸，悠闲，vt.缓和，使...安乐，使...安心，v.减轻，放松