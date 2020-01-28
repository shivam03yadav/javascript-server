const validateEmail = (user: string): boolean => {
    const validate: RegExp = /([a-zA-Z0-9_\-\.]+)@successive[.]tech$/gmi;
    if (user.match(validate)) {
        return true;
    }

    else {
        return false;
    }

};


export { validateEmail };