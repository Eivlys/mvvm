export default class model{
    // constructor(option){
    //     this.formName = option.formName;
    //     this.defaultValue = option.defaultValue?option.defaultValue:{};
    //     this.action = option.action;
    //     this.showErr = (typeof option.showErr == "function")?option.showErr:(msg)=>alert(msg);
    //     this.showDes = option.showDes;
    //     this.validate = option.validate;
    //     this.callback = option.callback;
    //     this.obj = {};
    //     this.init();
    // }
    // getData() { //获取表单数据
    //     var sendData = {};
    //     for(var i in this.obj){
    //         if(i !== "$observer" && i !== "$observeProps"){
    //             sendData[i] = this.obj[i];
    //         }
    //     }
    //     return sendData;
    // }
    // setData(name,value){ //设置表单数据
    //     this.obj[name] = value;
    // }
    // render(name,option) { //返回select选项
    //     var select = $("[name="+ name +"]"),arr = [];
    //     arr.push('<option value="">请选择</option>');
    //     for(var i=0;i<option.length;i++){
    //         arr.push('<option value="'+ option[i].value +'">'+ option[i].key +'</option>');
    //     }
    //     select.html(arr.join(""));
    // }
    // objToForm(obj,isInit) { //数据到Dom
    //     if(isInit){ //初始化状态
    //         for(var i in obj){
    //             let dom = $("[name="+ i +"]");
    //             if(dom.attr("type") == "checkbox"){
    //                 if(obj[i]){
    //                     dom.attr("checked","true");
    //                 }else{
    //                     dom.removeAttr("checked");
    //                 }
    //             }else if(dom.attr("type") == "radio"){
    //                 $("[name="+ i +"][value="+ obj[i] +"]").trigger("click");
    //             }else{
    //                dom.val(obj[i]);
    //             }
    //             for(var item in this.action){
    //                 if(i == this.action[item].name){
    //                     this.action[item].callback.call(this,obj[i]);
    //                 }
    //             }
    //         }
    //         if(typeof this.callback == 'function'){
    //             this.callback(obj);
    //         }
    //     }else{
    //         for(var i in obj){
    //             if(i !== "$observer" && i !== "$observeProps"){
    //                 let dom = $("[name="+ i +"]");
    //                 if(dom.attr("type") == "checkbox"){
    //                     if(obj[i]){
    //                         dom.attr("checked","true");
    //                     }else{
    //                         dom.removeAttr("checked");
    //                     }
    //                 }else if(dom.attr("type") == "radio"){
    //                     $("[name="+ i +"][value="+ obj[i] +"]").trigger("click");
    //                 }else{
    //                     dom.val(obj[i]);
    //                 }
    //             }
    //         }
    //     }
    // }
    // formatForm(formname) { //表单数据获取
    //     var list = $("[name="+ formname +"]").find("[name]");
    //     var obj = {};
    //     for(var i = 0;i<list.length;i++){
    //         if(list.eq(i).attr("type") == "checkbox"){
    //             obj[list.eq(i).attr("name")] = list.eq(i).is(":checked");
    //         }else{
    //             obj[list.eq(i).attr("name")] = list.eq(i).val();
    //         }
    //     }
    //     return obj;
    // }
    // validateFn() { //表单校验
    //     var validate = this.validate;
    //     var keys = Object.keys(validate),
    //         len = keys.length,
    //         formData = this.getData(),
    //         flag = true;
    //     if (len > 0) {
    //         outerLoop: for (var i = 0; i < len; i++) {
    //             var key = keys[i],
    //                 valArr = validate[key],
    //                 valArrLen = valArr.length,
    //                 keyValue = formData[key],
    //                 isNeed = false; //非必填
    //             for (var m = 0; m < valArrLen; m++) { //判断字段是否必填
    //                 if ("default" in valArr[m]) {
    //                     isNeed = true;
    //                 }
    //             };
    //             innerLoop: for (var j = 0; j < valArrLen; j++) {
    //                 var valArrItem = valArr[j];
    //                 if (isNeed && (typeof keyValue === "undefined" || keyValue === "" || keyValue === null)) { //必填项未填写
    //                     if (valArrItem.error) {
    //                         this.showErr(valArrItem.error,key);
    //                     } else {
    //                         this.showErr(key + "不能为空！",key);
    //                     };
    //                     flag = false;
    //                     break outerLoop;
    //                 } else if (typeof keyValue !== "undefined" && keyValue !== "" && valArrItem.rule instanceof RegExp) { //正则判断
    //                     var reg = new RegExp(valArrItem.rule);
    //                     if (!reg.test(keyValue)) {
    //                         this.showErr(valArrItem.error,key);
    //                         flag = false;
    //                         break outerLoop;
    //                     }else {
    //                         if (typeof valArrItem.des !== "undefined") {
    //                             this.showDes(valArrItem.des,key);
    //                         }
    //                         break innerLoop;
    //                     };
    //                 } else if (typeof keyValue !== "undefined" && keyValue !== "" && typeof valArrItem.rule === "function") { //其他规则判断
    //                     if (!valArrItem.rule(keyValue)) {
    //                         this.showErr(valArrItem.error,key);
    //                         flag = false;
    //                         break outerLoop;
    //                     }else {
    //                         if (typeof valArrItem.des !== "undefined") {
    //                             this.showDes(valArrItem.des,key);
    //                         }
    //                         break innerLoop;
    //                     };
    //                 } else if (typeof keyValue === "undefined" || keyValue === "") { //无内容输入状态
    //                     if (typeof valArrItem.des !== "undefined") {
    //                         this.showDes(valArrItem.des,key);
    //                     }
    //                     break innerLoop;
    //                 };
    //             }
    //         }
    //     }
    //     return flag;
    // }
    // init() { //初始化
    //     var that = this;
    //     if(!that.formName){
    //         that.showErr("表单name必须设定");
    //         return false;
    //     }
    //     that.objToForm(that.defaultValue,true);
    //     that.obj = that.formatForm(that.formName);
    //     obajs(that.obj,(name, value, oldValue, path) => {
    //         for(var item in this.action){
    //             if(name == this.action[item].name){
    //                 this.action[item].callback.call(this,value);
    //             }
    //             continue;
    //         }
    //         this.objToForm(this.obj);
    //         if(typeof this.callback == 'function'){
    //             this.callback(this.getData());
    //         }
    //     });
    //     $("[name="+ that.formName +"]").on("blur","input[name]",function(){
    //         that.obj[$(this).attr("name")] = $(this).val();
    //     });
    //     $("[name="+ that.formName +"]").on("blur","textarea[name]",function(){
    //         that.obj[$(this).attr("name")] = $(this).val();
    //     });
    //     $("[name="+ that.formName +"]").on("change","select[name]",function(){
    //         that.obj[$(this).attr("name")] = $(this).val();
    //     });
    //     $("[name="+ that.formName +"]").on("click","input[type='checkbox']",function(){
    //         that.obj[$(this).attr("name")] = $(this).is(":checked");
    //     });
    // }
};