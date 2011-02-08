var Gl : GameObject;

function Update () {

	if(Input.GetButtonUp("Jump")){
		var instance : GameObject = Instantiate(Gl, transform.position,transform.rotation);
	}
}