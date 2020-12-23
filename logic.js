'use strict';
const $ = id => { return document.getElementById(id); };

// カスタマイズON/OFF
const customArea = $('custamize-area');
$('customize').onclick = () => {
    customArea.style.display = customArea.style.display === "none" ? "" : "none";
}

// ルール取り込み
let rules;
const rulesArea = $('rules');
rulesArea.onkeyup = () => {
    rules = rulesArea.value.split('\n').filter(e => e);
}
rulesArea.onkeyup();

// ルール選定
function setRandomRule() {
    let rule = rules[Math.floor(Math.random()* rules.length)].split(':');
    $('rule-title').innerText = `-  ${rule[0].trim()}  -`;
    $('rule-desc').innerText = rule[1] ? rule[1].trim() : "";
}

// スロット処理
let slot;
const slotButton = $('slot');
function start () {
    slot = setInterval(setRandomRule, 50);
    slotButton.value = "STOP";
    slotButton.onclick = () => {
        clearInterval(slot);
        setRandomRule();
        slotButton.value = "START";
        slotButton.onclick = start;
    }
}
start();
