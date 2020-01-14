const classname = (...classes: Array<string | undefined>) => {
    return classes.filter(Boolean).join(' ');
};

export default classname;