class User {
	// コンストラクタは、インスタンスを作成するときに呼ばれる
	constructor (firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	sayName() {
		console.log(this.firstName + ' ' + this.lastName);
	}
}

// Userインスタンスを作成
let user = new User('Taro', 'Yamada');
user.sayName();
