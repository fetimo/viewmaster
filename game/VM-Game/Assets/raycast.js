var stars : ParticleEmitter;




function Update () {
	
	 
   var up = transform.TransformDirection(Vector3.up);
   var hit : RaycastHit;    
   Debug.DrawRay(transform.position, up * 10, Color.green);
 
   if(Physics.Raycast(transform.position, -up, hit, 10)){   
      if(hit.collider.gameObject.name == "panel"){
      Instantiate(stars, transform.position, transform.rotation);

      }
   }
}