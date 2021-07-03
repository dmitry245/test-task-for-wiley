export const required = (value) => {
    if(value) return undefined;
    return "This field is required";
};

export const minlengthCreater = (length) => {
    return (value) => {
        if(value && value.length < length) return `Min length ${length} symbols`
    };
};