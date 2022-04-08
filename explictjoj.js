
const UpperCaseFormatter = {
    format: function(msg) {
        return msg.toUpperCase();
    }
};

const Foo = {
    formatter: UpperCaseFormatter,
    saySomething: function print(msg) {
        console.log(this.formatter !== null 
        ? this.formatter.format(msg) : msg);
    }
}

Foo.saySomething('hello');