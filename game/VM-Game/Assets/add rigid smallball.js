
function Update () {

	var up = transform.TransformDirection(Vector3.up);
	var hit : RaycastHit;
	
	if(Physics.Raycast(transform.position, up, hit, 10)){
		if(hit.collider.gameObject.name == "smallball"){    			
			hit.collider.gameObject.AddComponent(Rigidbody); 
			hit.collider.gameObject.GetComponent(Rigidbody);	
		}
	}
}