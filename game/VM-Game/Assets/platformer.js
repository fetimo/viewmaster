var mySpeed : float = 10.0;
var gravity : float = 1.0;
var jumpAmount : float = 20.0;
var burstPart : ParticleEmitter;
private var moveDirection : Vector3 = Vector3.zero;

function Update () {
	//Lock Z axis
	transform.position.z = 0;
	
	var controller : CharacterController = GetComponent(CharacterController);
	var h : float = Input.GetAxis("Horizontal");
	
	if(controller.isGrounded){
	
		if(h <= 0){
			moveDirection = Vector3(h,0,0);
			transform.rotation.y = 180;	
		}else{
			moveDirection = Vector3(h,0,0);
			transform.rotation.y = 0;
		}

		moveDirection *= mySpeed;
		
		if(Input.GetButton("Jump")){
			moveDirection.y = jumpAmount;	
		}
	}
		moveDirection.y -= gravity * Time.deltaTime;
		controller.Move(moveDirection * Time.deltaTime);
}

function OnTriggerEnter(other : Collider){

	if(other.gameObject.tag == "collectable"){
		Instantiate(burstPart, other.transform.position, other.transform.rotation);
		Destroy(other.gameObject);	
	}
}