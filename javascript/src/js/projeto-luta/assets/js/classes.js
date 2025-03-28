// Knight or Mage
// Monster or BigBoss

class Character {

    _life = 1;
    maxLife = 1;
    attack= 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.maxLife = this.life;
        this.attack = 10;
        this.defense = 8;
    }
}

class Mage extends Character {
    constructor(name){
        super(name);
        this.life = 80;
        this.maxLife = this.life;
        this.attack = 14;
        this.defense = 3
    }
}

class Monster extends Character {
    constructor() {
        super('Monster');
        this.life = 40;
        this.maxLife = this.life;
        this.attack = 4;
        this.defense = 3;
    }
}

class BigBoss extends Character {
    constructor() {
        super('BigBoss');
        this.life = 120;
        this.maxLife = this.life;
        this.attack = 16;
        this.defense = 6;
    }
}


class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El,logObject) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;
    }

    start() {
        this.update();
        this.fighter1El.querySelector('.attack').addEventListener('click', () => this.attack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attack').addEventListener('click', () => this.attack(this.fighter2, this.fighter1));
    }

    update() {
        // Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let percent1 = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${percent1}%`;
        this.fighter1El.querySelector('.bar').style.backgroundColor = percent1 > 60 ? 'green' : 'red';

        // Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let percent2 = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${percent2}%`;
        this.fighter2El.querySelector('.bar').style.backgroundColor = percent2 > 60 ? 'green' : 'red';
    }

    attack(attacking, attacked) {
        if (attacking.life <= 0 || attacked.life <= 0) {
            return;
        }

        let damageMultiplier = parseFloat((Math.random() * 2).toFixed(2));
        let defenseMultiplier = parseFloat((Math.random() * 2).toFixed(2));

        let actualDamage = (attacking.attack * damageMultiplier) - (attacked.defense * defenseMultiplier);
        let actualDefense = (attacked.defense * defenseMultiplier) - (attacking.attack * damageMultiplier);

        if(actualDamage > actualDefense) {
            attacked.life -= actualDamage;
            this.log.addMessage(`${attacking.name} causou ${actualDamage.toFixed(2)} de dano em ${attacked.name}`);
        } else {
            this.log.addMessage(`${attacked.name} defendeu o ataque de ${attacking.name}`);
        }

        if (attacked.life <= 0) {
            attacked.life = 0;
            this.log.addMessage(`${attacked.name} foi derrotado!`);
        }

        this.update();
    }
}

class Log {
    list = [];
    constructor(listEl) {
        this.listEl = listEl;
    }
    addMessage(message) {
        this.list.push(message);
        this.render();
    }
    render(){
        this.listEl.innerHTML = '';
        for(let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
   
    
}

