class PhoneInput {
  constructor() {
		this.input = document.createElement('input');
		this.input.type = 'phone';
	}

	setName(name) {
		this.input.name = name;
	}
}