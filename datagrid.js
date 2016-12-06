$(function () {
    $('#mydatagrid').datagrid({
        //title : 'datagrid实例',
        //iconCls : 'icon-ok',
        //width : 600,
        url: 'data/datagrid_data1.json',//url调用Action方法
        fit: true,   //自适应大小
        pageSize: 5,//默认选择的分页是每页5行数据
        pageList: [5, 10, 15, 20],//可以选择的分页集合
        nowrap: true,//设置为true，当数据长度超出列宽时将会自动截取
        striped: true,//设置为true将交替显示行背景。
        collapsible: true,//显示可折叠按钮
        selectOnCheck: true, //点击复选框则高亮该行
        checkOnSelect: false, //点击行任意位置表示选择了改行
        toolbar: "#tb",//在添加 增添、删除、修改操作的按钮要用到这个
        loadMsg: 'data loading......',
        singleSelect: false,//为true时只能选择单行
        fitColumns: true,//允许表格自动缩放，以适应父容器
        //sortName : 'xh',//当数据表格初始化时以哪一列来排序
        //sortOrder : 'desc',//定义排序顺序，可以是'asc'或者'desc'（正序或者倒序）。
        remoteSort: false,
        pagination: true,//分页
        rownumbers: true, //行数
        //以下code完成高亮显示的一些bug
        onClickCell: function (rowIndex, field, value) {
            IsCheckFlag = false;
        },

        onSelect: function (rowIndex, rowData) {

            if (typeof(IsCheckFlag)=="undefined" || !IsCheckFlag) {
                IsCheckFlag = true;
                $("#mydatagrid").datagrid("unselectRow", rowIndex);
            }
        },

        onUnselect: function (rowIndex, rowData) {
            if (typeof(IsCheckFlag)=="undefined" ||!IsCheckFlag) {
                IsCheckFlag = true;
                $("#mydatagrid").datagrid("selectRow", rowIndex);
            }
        }
    });

});


function getSelections() {
    var ss = [];
    var rows = $('#mydatagrid').datagrid('getSelections');
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        ss.push('<span>' + row.itemid + ":" + row.productid + ":" + row.attr1 + '</span>');
    }
    $.messager.alert('Info', ss.join('<br/>'));
}


//数据分页示例： http://blog.csdn.net/lhq13400526230/article/details/9158111