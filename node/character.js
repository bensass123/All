



function Character(name, profession, gender, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
}

Character.prototype.printStats = function() {
	for (i in this){
		console.log(this[i]);
	}
}

Character.prototype.isAlive = function() {
	if (this.hp > 0){
		return true;
	}
	else return false;
}

Character.prototype.isAlive = function() {

}

var c = new Character('john', 'busboy', 'female', 20, 50, 100);

c.printStats();