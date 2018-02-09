onerror=handleErr
var txt=""

function handleErr(msg,url,l)
{
	txt="控制台提示:\n\n"
	txt+="错误类型: " + msg + "\n\n"
	txt+="出错行数:第 " + l + " 行\n\n"
	txt+="点击确定继续\n\n"
	alert(txt)
	return true
}