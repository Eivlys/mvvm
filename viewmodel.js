// mock data
var mock = [
	{
		"name": "张三",
		"sex" : "male",
		"age" : "30"
	},
	{
		"name": "李四",
		"sex" : "male",
		"age" : "22"
	}
];

var res = [
	{
		"name": "张三",
		"sex" : "male",
		"age" : "30"
	},
	{
		"name": "李四",
		"sex" : "male",
		"age" : "22"
	},
	{
		"name": "王五",
		"sex" : "male",
		"age" : "28"
	}
];

// model
class model{
	constructor(option){
        this.scope = option.scope;
        this.obj = option.obj;
    }

	getData() {
		let obj = [],init = this.obj;
		for(let i in init){
			obj[i] = init[i];
		}
		return obj;
	}

	setData (obj,name) {
		let value = $('[data='+name+']').val();
		obj[name] = value;
		return obj;
	}

	observeDomData () {
		let that = this;
		let block = $('[scope='+that.scope+']'),obj=that.getData();
		let data = block.find('[data]');
		for(let i=0; i<data.length; i++){
			let n = data.eq(i).attr('data');
			obj[n] = data.eq(i).val();
		}	
		return obj;
	}
};

// viewmodel
let searchModel = new model({
	scope: "search",
	obj: []
});

let addModel = new model({
	scope: "edit",
	obj: []
});

let tableModel = new model({
	scope: "result",
	obj: mock
});

var viewmodel = {
	editHtml: function () {
		return `
		<form name="edit" scope="edit">
			<div class="input-block">
				<label>姓名</label>
				<input type="text" name="name" data="name">
			</div>
			<div class="input-block">
				<label>性别</label>
				<select name="sex" data="sex">
					<option value="">请选择</option>
					<option value="male">男</option>
					<option value="female">女</option>
				</select>
			</div>
			<div class="input-block">
				<label>年龄</label>
				<input type="text" name="age" data="age">
			</div>
			<div class="input-block">
				<button class="action-block" id="confirm">确定</button>
			</div>
		</form>
		`;
	},

	tableHtml: function (data) {
		return `
            ${ data.map((item,i) =>`
                   <tr>
						<td data="name">${item.name}</td>
						<td data="sex">${item.sex}</td>
						<td data="age">${item.age}</td>
						<td><a href="javascript:;" id="edit">修改</a>&nbsp;&nbsp;<a href="javascript:;" id="delete">删除</a></td>
					</tr>
            `).join('') }
	    `;

	},

	show: function () {
		let that = this;
		$("#dataEdit").html(that.editHtml());
	},

	add: function () {
		let that = this;
		$(document).on('click','#add',function () {
			that.show();
		});
	},

	edit: function (data) {
		
	},

	delete: function (data) {
		
	},

	search: function () {
		$(document).on('blur','.filter',function () {
			let sub = searchModel.observeDomData("search");
			console.log(sub);
		})
	},

	submit: function (data) {
		$(document).on('click','#confirm',function (ev) {
			ev.preventDefault();
			let data = addModel.observeDomData();
			console.info(data);
			// body...
		})
	},

	init: function () {
		let that = this;
		let items = that.tableHtml(mock);
		$("#table tbody").append(items);
	}
};

$(function () {
	viewmodel.init();
	viewmodel.add();
	viewmodel.search();
	viewmodel.submit();

})