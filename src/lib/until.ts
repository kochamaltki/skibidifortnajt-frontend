const until = async (condition: Function) => {
	const poll = (resolve: Function)  => {
		if(condition()) resolve();
		else setTimeout(() => poll(resolve), 400);
	}

	return new Promise(poll);
}

export default until;
