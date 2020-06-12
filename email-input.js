class EmailInput {
	constructor() {
		this.input = document.createElement('input');
		this.input.type = 'email';
	}

	setName(name) {
		this.input.name = name;
	}

	setRequired(value) {
		if (value) {
			this.input.required = value;
		}
	}
}