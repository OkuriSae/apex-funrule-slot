'use strict';
const title = document.getElementById('rule-title');
const desc = document.getElementById('rule-desc');
const slotButton = document.getElementById('slot');
const customArea = document.getElementById('custamize-area');
const customButton = document.getElementById('customize');
const errorText = document.getElementById('error');
const updateButton = document.getElementById('update');
const rulesArea = document.getElementById('rules');

customButton.onclick = () => {
    customArea.style.display = customArea.style.display === "none" ? "" : "none";
}

let rules;
updateButton.onclick = () => {
    try{
        errorText.innerText = "";
        rules = JSON.parse(rulesArea.value);
    } catch (e) {
        errorText.innerText = e.message;
    }
}
updateButton.onclick();

let slot;

function setRandomRule() {
    let rule = rules[Math.floor(Math.random()* rules.length)];
    title.innerText = `-  ${rule.title}  -`;
    desc.innerText = rule.desc;
}

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
