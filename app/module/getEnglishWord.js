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

printPetsData(1679,1795)
module.exports = printPetsData

// Name: glorious, Trans: adj.光荣的，壮丽的，辉煌的
// Name: glory, Trans: n.光荣，荣誉，壮丽，赞颂，荣誉的事，vi.为...而骄傲自豪，interj.用于表示惊叹
// Name: glove, Trans: n.手套，vt.给...戴手套
// Name: glow, Trans: n.白热光，赤热，光辉，热情，vi.发白热光，发红光，红光焕发
// Name: glue, Trans: n.胶，胶水，粘性之物，vt.胶合，粘，紧附于...
// Name: go, Trans: vi.去，走，变为，进行，放，通往，消失，vt.走过，称重，[计算机]执行
// Name: goal, Trans: n.球门，得分，目的，终点
// Name: goat, Trans: n.山羊，好色之徒，替罪羔羊
// Name: God, Trans: n.神，神像，上帝，偶像，vt.像对神一样崇拜
// Name: gold, Trans: n.金，金子，金币，金黄色，金牌，钱财，adj.金制的，金色的
// Name: golden, Trans: adj.金(黄)色的，极好的
// Name: good, Trans: adj.好的，优良的，上等的，有本事的，n.善行，好处，[pl.]，商品
// Name: goods, Trans: n.货物，商品
// Name: goose, Trans: n.鹅，雌鹅，鹅肉，vt.推动
// Name: govern, Trans: vt.统治，治理，支配，管理，规定，vi.统治，执行
// Name: government, Trans: n.政府，政体，统治，治理，政治
// Name: governor, Trans: n.州长，主管人员，统治者，管理者，理事
// Name: graceful, Trans: adj.优美的，优雅的
// Name: grade, Trans: vt.，&，vi.给...分等级，记成绩，n.等级，年级，阶段
// Name: gradual, Trans: adj.逐渐的，渐进的
// Name: gradually, Trans: adv.逐渐地，逐步地
// Name: graduate, Trans: n.，毕业生，vi.，大学毕业，获学位，逐渐变得，vt.，毕业，(在表、计、尺上)刻，[分]，度，定等级，adj.，毕业的，获得学位的
// Name: grain, Trans: n.谷物，谷粒，颗粒，细粒，纹理，vt.用谷物喂养，形成颗粒
// Name: grammar, Trans: n.语法，语法书
// Name: grand, Trans: adj.宏伟的，重大的，豪华的，壮丽的，主要的，n.大钢琴
// Name: granddaughter, Trans: n.孙女，外孙女
// Name: grandfather, Trans: n.祖父，外祖父
// Name: grandmother, Trans: n.祖母，外祖母
// Name: grandson, Trans: n.孙子，外孙子
// Name: grant, Trans: n.授给物，补助金，同意，给予，财产转让，vt.授予，同意，承认
// Name: grape, Trans: n.葡萄，葡萄藤，[色彩]深紫色，[军事]葡萄弹
// Name: graph, Trans: n.(曲线)图，图表，vt.以(曲线)图表示
// Name: grasp, Trans: vt.抓紧，抓住，紧握，掌握，领会，n.抓，把握，抓紧，领会
// Name: grass, Trans: n.草，牧草，草地，vt.以牧草喂养，覆盖着草
// Name: grateful, Trans: adj.感激的，感谢的，令人愉快的
// Name: gratitude, Trans: adj.感激，感谢，感恩，n.感恩之心
// Name: great, Trans: adj.大的，伟大的，大量的，很好的，美好的，重要的，adv.(口语)好极了
// Name: greatly, Trans: adv.大大地，非常，很
// Name: greedy, Trans: adj.贪吃的，贪婪的
// Name: Greek, Trans: adj.希腊(人)的，n.希腊人，希腊语
// Name: green, Trans: adj.绿色的，长满绿草的，温和的，未成熟的，n.绿色，vt.，&，vi.变得绿
// Name: greet, Trans: vt.问候，招呼，反应，致敬，欢迎，映入眼帘
// Name: greeting, Trans: n.问候，招呼，致敬
// Name: grey, Trans: adj.灰色的，n.灰色，vi.变成灰色，=gray
// Name: grip, Trans: vt.握紧，抓牢，吸引，n.紧握，了解，手柄，手提包
// Name: groan, Trans: vi.哼，呻吟，n.呻吟
// Name: grocer, Trans: n.食品商，杂货商
// Name: gross, Trans: adj.总的，粗鲁的，严重的，过胖的，n.总量，vt.总共赚得
// Name: ground, Trans: n.土地，战场，场地，根据，背景，vt.放在地上，使...搁浅，打基础grind的过去式和过去分词
// Name: group, Trans: n.小组，群，团，团体，vt.，&，vi.聚合，成群，聚集，[计算机]，成组
// Name: grow, Trans: vt.，&，vi.生长，变得，变成，增长，种植，逐渐开始
// Name: growth, Trans: n.增长，增长量，生长，生长物
// Name: guarantee, Trans: n.保证(书)，担保(书)，担保人，担保物，抵押品，vt.保证，担保
// Name: guard, Trans: vt.，&，vi.守卫，看守，保卫，警惕，n.卫兵，守卫者，警戒，护卫队保护
// Name: guess, Trans: vt.，&vi.，&n.猜测，推测，猜想
// Name: guest, Trans: n.客人，宾客，旅客，客串演员，特邀来宾，vt.款待，vi.作客
// Name: guidance, Trans: n.引导，指导，领导，导航系统
// Name: guide, Trans: n.导游者，领路者，指南，路标，vt.给...导游，领路，指导，vi.作导游
// Name: guilty, Trans: adj.内疚的，有罪的
// Name: gulf, Trans: n.海湾
// Name: gum, Trans: n.口香糖，树胶，橡皮(糖)，齿龈，粘性物质，牙床，vt.搞砸，用牙床嚼，以树胶粘合，vi.形成胶质，发粘
// Name: gun, Trans: n.枪，炮，手枪
// Name: gymnasium, Trans: n.，体育馆，健身房，n.，(德国等培养学生升入大学的)大学预科高级中学，(复数)，gymnasia，或，gymnasiums
// Name: habit, Trans: n.习惯，习性，隐，长袍，vt.穿衣
// Name: hair, Trans: n.头发，毛发，毛，毛织物，极少量，极短距离
// Name: half, Trans: n.半，一半，adj.一半的，不完全的，adv.一半地
// Name: hall, Trans: n.门厅，过道，会堂，礼堂
// Name: halt, Trans: vi.停止，立定，跛行，犹豫，畏缩，vt.使...停止，n.停住，adj.瘸的
// Name: hammer, Trans: n.锤，榔头，vt.锤击，锤打，严厉批评，vi.锤击，反复敲打
// Name: hand, Trans: n.手，人手，指针，掌握，协助，vt.帮助，给，adv.手动地，人工地
// Name: handful, Trans: n.一把，少数，一小撮，棘手之事，【非正式用语】，难以控制的人或费劲的事
// Name: handkerchief, Trans: n.手帕，方头巾，围巾
// Name: handle, Trans: n.柄，把手，vt.拿，触，买卖，处理，操作，vi.驾驭
// Name: handsome, Trans: adj.英俊的，慷慨大方的，可观的，灵巧的，相当大的
// Name: handwriting, Trans: n.笔迹，手迹，书法
// Name: handy, Trans: adj.手边的，方便的，便于使用的
// Name: hang, Trans: vt.挂，悬，吊死，悬挂方式，vt.(hanged，hanged)悬挂，绞死vi.(使)低垂，悬浮(在空中)，逗留
// Name: happen, Trans: vi.发生，碰巧，恰好，出现，偶然遇到
// Name: happiness, Trans: n.幸福，幸运，快乐，适当
// Name: happy, Trans: adj.快乐的，幸福的，乐于做某事
// Name: harbour, Trans: n.海港，港口，vt.庇护，停泊
// Name: hard, Trans: adj.硬的，困难的，艰难的，苛刻的，adv.努力地，猛烈地，坚定地
// Name: harden, Trans: vt.使变硬，(使)坚强，vi.变硬
// Name: hardly, Trans: ad.几乎不，简直不
// Name: hardship, Trans: n.艰难，困苦
// Name: hardware, Trans: n.五金器具，(计算机)硬件
// Name: harm, Trans: n.伤害，损害，vt.伤害，损害
// Name: harmony, Trans: n.调合，协调，和谐，和弦，和睦
// Name: harvest, Trans: n.收获(期)，成果，收获物，收成，vt.，&，vi.收割，收获
// Name: haste, Trans: n.急速，急忙，草率，v.匆忙，赶快，vi.赶紧，赶快
// Name: hat, Trans: n.帽子(一般指有边的)，职位，vt.给...戴帽子，vi.提供帽子