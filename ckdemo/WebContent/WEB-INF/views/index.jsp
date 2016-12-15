<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:import url="common/common.jsp"></c:import>
<title>ckeditor</title>
</head>
<body>
	${base }
	<p>
	<h1>${msg }</h1>
	<form>
		<textarea name="editor1" id="editor1">
			如果想让图片居中显示，请先选择居中，然后再插入图片
        </textarea>
	</form>
	<script type="text/javascript">
		var editor = CKEDITOR.replace('editor1');
		CKFinder.setupCKEditor(editor, '${base }/assets/ckfinder/');
	</script>
</body>
</html>