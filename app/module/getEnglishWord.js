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

printPetsData(1790,2000)
module.exports = printPetsData

// Name: hate, Trans: vt.恨，憎恨，不喜欢，不愿，vi.表示憎恨，n.憎恨，厌恶，厌恶的人或事
// Name: hatred, Trans: n.憎恶，憎恨，仇恨
// Name: have, Trans: v.aux.已经，曾经，vt.有，吃，从事，得到，雇用，享有，允许
// Name: hay, Trans: n.干草
// Name: hazard, Trans: n.危险，危害，公害，冒险，vt.冒险，赌运气
// Name: he, Trans: pron.(主格)他
// Name: head, Trans: n.头，头脑，领袖，冷静，硬币，正面，顶端，上端，高潮，vt.，&，vi.率领，为首，朝向，前进，超过，起源，adj.首要的，前面的
// Name: headache, Trans: n.头痛，头痛的事
// Name: headmaster, Trans: n.(中小学的)校长
// Name: headquarters, Trans: n.司令部，指挥部，总部
// Name: health, Trans: n.健康，健康状况，卫生，保健
// Name: healthy, Trans: adj.健康的，有益健康的
// Name: heap, Trans: n.(一)堆，大量，许多，累积，vt.使成堆，装满，[计算机]，堆
// Name: hear, Trans: vt.，&，vi.听见，审讯，听说，听到，得知，倾听，听证
// Name: heart, Trans: n.心，内心，中心，要点，红桃，勇气
// Name: heat, Trans: n.热，炎热，热度，高潮，激动，激烈程度，辛辣，警察，vi.变热，变暖，因热变质，vt.使...变热
// Name: heaven, Trans: n.天堂，天，天空
// Name: heavy, Trans: adj.重的，大(量)的，充满的，激烈的，难消化的，费力的，沉闷的adv.密集地，n.悲剧角色
// Name: hedge, Trans: n.，篱笆，树篱，障碍物，防止财产损失的方法，vt.，包围，限制vi.，种树篱，拐弯抹角，保护自己不受财产损失adj.，树篱的，篱笆边的
// Name: heel, Trans: n.脚后跟，踵，后跟，v.倾侧
// Name: height, Trans: n.高，高度，高处，身高，最高峰，极点
// Name: helicopter, Trans: n.直升机
// Name: hello, Trans: int.喂，n.(见面打招呼或打电话用语)喂，哈罗
// Name: help, Trans: vt.，&，vi.帮助，援助，改善，n.帮手，帮助，援助
// Name: helpful, Trans: adj.给予帮助的，有用的，有益的
// Name: hen, Trans: n.母鸡，雌禽
// Name: hence, Trans: ad.因此，从此，所以，今后
// Name: her, Trans: pron.(宾格)她，她的，adj.她的，abbr.=heraldry
// Name: here, Trans: adv.这里，向这里，adj.表示强调，n.这里
// Name: hero, Trans: n.男主角，英雄，勇士
// Name: heroic, Trans: adj.英雄的，英勇的，巨大的
// Name: heroine, Trans: n.女主角，女英雄
// Name: hers, Trans: pron.她的(所有物)
// Name: herself, Trans: pron.她自己，她亲自
// Name: hesitate, Trans: vi.犹豫，踌躇，含糊，停顿，口吃，迟疑，vt.用犹疑的态度表示
// Name: hide, Trans: vt.，&，vi.把...藏起来，隐瞒，遮避，鞭打，n.兽皮，生活富足度
// Name: high, Trans: adj.高的，高级的，轻微变质的，高尚的，严重的，强的，adv.高，好，n.高地，天堂，高气压，高度，兴奋
// Name: highly, Trans: adv.高度地，很，非常
// Name: highway, Trans: n.公路，大路，(水陆空)直接航线或路线
// Name: hill, Trans: n.小山，小堆，斜坡，山岗，丘陵，vt.堆起，培土
// Name: hillside, Trans: n.(小山)山腰，山坡
// Name: him, Trans: pron.(宾格)他
// Name: himself, Trans: pron.他自己，他亲自
// Name: hint, Trans: n.暗示，提示，示意，建议，小部分，vt.，&，vi.暗示，示意
// Name: hire, Trans: vt.租借，雇请，出租，n.租用，雇用，租用
// Name: his, Trans: pron.他的，他的东西
// Name: history, Trans: n.历史，个人经历
// Name: hit, Trans: vt.，打(击)，碰撞，偶然发现，要求，符合，vi.，打(击)，袭击，达到n.，打(击)，冲撞，讽刺，成功.一次毒品的剂量，点击量
// Name: hobby, Trans: n.业余爱好，癖好
// Name: hold, Trans: vt.拿住，掌握，拥有，持有，举行，n.把握，控制，支撑点，延误，n.船舱
// Name: hole, Trans: n.洞，孔眼，裂开处，穴，vt.，&，vi.挖洞，掘坑，进洞
// Name: holiday, Trans: n.假日，节日，假期，vi.度假
// Name: hollow, Trans: adj.，空的，空洞的，虚伪的，空腹的，vt.，形成空洞，挖空，vi.，形成空洞，adv.，有闷哑声，完全地，n.，洞，窟窿，山谷
// Name: holy, Trans: adj.神圣的，圣洁的，令人敬仰的
// Name: home, Trans: n.家，家乡，住所，国内的，养老院，adj.家庭的，家(乡)的，adv.回家，在家，正确的方向，vt.，提供住处，vi.，回家，移向
// Name: honest, Trans: adj.诚实的，可敬的，正直的，adv.老实说
// Name: honour, Trans: n.光荣，尊敬，敬意，荣誉，荣幸，头衔，vt.尊敬，信守承诺，方形舞中鞠躬致敬
// Name: honourable, Trans: adj.诚实的，光荣的，荣誉的，可敬的，体面的，=honorable(美)
// Name: hook, Trans: n.钩，挂钩，钩子，钩拳，vt.，&，vi.钩住
// Name: hope, Trans: n.，&vt.，&vi.希望，abbr.=Health，Opportunity，for，People，Everywhere世界健康基金会
// Name: hopeful, Trans: adj.有希望的
// Name: hopeless, Trans: adj.没有希望的，绝望的，无可救药的
// Name: horn, Trans: n.号角，警报器，角，动物角，喇叭，触角，角状物，力量源泉
// Name: horror, Trans: n.恐怖，战栗，憎恶，厌恶，adj.恐怖的，令人毛骨悚然的
// Name: horsepower, Trans: n.马力(功率单位)
// Name: hospital, Trans: n.医院
// Name: host, Trans: n.主人，东道主，军队，大量，主人，主持人，主机，vt.主持，做东vi.聚集
// Name: hostile, Trans: adj.敌方的，不友善的，怀敌意的
// Name: hot, Trans: adj.热的，热情的，刺激的，辣的，性感的，adv.激动地，快速地，n.最高温度，滚烫的东西
// Name: hotel, Trans: n.旅馆，宾馆，酒店，饭店
// Name: hour, Trans: n.小时，时间，时刻，钟点
// Name: house, Trans: n.房屋，住宅，商号，全家人，议院，vt.提供住，安置，收容，vi.居住，躲避
// Name: household, Trans: n.家庭，户，家务，adj.家庭的，家喻户晓的
// Name: housewife, Trans: n.家庭主妇，针线盒
// Name: how, Trans: adv.如何，怎么，怎样，多少，conj.如何，怎样，以...方式，n.方式
// Name: however, Trans: adv.然而，不管怎样conj.然而，可是，不过
// Name: human, Trans: adj.人的，人类的，n.人
// Name: humble, Trans: adj.谦逊的，地位低下的，卑下的，粗陋的，vt.使...卑下，贬低
// Name: humid, Trans: adj.湿的，湿气重的，潮湿的
// Name: humorous, Trans: adj.富于幽默的，诙谐的
// Name: hundred, Trans: num.百，百个，百位，n.许多
// Name: hunger, Trans: n.饿，饥饿，渴望，v.饿，渴望，使...饥饿
// Name: hungry, Trans: adj.饥饿的，渴望的
// Name: hunt, Trans: n.打猎，狩猎，搜寻，追捕，vt.追猎，狩猎，打猎，搜索
// Name: hurry, Trans: vi.赶紧，快速移动，vt.，，促，加快，迅速处理，n.骚乱，匆忙，急需
// Name: hurt, Trans: vt.使受伤，使痛心，伤害，(使)疼痛，损害，vi.受疼痛，破坏，n.打击，创伤
// Name: husband, Trans: n.丈夫，vt.节俭
// Name: hydrogen, Trans: n.氢
// Name: I, Trans: pron.(主格)我
// Name: ice, Trans: n.冰，冰块，矜持，vt.冰镇，冰冻，结冰
// Name: ice-cream, Trans: n.冰淇淋
// Name: idea, Trans: n.想法，思想，意见，观念
// Name: ideal, Trans: adj.理想的，观念的，完美的，高尚的，n.理想，典范，目标
// Name: identify, Trans: vt.认出，识别，鉴定，vi.认同，感同身受
// Name: idle, Trans: adj.空闲的，懒散的，无目的的，无聊的，懒惰的，闲散的，无根据的，i.e.(=that，is)那就是，即
// Name: if, Trans: conj.假如，如果，是否，即使，n.条件，设想
// Name: ignore, Trans: vt.不顾，不理，忽视
// Name: ill, Trans: adj.有病的，坏的，引起痛苦的，敌意的，adv.坏，恶劣地，勉强地，n.邪恶，不幸，祸害，坏话
// Name: illegal, Trans: adj.不合法的，非法的，n.非法移民
// Name: illness, Trans: n.病，疾病
// Name: image, Trans: n.像，形象，映象，图像，影像，肖像，想像，vt.想像，描绘，反映
// Name: imaginary, Trans: adj.想象中的，假想的，虚构的
// Name: imagination, Trans: n.想象，想象力，空想
// Name: imagine, Trans: vt.想象，设想，料想，幻想，猜测，vi.想像起来，认为
// Name: imitate, Trans: vt.模仿，仿效，仿制
// Name: immediate, Trans: adj.立即的，直接的，即刻的，最接近的
// Name: immense, Trans: adj.巨大的，广大的，非常好的，极好的
// Name: immigrant, Trans: n.移民，侨民，adj.移民的
// Name: impact, Trans: n.影响(力)，作用，冲击(力)，冲突，vt.挤入，压紧，撞击，对...发生影响
// Name: impatient, Trans: adj.不耐烦的，急躁的
// Name: implication, Trans: n.含义，暗示，暗指
// Name: imply, Trans: vt.暗示，意指
// Name: import, Trans: vt.，&，vi.，&，n.输入，进口
// Name: importance, Trans: n.重要，重要性
// Name: important, Trans: adj.重要的，影响很大的，有势力的
// Name: impossible, Trans: adj.不可能的，办不到的
// Name: impress, Trans: vt.给...深刻印象，影响，印刻，传送，vi.给人印象，n.印象，特徵印记
// Name: impression, Trans: n.印，印象，印记，效果
// Name: impressive, Trans: adj.给人印象深刻的
// Name: improve, Trans: vt.使更好，改进，利用，(提高)价值，vi.改善，改进
// Name: improvement, Trans: n.改进，改善，改进处
// Name: in, Trans: prep.在...里，在，穿着，(表示状态或状况)，参与，在...方面，adv.进，入
// Name: inch, Trans: n.英寸，少量，v.慢慢移动
// Name: incident, Trans: n.发生的事，事件，(常指)军事冲突，插曲，事变，adj.难免的，附带的，(物理)入射的
// Name: include, Trans: vt.包括，包含
// Name: income, Trans: n.收入，所得，收益，进款
// Name: increase, Trans: vt.，&，vi.，&，n.增加，增强，提高
// Name: indeed, Trans: adv.真正地，确实，的确，事实上
// Name: independence, Trans: n.独立，自主，自立
// Name: independent, Trans: adj.独立的，自主的，私立的，无偏见的，n.独立派人士，无党派者
// Name: India, Trans: n.印度
// Name: Indian, Trans: adj.印度的，印度人的，印第安人的，n.印度人，印第安人
// Name: indicate, Trans: vt.标示，表示，指明，表明，v.显示，象征，指示
// Name: indication, Trans: n.指示，表示，象征，表明
// Name: indirect, Trans: adj.间接的，不坦率的，迂回的，次要的，欺骗的
// Name: individual, Trans: adj.个别的，独特的，n.个人，个体
// Name: indoors, Trans: adv.在室内，在屋里
// Name: industrial, Trans: adj.工业的，产业的，n.工业公司
// Name: industry, Trans: n.工业，产业，勤劳
// Name: inevitable, Trans: adj.不可避免的，必然(发生)的
// Name: infant, Trans: n.婴儿，幼儿，adj.婴儿的，幼稚的，初期的
// Name: infect, Trans: vt.传染，感染
// Name: infer, Trans: vt.推论，推断，猜想，暗示，vi.推论
// Name: inferior, Trans: adj.下等的，劣等的，次等的，较低的，不如的
// Name: influence, Trans: n.影响，影响力，势力，权势，有影响的人(或事物)，vt.影响，感化
// Name: inform, Trans: vt.通知，向...报告，告诉，告发
// Name: information, Trans: n.消息，信息，通知，情报，新闻，资料，询问
// Name: inhabitant, Trans: n.居民，住户
// Name: inherit, Trans: vt.继承(传统等)，遗传，vi.继承
// Name: injection, Trans: n.注射，注入，注射物，数学函数，充满
// Name: injure, Trans: vt.伤害，损害，损伤，使...受冤屈
// Name: ink, Trans: n.墨水，油墨
// Name: inn, Trans: n.客栈，小旅店，小酒店
// Name: inner, Trans: adj.内部的，内心的，里面的，n.里面
// Name: innocent, Trans: adj.清白的，幼稚的，无罪的，不懂事的，无知的，无辜的