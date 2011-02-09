var weightPos : Transform;
var weightDropped : boolean = false;
var block : Rigidbody;
var stars : ParticleEmitter;
var myClip : AudioClip;
var boulderPos : Transform;



function Update () {
	
var up = transform.TransformDirection(Vector3.up);
  var hit : RaycastHit;    

	
     if(Physics.Raycast(transform.position, up, hit, 10)){
 			if(hit.collider.gameObject.name == "faller"){
   			
    			hit.collider.gameObject.AddComponent(Rigidbody); 

 			}
 			//look and weight 
 			if(hit.collider.gameObject.name == "dropper"){
   				if(!weightDropped)
				makeWeight();

 			}
	
			//look destroy boulder
 			if(hit.collider.gameObject.name == "boulders(Clone)"){
   			
   								
				destroyBoulder();

 			}

	
	
		}
	}

function makeWeight(){
	weightDropped = true;
	//instantiate the weight here


 Instantiate(block, weightPos.position, weightPos.rotation);
}




function destroyBoulder(){
	 
	//destroy boulder here
	   			Instantiate(stars, transform.position, transform.rotation);
	   			
	   			Destroy(gameObject.Find("boulders(Clone)"));	 

				Instantiate(stars, boulderPos.position, boulderPos.rotation);

 				audio.PlayOneShot(myClip);
	
	
}
