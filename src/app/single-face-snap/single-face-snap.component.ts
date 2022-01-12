import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/FaceSnap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  IsSnapped: boolean = false;
  buttonText!: string;

  constructor(private faceSnapsService : FaceSnapsService, private route: ActivatedRoute){}
  ngOnInit(): void {
  const id = +this.route.snapshot.params['id'];
  this.faceSnap = this.faceSnapsService.getFaceSnapById(id);
  this.buttonText = 'Oh Snap!';
  }

  onSnap(){
    if(this.IsSnapped){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
      this.buttonText = 'Oh Snap!';
      this.IsSnapped=false;
    }else{
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
      this.buttonText = 'Oh Unsnap!';
      this.IsSnapped=true;
    }
    
  }
}
