var stars : ParticleEmitter;

function Update () { 
	
	var hit : RaycastHit; 

	
		if(hit.collider.gameObject.name == "panel"){
			Instantiate(stars, transform.position, transform.rotation);
       }
 	}
