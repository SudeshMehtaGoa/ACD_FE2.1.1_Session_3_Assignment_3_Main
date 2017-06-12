/* base class */
class Animal {
    private _name : string;
    private _speed : number;
    private _sound : string;

    constructor(name:string, speed:number, sound:string)
    {
        this._name=name;
        this._speed=speed;
        this._sound=sound;
    }
    public animalInfo():string
    {
        return(`The speed of ${this._name} is ${this._speed} km/hr and sound is ${this._sound}`);
    }
    
}

/* first extended class */
class cat extends Animal {
    constructor(speed:number)
    {
        super("cat",speed,"meaw-meaw");
    }
}

/* second extended class */
class tiger extends Animal {
    constructor(speed:number)
    {
        super("tiger",speed,"roar-roar");
    }
}


/* first animal */
var animal1 : Animal = new cat(10);

/* second animal */
var animal2 : Animal = new tiger(40);

/* Information of animals */
function animalInfo()
{
    (<HTMLInputElement>document.getElementById("lblMessage1")).innerHTML = animal1.animalInfo();
    (<HTMLInputElement>document.getElementById("lblMessage2")).innerHTML = animal2.animalInfo();
}  
