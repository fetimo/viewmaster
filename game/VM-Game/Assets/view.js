var mySpeed : float = 10;

function Update () {
	var hSpeed : float = 5.0;    
	var h : float = hSpeed * Input.GetAxis ("Mouse Y");
	transform.Rotate (0,0,h);
}