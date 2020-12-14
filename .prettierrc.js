module.exports = {
	printWidth: 150, // 每行代码长度（默认80）
	tabWidth: 4, // 每个tab相当于多少个空格（默认2）
	useTabs: true, // 是否使用tab进行缩进（默认false）
	singleQuote: true, // 使用单引号（默认false）
	semi: true, // 声明结尾使用分号(默认true)
	trailingComma: 'all', // 多行使用拖尾逗号（默认none）
	bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
	jsxBracketSameLine: false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
	arrowParens: 'avoid', // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
	endOfLine: 'lf', //换行符设置为lf，因为windows下用的是CRLF而mac和linux用的是LF
};
