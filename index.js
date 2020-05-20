<!DOCTYPE html>
<html>
<head>
	<title>Show / Hide Password</title>
</head>
<style>
	.container{
		margin: 100px;
	}
</style>
<body>

<div class="container">

<form>
	<label>
		Username : <br>
	</label>
	<input type="text" name="username">

	<br><br>

	<label>
		Password : <br>
	</label>
	<input type="password" name="password" id="pass">
	<br><br>

	<input type="checkbox" name="checkbox" onclick="Toggle()">
	Show / Hide Password

	<br><br>

	<button>
		Login
	</button>
</form>

<br>

<b>instagram :</b> <a href="https://instagram.com/ihzarizkyk" target="_blank">ihzarizkyk</a>


</div>

<script>
	function Toggle(){
		var temp = document.getElementById('pass');
		if(temp.type == "password"){
			temp.type = "text";
		}else{
			temp.type = "password";
		}
	}
</script>
</body>
</html>
