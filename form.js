class Form {
	constructor() {
		this.form = document.createElement('form');
		this.submit = this.form.addEventListener('submit', this.submitHandler);
	}

	addButton() {
		const button = document.createElement('button');
		button.type = 'submit'
		button.textContent = 'Press me';
		this.form.append(button)
	}

	addInput(element) {
		this.form.append(element.input);
	}

	
	setSubmitCallback(func) {
		this.submitCallback = func;
		console.log(this.submitCallback)
	}
	
	setValidationErrorCallback(func) {
		this.validationError = func;
	}

	render(wrapper) {
		this.addButton();
		wrapper.append(this.form);
	}
	
	submitHandler = event => {
		event.preventDefault();
		let inputs = event.target.elements;
		this.submitCallback((this.getdata(inputs)));
		
	}

	getdata = (collection) => {
		 const storage = {};

		for (let {name, value} of collection) {
			if (!name || !value) {
				continue;
			}

			storage[name] = value;
		}

		return storage;
	}
}
