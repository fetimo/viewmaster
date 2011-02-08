
function Update () { 
	var up = transform.TransformDirection(Vector3.up);
	var hit : RaycastHit;    
	Debug.DrawRay(transform.position, up * 10, Color.blue);
}