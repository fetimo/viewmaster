function OnCollisionEnter (myCollision : Collision) {
 if(myCollision.gameObject.name == "tunnel-base"){
  Destroy(myCollision.gameObject);
  }
 }
