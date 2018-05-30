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

// model





// viewmodel
var viewmodel = {
	editHtml: function () {
		return `
		<form name="edit">
			<div class="input-block">
				<label>姓名</label>
				<input type="text" name="name" value=''>
			</div>
			<div class="input-block">
				<label>性别</label>
				<select name="sex">
					<option>男</option>
					<option>女</option>
				</select>
			</div>
			<div class="input-block">
				<label>年龄</label>
				<input type="text" name="age" value=''>
			</div>
			<div class="input-block">
				<button class="action-block" id="confirm">确定</button>
			</div>
		</form>
		`;
	},

	tableHtml: function (data) {
		console.log(data);
		return `
            ${ data.map((item,i) =>`
                   <tr>
						<td>${item.name}</td>
						<td>${item.sex}</td>
						<td>${item.age}</td>
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

	search: function (data) {
		
	},

	submit: function (data) {
		// body...
	},

	init: function (data) {
		let that = this;
		let items = that.tableHtml(data);
		$("#table tbody").append(items);
	}
};

$(function () {
	let obj={};
	viewmodel.init(mock);
	viewmodel.add();
})