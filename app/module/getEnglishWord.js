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

printPetsData(1356,1411)
module.exports = printPetsData

// Name: except, Trans: prep.，&，conj.除了...之外，若不是，除非，vt.除，除外
// Name: excessive, Trans: adj.过多的，过分的，极度的
// Name: exchange, Trans: vt.，&，vi.交换，交流，交易，兑换，n.交换，交换物，汇兑，交易所
// Name: excite, Trans: vt.使激动，引起，刺激，激励
// Name: exciting, Trans: adj.令人兴奋的
// Name: exclaim, Trans: vi.呼喊，惊叫，大声叫
// Name: exclude, Trans: vt.把...排除在外，拒绝，[计算机]，排除
// Name: excuse, Trans: vt.原谅，免除，辩解，准许离开，同意赦免，n.借口，理由，低劣的样品，假条
// Name: execute, Trans: vt.将...处死，实施，执行，完成，[计算机]，执行
// Name: executive, Trans: adj.执行的，行政的，决策的，经营的，[计算机]，执行指令，n.执行者，主管，行政部门
// Name: exercise, Trans: n.锻炼，训练，练习，作业，运动，vi.练习，锻炼，vt.运用
// Name: exhaust, Trans: vt.使筋疲力尽，用尽，排空，vi.耗尽，n.排气，排气装置
// Name: exhibit, Trans: vt.显示(感情或品质)，陈列，展览，展现，提出证据，vi.展览，n.展览品，展览，物证
// Name: exhibition, Trans: n.展览，陈列，展示，展览会
// Name: exist, Trans: vi.存在，生存，生活
// Name: existence, Trans: n.存在，实在，生存
// Name: exit, Trans: n.出口，退场，离去，vi.退出，死亡，vt.离开
// Name: expect, Trans: vt.预料，预期，等待，盼望
// Name: experience, Trans: n.经验，感受，经历，vt.经历，体验
// Name: experiment, Trans: n.实验，试验，尝试，vi.做实验，尝试
// Name: expert, Trans: n.专家，能手，adj.熟练的，内行的，vi.当专家
// Name: explain, Trans: vt.，&，vi.解释，说明，为...辩解
// Name: explanation, Trans: n.解释，说明，辩解
// Name: explode, Trans: vt.使爆炸，驳倒，vi.爆炸，爆发(感情)，激增，[计算机]，爆炸
// Name: explosion, Trans: n.爆炸，爆发，炸裂，激增
// Name: explosive, Trans: n.炸药，adj.爆炸(性)的
// Name: explore, Trans: v.探索，勘探，考察
// Name: expose, Trans: vt.使暴露，揭露，揭穿，使遭受(危险或不快)
// Name: export, Trans: vt.输出，出口，运走，n.出口，输出品，vi.传播，输出，adj.出口的
// Name: express, Trans: vt.表达，表示，挤压出，快递，n.快车，快递，专使，adj.急速的，明确的，直接的，adv.用快递，特意地
// Name: expression, Trans: n.词句，措辞，表达，表示，表现，表情
// Name: extend, Trans: vt.延长，延伸，伸展，扩大，扩充，扩展，致
// Name: extensive, Trans: adj.广阔的，广泛的
// Name: extent, Trans: n.广度，范围，程度，宽度，长度，大小，[律]，<英>扣押，<美>临时所有权令
// Name: external, Trans: adj.外部的，外面的，外用的，客观的，表面的，n.外部
// Name: extra, Trans: adj.额外的，ad.特别地，n.额外的事物，另外收费的
// Name: extraordinary, Trans: adj.非同寻常的，特别的，非凡的，特派的
// Name: extreme, Trans: adj.极度的，极端的，尽头的，严重的，末端的，n.极端，极限
// Name: eye, Trans: n.眼睛，眼力，鉴赏力，v.看，注视
// Name: eyesight, Trans: n.视力，目力

